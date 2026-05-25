package com.rrw.driver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import com.rrw.utils.*;

/**
 * BrowserManager
 * --------------
 * Config se browser ka naam padho, kholo, aur band karo.
 * Ek waqt mein sirf ek browser khula rahega.
 */
public final class BrowserManager {

    private static WebDriver driver = null;

    // Bahar se object banana allowed nahi
    private BrowserManager() {}


    // ─── Browser Kholo ───────────────────────────────────────

    /**
     * Agar browser pehle se khula hai → wahi wapas karo.
     * Nahi hai → config padho aur naya kholo.
     */
    public static WebDriver openBrowser() {
        if (driver != null) return driver;

        String browserName = PropertyReader.getConfigProperty("browserName");

        try {
            driver = startBrowser(browserName);
        } catch (Exception e) {
            throw new RuntimeException("Browser open nahi hua: " + e.getMessage(), e);
        }

        return driver;
    }


    // ─── Browser Band Karo ───────────────────────────────────

    /**
     * Test khatam? Yeh call karo — browser quit ho jayega.
     */
    public static void closeBrowser() 
    {
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }


    // ─── Private: Browser Start Logic ────────────────────────

    private static WebDriver startBrowser(String browserName) {
        switch (browserName.toLowerCase()) {

            case "firefox":
                FirefoxOptions firefox = new FirefoxOptions();
                firefox.addArguments("--headless");
                return new FirefoxDriver(firefox);

            case "edge":
                EdgeOptions edge = new EdgeOptions();
                edge.addArguments("--headless", "--window-size=1920,1080");
                return new EdgeDriver(edge);

            case "chrome":
            default:
                ChromeOptions chrome = new ChromeOptions();
                chrome.addArguments("--start-maximized");
                return new ChromeDriver(chrome);
        }
    }
}