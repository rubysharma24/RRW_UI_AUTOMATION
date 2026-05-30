package com.rrw.driver;

import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.rrw.utils.*;

import java.net.URL;
import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

public final class BrowserManager {

    private static ThreadLocal<WebDriver> openBrowser = new ThreadLocal<>();

    private BrowserManager() {}

    public static WebDriver openBrowser() {
        if (openBrowser.get() != null) {
            return openBrowser.get();
        }

        String browserName = PropertyReader.getConfigProperty("browserName");

        // ✅ System Property pehle, phir config.properties
        String gridEnabled = System.getProperty("gridEnabled") != null
            ? System.getProperty("gridEnabled")
            : PropertyReader.getConfigProperty("gridEnabled");

        String gridUrl = System.getProperty("gridUrl") != null
            ? System.getProperty("gridUrl")
            : PropertyReader.getConfigProperty("gridUrl");

        System.out.println("🔧 browserName : " + browserName);
        System.out.println("🔧 gridEnabled : " + gridEnabled);
        System.out.println("🔧 gridUrl     : " + gridUrl);

        try {
            WebDriver driver;

            if ("true".equalsIgnoreCase(gridEnabled)) {
                System.out.println("🌐 Grid mode — connecting to: " + gridUrl);
                driver = startRemoteBrowser(browserName, gridUrl);
            } else {
                System.out.println("💻 Local mode");
                driver = startBrowser(browserName);
            }

            driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
            driver.manage().timeouts().scriptTimeout(Duration.ofSeconds(30));
            openBrowser.set(driver);

        } catch (Exception e) {
            throw new RuntimeException("Browser open nahi ho saka! Reason: " + e.getMessage(), e);
        }
        return openBrowser.get();
    }

    public static void closeBrowser() {
        WebDriver driver = openBrowser.get();
        if (driver != null) {
            try {
                ((JavascriptExecutor) driver).executeScript("window.onbeforeunload = null;");
            } catch (Exception ignored) {}

            Thread quitter = new Thread(() -> {
                try {
                    driver.quit();
                } catch (Exception e) {
                    System.err.println("quit() error: " + e.getMessage());
                }
            });
            quitter.setDaemon(true);
            quitter.start();
            try {
                quitter.join(8000);
                if (quitter.isAlive()) {
                    System.err.println("⚠️ driver.quit() hung — proceeding anyway");
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            openBrowser.remove();
        }
    }

    // ✅ Remote/Grid browser
    private static WebDriver startRemoteBrowser(String browserName, String gridUrl) throws Exception {
        switch (browserName.toLowerCase()) {
            case "firefox":
                FirefoxOptions firefoxOptions = new FirefoxOptions();
                firefoxOptions.setPageLoadStrategy(PageLoadStrategy.EAGER);
                return new RemoteWebDriver(new URL(gridUrl), firefoxOptions);

            case "edge":
                EdgeOptions edgeOptions = new EdgeOptions();
                edgeOptions.setPageLoadStrategy(PageLoadStrategy.EAGER);
                edgeOptions.addArguments("--window-size=1920,1080");
                return new RemoteWebDriver(new URL(gridUrl), edgeOptions);

            case "chrome":
            default:
                ChromeOptions chromeOptions = buildChromeOptions();
                return new RemoteWebDriver(new URL(gridUrl), chromeOptions);
        }
    }

    // ✅ Local browser
    private static WebDriver startBrowser(String browserName) {
        switch (browserName.toLowerCase()) {
            case "firefox":
                FirefoxOptions firefox = new FirefoxOptions();
                firefox.setPageLoadStrategy(PageLoadStrategy.EAGER);
                return new FirefoxDriver(firefox);

            case "edge":
                EdgeOptions edge = new EdgeOptions();
                edge.setPageLoadStrategy(PageLoadStrategy.EAGER);
                edge.addArguments("--window-size=1920,1080");
                return new EdgeDriver(edge);

            case "chrome":
            default:
                return new ChromeDriver(buildChromeOptions());
        }
    }

    // ✅ Chrome options — headless for Linux/CI, normal for local
    private static ChromeOptions buildChromeOptions() {
        ChromeOptions chrome = new ChromeOptions();
        chrome.setPageLoadStrategy(PageLoadStrategy.EAGER);

        // ✅ Headless — Linux/CI pe automatically on
        String os = System.getProperty("os.name", "").toLowerCase();
        String headless = System.getProperty("headless", "false");

        if ("true".equalsIgnoreCase(headless) || os.contains("linux")) {
            System.out.println("🖥️ Headless mode ON");
            chrome.addArguments("--headless=new");
            chrome.addArguments("--window-size=1920,1080");
        } else {
            System.out.println("🖥️ Headless mode OFF");
            chrome.addArguments("--start-maximized");
        }

        chrome.addArguments("--disable-extensions");
        chrome.addArguments("--disable-notifications");
        chrome.addArguments("--disable-popup-blocking");
        chrome.addArguments("--disable-gpu");
        chrome.addArguments("--no-sandbox");
        chrome.addArguments("--disable-dev-shm-usage");
        chrome.addArguments("--disable-blink-features=AutomationControlled");

        Map<String, Object> prefs = new HashMap<>();
        prefs.put("profile.default_content_setting_values.notifications", 2);
        prefs.put("credentials_enable_service", false);
        prefs.put("profile.password_manager_enabled", false);
        chrome.setExperimentalOption("prefs", prefs);

        return chrome;
    }

    // ✅ Driver getter — step definitions ke liye
    public static WebDriver getDriver() {
        return openBrowser.get();
    }
}