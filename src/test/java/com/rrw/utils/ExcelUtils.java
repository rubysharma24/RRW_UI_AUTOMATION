package com.rrw.utils;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * ============================================================
 *  ExcelReader — "Excel File Padhne Wala"
 * ============================================================
 *
 *  MANAGER KE LIYE:
 *
 *  Yeh class Excel file kholti hai aur
 *  saara data padh ke deti hai.
 *
 *  Jaise ek assistant ko bolo:
 *    "Yeh Excel file padho, SearchTerms sheet se
 *     saara data nikaal ke do"
 *
 *  Woh seedha data de deta hai — bas!
 * ============================================================
 */
public class ExcelUtils {

    /**
     * Read sheet into list of maps. resourceOrFilePath can be:
     *  - classpath resource like "api_search_terms.xlsx" (placed under src/main/resources)
     *  - filesystem path like "C:/.../api_search_terms.xlsx" or "src/main/resources/api_search_terms.xlsx"
     *
     * It will auto-detect header row by scanning the first headerSearchLimit rows for expected header names.
     * @throws InvalidFormatException 
     */
    public static List<Map<String,String>> readSheetAsMaps(String resourceOrFilePath, String sheetName) throws InvalidFormatException {
        return readSheetAsMaps(resourceOrFilePath, sheetName, 10);
    }

    public static List<Map<String,String>> readSheetAsMaps(String resourceOrFilePath, String sheetName, int headerSearchLimit) throws InvalidFormatException {
        List<Map<String,String>> rows = new ArrayList<>();
        InputStream in = null;
        Workbook wb = null;

        // Try classpath first
        in = ExcelUtils.class.getClassLoader().getResourceAsStream(resourceOrFilePath);
        if (in != null) {
            System.out.println("Loading Excel from classpath: " + resourceOrFilePath);
        } else {
            // Try filesystem path
            File f = new File(resourceOrFilePath);
            if (f.exists() && f.isFile()) {
                try {
                    System.out.println("Loading Excel from filesystem: " + f.getAbsolutePath());
                    in = new FileInputStream(f);
                } catch (FileNotFoundException e) {
                    throw new RuntimeException("Excel file not found: " + resourceOrFilePath, e);
                }
            } else {
                throw new RuntimeException("Excel file not found on classpath or filesystem: " + resourceOrFilePath);
            }
        }

        try {
            // WorkbookFactory.create can throw IOException / InvalidFormatException; catch them below
            wb = WorkbookFactory.create(in);
            Sheet sheet = wb.getSheet(sheetName);
            if (sheet == null) {
                throw new RuntimeException("Sheet not found: " + sheetName + " in " + resourceOrFilePath);
            }

            DataFormatter formatter = new DataFormatter();

            // Auto-detect header row index
            int headerRowIndex = detectHeaderRow(sheet, formatter, headerSearchLimit);
            if (headerRowIndex < 0) {
                throw new RuntimeException("Header row not detected in first " + headerSearchLimit + " rows for sheet " + sheetName);
            }
            System.out.println("Detected header row at index: " + headerRowIndex);

            Row headerRow = sheet.getRow(headerRowIndex);
            int lastCol = headerRow.getLastCellNum();
            List<String> headers = new ArrayList<>();
            for (int c = 0; c < lastCol; c++) {
                Cell h = headerRow.getCell(c, Row.MissingCellPolicy.CREATE_NULL_AS_BLANK);
                String headerText = formatter.formatCellValue(h).trim();
                headers.add(headerText.isEmpty() ? ("COLUMN_" + c) : headerText);
            }

            // Iterate rows AFTER header row
            for (int r = headerRowIndex + 1; r <= sheet.getLastRowNum(); r++) {
                Row row = sheet.getRow(r);
                if (row == null) continue;

                Map<String,String> map = new LinkedHashMap<>();
                boolean allEmpty = true;

                for (int c = 0; c < lastCol; c++) {
                    Cell cell = row.getCell(c, Row.MissingCellPolicy.CREATE_NULL_AS_BLANK);
                    String val = formatter.formatCellValue(cell).trim();
                    if (!val.isEmpty()) allEmpty = false;
                    map.put(headers.get(c), val);
                }

                if (allEmpty) {
                    // skip completely empty rows
                    continue;
                }

                // Basic validation: require Test ID and Search_Input (case-insensitive)
                String testId = getColumnValueIgnoreCase(map, "Test ID");
                String searchInput = getColumnValueIgnoreCase(map, "Search_Input");
                if (isEmpty(testId) || isEmpty(searchInput)) {
                    System.out.println("⚠️ Skipping row " + r + " because Test ID or Search_Input missing.");
                    continue;
                }

                rows.add(map);
            }

        } catch (IOException e) {
            throw new RuntimeException("Failed to read Excel: " + resourceOrFilePath, e);
        } finally {
            try {
                if (wb != null) wb.close();
                if (in != null) in.close();
            } catch (IOException ignored) {}
        }

        System.out.println("✅ Loaded " + rows.size() + " rows from sheet " + sheetName);
        return rows;
    }

    private static boolean isEmpty(String s) {
        return s == null || s.trim().isEmpty();
    }

    private static String getColumnValueIgnoreCase(Map<String,String> map, String key) {
        for (Map.Entry<String,String> e : map.entrySet()) {
            if (e.getKey().equalsIgnoreCase(key)) return e.getValue();
        }
        return null;
    }

    /**
     * Attempts to find a header row within first headerSearchLimit rows.
     * We look for a row that contains at least these tokens: "Test ID" and "Search" or "Search_Input".
     */
    private static int detectHeaderRow(Sheet sheet, DataFormatter formatter, int headerSearchLimit) {
        int lastRow = Math.min(sheet.getLastRowNum(), headerSearchLimit - 1);
        for (int r = 0; r <= lastRow; r++) {
            Row row = sheet.getRow(r);
            if (row == null) continue;
            int nonBlankCells = 0;
            boolean hasTestId = false;
            boolean hasSearch = false;
            int maxCols = row.getLastCellNum() <= 0 ? 10 : row.getLastCellNum();
            for (int c = 0; c < maxCols; c++) {
                Cell cell = row.getCell(c, Row.MissingCellPolicy.CREATE_NULL_AS_BLANK);
                String txt = formatter.formatCellValue(cell).trim().toLowerCase();
                if (!txt.isEmpty()) nonBlankCells++;
                if (txt.equalsIgnoreCase("test id") || txt.equalsIgnoreCase("testid") || txt.contains("test id")) hasTestId = true;
                if (txt.equalsIgnoreCase("search_input") || txt.equalsIgnoreCase("search input") || txt.contains("search_") || txt.contains("search input")) hasSearch = true;
            }
            // require both tokens and at least 2 non-blank cells to be safe
            if (hasTestId && hasSearch && nonBlankCells >= 2) {
                return r;
            }
        }
        return -1;
    }}