//package com.stepDefinations;
//
//import com.rrw.utils.ExcelUtils;
//
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
//import io.restassured.RestAssured;
//import io.restassured.response.Response;
//import org.testng.Assert;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Map;
//
//public class SearchAutocompleteSteps {
//
//    // ====== CONFIG (apne hisaab se update karo) ======
//	private static final String EXCEL_FILE = 
//		    System.getProperty("user.dir") + 
//		    "/src/main/resources/api_search_terms.xlsx"; // src/main/resources mein hai
//    private static final String BASE_URL = "https://stagingapi.roadreadywheels.com";  // TODO
//
//    // Sheet name ke base par endpoint decide karega
//    private static String getEndpointForSheet(String sheetName) {
//        if (sheetName.toLowerCase().contains("global"))    return "/api/search/global";
//        if (sheetName.toLowerCase().contains("oenumber"))  return "/api/search/oe";
//        if (sheetName.toLowerCase().contains("hollander")) return "/api/search/hollander";
//        throw new IllegalArgumentException("Unknown sheet: " + sheetName);
//    }
//
//    // ====== STATE (scenario ke beech share hota hai) ======
//    private List<Map<String, String>> testRows;
//    private final List<Response> responses = new ArrayList<>();
//
//    // ====== STEPS ======
//
//    @When("I send a Valid search request using Excel sheet {string}")
//    public void sendSearchRequests(String sheetName) throws Exception {
//        testRows = ExcelUtils.readSheetAsMaps(EXCEL_FILE, sheetName);
//        String endpoint = getEndpointForSheet(sheetName);
//
//        responses.clear();
//
//        for (Map<String, String> row : testRows) {
//            String testId = row.get("Test ID");
//            String searchInput = row.get("Search_Input");
//
//            System.out.println("▶ " + testId + " | input: " + searchInput);
//
//            Response response = RestAssured
//                    .given()
//                        .baseUri(BASE_URL)
//                        .header("Content-Type", "application/json")
//                        .queryParam("query", searchInput)        // ya jo bhi param name ho
//                    .when()
//                        .get(endpoint);                           // GET hai assume kiya, POST chahiye toh badal lo
//
//            responses.add(response);
//        }
//    }
//
//    @Then("I validate the API response contains correct keys and values")
//    public void validateResponses() {
//        int passed = 0, failed = 0;
//
//        for (int i = 0; i < responses.size(); i++) {
//            Response response = responses.get(i);
//            Map<String, String> row = testRows.get(i);
//            String testId = row.get("Test ID");
//            String input = row.get("Search_Input");
//
//            try {
//                // 1. Status code 200
//                Assert.assertEquals(response.getStatusCode(), 200,
//                        "Status not 200 for " + testId);
//
//                // 2. Response non-empty
//                Assert.assertNotNull(response.getBody(), "Empty body for " + testId);
//
//                // 3. Required keys exist (apne API ke hisaab se badlo)
//                Assert.assertNotNull(response.jsonPath().get("data"),
//                        "'data' key missing for " + testId);
//
//                // 4. Results non-empty (search ka meaning ye hai ki kuch toh mile)
//                List<?> results = response.jsonPath().getList("data");
//                Assert.assertFalse(results.isEmpty(),
//                        "No results returned for " + testId + " (input: " + input + ")");
//
//                System.out.println("✅ " + testId + " PASSED");
//                passed++;
//            } catch (AssertionError e) {
//                System.out.println("❌ " + testId + " FAILED → " + e.getMessage());
//                failed++;
//            }
//        }
//
//        System.out.println("\n=== SUMMARY ===");
//        System.out.println("Passed: " + passed + " | Failed: " + failed + " | Total: " + responses.size());
//
//        if (failed > 0) {
//            Assert.fail(failed + " out of " + responses.size() + " test cases failed");
//        }
//    }}