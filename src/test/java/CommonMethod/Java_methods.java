package CommonMethod;

import com.rrw.driver.BrowserManager;
import com.rrw.utils.PropertyReader;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class Java_methods {

    public static WebDriver driver;

    // Default timeouts (seconds)
    private static final int DEFAULT_TIMEOUT      = 10;
    private static final int SHORT_TIMEOUT        = 5;
    private static final int LONG_TIMEOUT         = 30;

    // ════════════════════════════════════════════
    //  BROWSER LIFECYCLE
    // ════════════════════════════════════════════

    public static void openBrowserAndNavigate() {
        String url = PropertyReader.getConfigProperty("url");
        driver = BrowserManager.openBrowser();
        driver.get(url);
        System.out.println("✅ Browser opened, navigated to: " + url);
    }

    public static void closeBrowser() {
        BrowserManager.closeBrowser();
        driver = null;
        System.out.println("🔒 Browser closed");
    }

    /** Safe driver getter — initializes if null. Used internally to prevent NullPointerException. */
    private static WebDriver getDriver() {
        if (driver == null) {
            driver = BrowserManager.openBrowser();
        }
        return driver;
    }

    // ════════════════════════════════════════════
    //  LOCATOR PARSER (single source of truth)
    // ════════════════════════════════════════════

    /**
     * String locator ko By object mein convert karta hai.
     * Supports: xpath (//), css=, id=, name=, class=, linkText=, link=
     * Default fallback: xpath
     */
    public static By byLocator(String locator) {
        if (locator == null || locator.isBlank()) {
            throw new IllegalArgumentException("Locator cannot be null/blank");
        }

        if (locator.startsWith("//") || locator.startsWith(".//") || locator.startsWith("(//")) {
            return By.xpath(locator);
        } else if (locator.startsWith("xpath=")) {
            return By.xpath(locator.substring(6));
        } else if (locator.startsWith("css=")) {
            return By.cssSelector(locator.substring(4));
        } else if (locator.startsWith("id=")) {
            return By.id(locator.substring(3));
        } else if (locator.startsWith("name=")) {
            return By.name(locator.substring(5));
        } else if (locator.startsWith("class=")) {
            return By.className(locator.substring(6));
        } else if (locator.startsWith("linkText=") || locator.startsWith("link=")) {
            return By.linkText(locator.replaceFirst("(linkText=|link=)", ""));
        } else {
            // Default: treat as xpath
            return By.xpath(locator);
        }
    }

    /** Backward-compat alias — old code uses ByLocator (PascalCase) */
    public static By ByLocator(String locator) {
        return byLocator(locator);
    }

    // ════════════════════════════════════════════
    //  WAIT METHODS
    // ════════════════════════════════════════════

    public static WebElement waitForElementPresent(String locator, int timeoutSec) {
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(timeoutSec));
        return wait.until(ExpectedConditions.presenceOfElementLocated(byLocator(locator)));
    }

    public static WebElement waitForElementVisible(String locator, int timeoutSec) {
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(timeoutSec));
        return wait.until(ExpectedConditions.visibilityOfElementLocated(byLocator(locator)));
    }

    public static WebElement waitForElementClickable(String locator, int timeoutSec) {
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(timeoutSec));
        return wait.until(ExpectedConditions.elementToBeClickable(byLocator(locator)));
    }

    /** Backward-compat — old PascalCase name. FIXED: now actually uses timeout parameter. */
    public static WebElement WaitForElementPresent(String locator, int timeout) {
        return waitForElementPresent(locator, timeout);  // ✅ FIXED: parameter ab actually use ho raha
    }

    /** Backward-compat — By overload */
    public static WebElement WaitForElementPresent(By locator, int timeout) {
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(timeout));
        return wait.until(ExpectedConditions.presenceOfElementLocated(locator));
    }

    /** Backward-compat — WebElement overload */
    public static void waitForElementToBeClickable(WebElement element) {
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(DEFAULT_TIMEOUT));
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    // ════════════════════════════════════════════
    //  CORE ACTIONS — Click, Type, GetText
    // ════════════════════════════════════════════

    public static void clickOn(String locator) {
        try {
            WebElement el = waitForElementClickable(locator, DEFAULT_TIMEOUT);
            el.click();
            System.out.println("🖱️ Clicked: " + locator);
        } catch (Exception e) {
            System.err.println("❌ Click failed: " + locator + " | " + e.getMessage());
            throw new RuntimeException("Click failed on: " + locator, e);  // ✅ Fail fast
        }
    }

    public static void typeText(String locator, String text) {
        try {
            WebElement el = waitForElementVisible(locator, DEFAULT_TIMEOUT);
            el.clear();
            el.sendKeys(text);
            System.out.println("⌨️ Typed '" + text + "' in: " + locator);
        } catch (Exception e) {
            System.err.println("❌ Type failed: " + locator + " | " + e.getMessage());
            throw new RuntimeException("Type failed on: " + locator, e);
        }
    }

    public static void sendKeys(String locator, String text) {
        try {
            WebElement el = waitForElementVisible(locator, DEFAULT_TIMEOUT);
            el.sendKeys(text);  // no clear() — for appending or non-input fields
        } catch (Exception e) {
            System.err.println("❌ sendKeys failed: " + locator + " | " + e.getMessage());
            throw new RuntimeException("sendKeys failed on: " + locator, e);
        }
    }

    public static String getText(String locator) {
        try {
            WebElement el = waitForElementVisible(locator, DEFAULT_TIMEOUT);
            String text = el.getText();
            System.out.println("📖 Text: " + text);
            return text;
        } catch (Exception e) {
            System.err.println("❌ getText failed: " + locator);
            return "";
        }
    }

    public static String GetFieldValue(String locator) {
        WebElement el = waitForElementVisible(locator, DEFAULT_TIMEOUT);  // ✅ FIXED: was timeout=0
        return el.getText().trim();
    }

    public static String GetFieldValue(By locator) {
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(DEFAULT_TIMEOUT));
        WebElement el = wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
        return el.getText().trim();
    }

    public static boolean isVisible(String locator) {
        try {
            return waitForElementVisible(locator, SHORT_TIMEOUT).isDisplayed();
        } catch (Exception e) {
            System.out.println("⚠️ Not visible: " + locator);
            return false;
        }
    }

    // ════════════════════════════════════════════
    //  TOAST / SHORT-LIVED MESSAGES
    // ════════════════════════════════════════════

    public static String getToastMessage(String locator) {
        try {
            WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(SHORT_TIMEOUT));
            WebElement toast = wait.until(
                    ExpectedConditions.presenceOfElementLocated(byLocator(locator)));
            // textContent → fast-disappearing elements ke liye reliable
            return toast.getAttribute("textContent").trim();
        } catch (Exception e) {
            return "";
        }
    }

    // ════════════════════════════════════════════
    //  DROPDOWN
    // ════════════════════════════════════════════

    public static void selectDropDownByIndex(String locator, int index) {
        WebElement el = waitForElementClickable(locator, DEFAULT_TIMEOUT);
        new Select(el).selectByIndex(index);
        System.out.println("📋 Selected dropdown index " + index + " in: " + locator);
    }

    public static void selectDropDownByVisibleText(String locator, String text) {
        WebElement el = waitForElementClickable(locator, DEFAULT_TIMEOUT);
        new Select(el).selectByVisibleText(text);
    }

    public static void selectDropDownByValue(String locator, String value) {
        WebElement el = waitForElementClickable(locator, DEFAULT_TIMEOUT);
        new Select(el).selectByValue(value);
    }

    // ════════════════════════════════════════════
    //  EXPIRY DATE HELPERS
    // ════════════════════════════════════════════

    /** "9,2027" → ["09", "2027"] */
    public static String[] formatExpiryDate(String rawExpiry) {
        try {
            String[] parts = rawExpiry.split(",");
            String month = parts[0].trim();
            String year = parts[1].trim();
            if (month.length() == 1) month = "0" + month;
            return new String[]{month, year};
        } catch (Exception e) {
            System.err.println("Expiry format error: " + e.getMessage());
            return new String[]{"", ""};
        }
    }

    /** Sets HTML5 input type="month" via JS + dispatches React events */
    public static void setMonthYearInput(String xpath, String month, String year) {
        try {
            String value = year + "-" + month;
            WebElement el = waitForElementPresent(xpath, DEFAULT_TIMEOUT);
            JavascriptExecutor js = (JavascriptExecutor) getDriver();
            js.executeScript("arguments[0].value = arguments[1];", el, value);
            js.executeScript(
                    "arguments[0].dispatchEvent(new Event('input',  {bubbles:true}));" +
                    "arguments[0].dispatchEvent(new Event('change', {bubbles:true}));",
                    el);
            System.out.println("📅 Expiry set: " + value);
        } catch (Exception e) {
            System.err.println("setMonthYearInput error: " + e.getMessage());
        }
    }

    // ════════════════════════════════════════════
    //  SCROLL ACTIONS
    // ════════════════════════════════════════════

    public static void scrollToElementAndClick(String locator) {
        try {
            WebElement el = waitForElementPresent(locator, DEFAULT_TIMEOUT);
            ((JavascriptExecutor) getDriver()).executeScript(
                    "arguments[0].scrollIntoView({block:'center', inline:'nearest'});", el);
            // No Thread.sleep — wait for clickability is enough
            new WebDriverWait(getDriver(), Duration.ofSeconds(DEFAULT_TIMEOUT))
                    .until(ExpectedConditions.elementToBeClickable(el));
            ((JavascriptExecutor) getDriver()).executeScript("arguments[0].click();", el);
            System.out.println("📜 Scrolled & clicked: " + locator);
        } catch (Exception e) {
            System.err.println("❌ Scroll+click failed: " + locator + " | " + e.getMessage());
            throw new RuntimeException("Scroll+click failed on: " + locator, e);
        }
    }

    public static void scrollToElementAndSendKeys(String locator, String text) {
        try {
            WebElement el = waitForElementPresent(locator, DEFAULT_TIMEOUT);
            ((JavascriptExecutor) getDriver()).executeScript(
                    "arguments[0].scrollIntoView({block:'center', inline:'nearest'});", el);
            new WebDriverWait(getDriver(), Duration.ofSeconds(DEFAULT_TIMEOUT))
                    .until(ExpectedConditions.visibilityOf(el));
            el.clear();
            el.sendKeys(text);
            System.out.println("📜 Scrolled & typed '" + text + "' in: " + locator);
        } catch (Exception e) {
            System.err.println("❌ Scroll+type failed: " + locator + " | " + e.getMessage());
            throw new RuntimeException("Scroll+type failed on: " + locator, e);
        }
    }

    public static void scrollByXPath(String xpath) {
        WebElement element = waitForElementPresent(xpath, DEFAULT_TIMEOUT);
        ((JavascriptExecutor) getDriver()).executeScript(
                "arguments[0].scrollIntoView(true);", element);
        System.out.println("📜 Scrolled to: " + element.getText());
    }

    public static void clickByJS(String locator) {
        WebElement el = waitForElementPresent(locator, DEFAULT_TIMEOUT);
        ((JavascriptExecutor) getDriver()).executeScript("arguments[0].click();", el);
        System.out.println("🖱️ JS click: " + locator);
    }

    public static void scrollWithClickByJS(String locator) {
        JavascriptExecutor js = (JavascriptExecutor) getDriver();
        js.executeScript("window.scrollTo(0, 0);");
        WebElement el = waitForElementPresent(locator, DEFAULT_TIMEOUT);
        js.executeScript("arguments[0].click();", el);
    }

    /** Backward-compat alias */
    public static void ScrollWithclickByJS(String locator) {
        scrollWithClickByJS(locator);
    }

    // ════════════════════════════════════════════
    //  LOGIN STATE CHECK
    // ════════════════════════════════════════════

    public static boolean isLoginSuccessful() {
        return getDriver().getCurrentUrl().contains("just_sign_in=true");
    }
}