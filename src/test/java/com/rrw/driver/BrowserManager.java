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

import com.rrw.utils.*;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

public final class BrowserManager {

    private static WebDriver openBrowser = null;

    private BrowserManager() {}

    public static WebDriver openBrowser() {
        if (openBrowser != null) {
            return openBrowser;
        }
        String browserName = PropertyReader.getConfigProperty("browserName");
        try {
            openBrowser = startBrowser(browserName);
            
            // ⚡ Page load timeout — 30 sec se zyada nahi
            openBrowser.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30));
            openBrowser.manage().timeouts().scriptTimeout(Duration.ofSeconds(30));
            
        } catch (Exception e) {
            throw new RuntimeException(
                "Browser open nahi ho saka! Reason: " + e.getMessage(), e
            );
        }
        return openBrowser;
    }

    public static void closeBrowser() {
        if (openBrowser != null) {
            WebDriver toClose = openBrowser;
            openBrowser = null;
            
            // Suppress unload dialogs
            try {
                ((JavascriptExecutor) toClose).executeScript("window.onbeforeunload = null;");
            } catch (Exception ignored) {}
            
            // Quit with timeout protection
            Thread quitter = new Thread(() -> {
                try {
                    toClose.quit();
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
        }
    }

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
                ChromeOptions chrome = new ChromeOptions();
                
                // ⚡⚡⚡ KEY FIX — EAGER strategy
                chrome.setPageLoadStrategy(PageLoadStrategy.EAGER);
                
                // Speed optimizations
                chrome.addArguments("--disable-extensions");
                chrome.addArguments("--disable-notifications");
                chrome.addArguments("--disable-popup-blocking");
                chrome.addArguments("--disable-gpu");
                chrome.addArguments("--no-sandbox");
                chrome.addArguments("--disable-dev-shm-usage");
                chrome.addArguments("--disable-blink-features=AutomationControlled");
                chrome.addArguments("--start-maximized");
                
                // Block notifications + tracking-heavy stuff via prefs
                Map<String, Object> prefs = new HashMap<>();
                prefs.put("profile.default_content_setting_values.notifications", 2);
                prefs.put("credentials_enable_service", false);
                prefs.put("profile.password_manager_enabled", false);
                chrome.setExperimentalOption("prefs", prefs);
                
                return new ChromeDriver(chrome);
        }
    }
}