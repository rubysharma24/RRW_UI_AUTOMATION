package CommonMethod;
import com.rrw.driver.BrowserManager;
import com.rrw.utils.PropertyReader;
import io.cucumber.shaded.messages.types.JavaMethod;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class Java_methods {

    public static WebDriver driver;
    private static final int timeout = 10;

    // ════════════════════════════════════════════
    //  BROWSER KHOLO
    // ════════════════════════════════════════════
    public static void openBrowserAndNavigate() {
        String url = PropertyReader.getConfigProperty("url");
        driver = BrowserManager.openBrowser();
        
        try {
            driver.get(url);
            System.out.println("✅ Browser opened, navigated to: " + url);
        } catch (org.openqa.selenium.TimeoutException e) {
            // ⚡ Page didn't fully load — stop loading, continue
            System.out.println("⚠️ Page load timed out — calling window.stop() and proceeding");
            try {
                ((JavascriptExecutor) driver).executeScript("window.stop();");
            } catch (Exception ignored) {}
            System.out.println("✅ Continuing with partial page load: " + url);
        }
    }

    // ════════════════════════════════════════════
    //  BROWSER BAND KARO
    // ════════════════════════════════════════════
    public static void closeBrowser() {
        BrowserManager.closeBrowser();
        System.out.println("");
    }

 
    public static String getToastMessage(String locator) {
        try {
            WebDriverWait wait = new WebDriverWait(BrowserManager.openBrowser(), Duration.ofSeconds(5));
            
            WebElement toast = wait.until(
                ExpectedConditions.presenceOfElementLocated(By.xpath(locator))
            );
            
          
            return toast.getAttribute("textContent").trim();
            
        } catch (Exception e) {
            return "";
        }
    }
    
    public static void selectDropDownByIndex(String locator, int index) {
//		Assert.assertTrue(isElementPresent(locator), "Element Locator :"
//				+ locator + " Not found");
		WebElement waitForElementPresent = Java_methods.WaitForElementPresent(locator, 60);
		new Select(waitForElementPresent)
		.selectByIndex(index);

	}
		public static WebElement WaitForElementPresent(By locator, int timeout) {
		    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeout));
		    return wait.until(ExpectedConditions.presenceOfElementLocated(locator));
		}
    
    
	
		public static String[] formatExpiryDate(String rawExpiry) {
		    try {
		        String[] parts = rawExpiry.split(",");
		        String month = parts[0].trim();
		        String year  = parts[1].trim();

		        if (month.length() == 1) {
		            month = "0" + month;   // "9" → "09"
		        }

		        return new String[]{month, year};
		    } catch (Exception e) {
		        System.out.println("Expiry format error: " + e.getMessage());
		        return new String[]{"", ""};
		    }
		}

	
		public static void setMonthYearInput(String xpath, String month, String year) {
		    try {
		        String value = year + "-" + month;  // "2027-09"

		        WebElement el = driver.findElement(By.xpath(xpath));

		        JavascriptExecutor js = (JavascriptExecutor) driver;
		        js.executeScript("arguments[0].value = arguments[1];", el, value);

		     
		        js.executeScript(
		            "arguments[0].dispatchEvent(new Event('input',  {bubbles:true}));" +
		            "arguments[0].dispatchEvent(new Event('change', {bubbles:true}));",
		            el
		        );

		        System.out.println("Expiry set: " + value);

		    } catch (Exception e) {
		        System.out.println("setMonthYearInput error: " + e.getMessage());
		    }
		}
		

		
		public static String GetFieldValue(String locator) {
		    int timeout = 0;
		    WaitForElementPresent(locator, timeout);
		    WebElement el = driver.findElement(ByLocator(locator));
		    return el.getText().trim();
		}

		// Overloaded method for By locators
		public static String GetFieldValue(By locator) {
		    WebElement el = driver.findElement(locator);
		    return el.getText().trim();
		}
	
    public static By byLocator(String locator) {

        if (locator.startsWith("id=")) {
            return By.id(locator.replace("id=", ""));

        } else if (locator.startsWith("xpath=")) {
            return By.xpath(locator.replace("xpath=", ""));

        } else if (locator.startsWith("name=")) {
            return By.name(locator.replace("name=", ""));

        } else if (locator.startsWith("css=")) {
            return By.cssSelector(locator.replace("css=", ""));

        } else if (locator.startsWith("linkText=")) {
            return By.linkText(locator.replace("linkText=", ""));

        } else if (locator.startsWith("class=")) {
            return By.className(locator.replace("class=", ""));

        } else {
           
            System.out.println("" + locator);
            return By.xpath(locator);
        }
    }

  
    public static void waitForElementPresent(String locator, int seconds) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(seconds));
        wait.until(ExpectedConditions.presenceOfElementLocated(byLocator(locator)));
    }

   
    public static void waitForElementToBeClickable(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeout));
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    
    public static void clickOn(String locator) {
        try {
            waitForElementPresent(locator, timeout);
            WebElement el = driver.findElement(byLocator(locator));
            waitForElementToBeClickable(el);
            el.click();
            System.out.println("🖱️ Click kiya: " + locator);
        } catch (Exception e) {
            System.out.println("❌ Click nahi hua: " + locator);
            e.printStackTrace();
        }
    }

   
 
    public static void typeText(String locator, String text) {
        try {
            waitForElementPresent(locator, timeout);
            WebElement el = driver.findElement(byLocator(locator));
            el.clear();
            el.sendKeys(text);
            System.out.println("⌨️ Type kiya '" + text + "' in: " + locator);
        } catch (Exception e) {
            System.out.println("❌ Type nahi hua: " + locator);
            e.printStackTrace();
        }
    }
    
    public static By ByLocator(String locator)
    {
        By result = null;
        if (locator.startsWith(".//")) {
            result = By.xpath(locator);
        }
        else if (locator.startsWith("//")) {
            result = By.xpath(locator);
        } else if (locator.startsWith("css=")) {
            result = By.cssSelector(locator.replace("css=", ""));
        } else if (locator.startsWith("name=")) {
            result = By.name(locator.replace("name=", ""));
        } else if (locator.startsWith("link=")) {
            result = By.linkText(locator.replace("link=", ""));
        } else if (locator.startsWith("id="))  {
            result = By.id(locator.replace("id=", ""));
        }
        else {
            result = By.id(locator);
        }
        return result;
    }

    
    public static WebElement WaitForElementPresent(String locator, int timeout) {

		WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(50));
		WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(ByLocator(locator)));
		return element;
	}

    
    public static void sendKeys(String locator, String text) 
	{
		try
		{
		WaitForElementPresent(locator, timeout);
		WebElement el = driver.findElement(ByLocator(locator));
		el.sendKeys(text);
		}
		catch (Exception e) {
		e.printStackTrace();
		}
		}
	 

    

    public static String getText(String locator) {
        try {
            waitForElementPresent(locator, timeout);
            String text = driver.findElement(byLocator(locator)).getText();
            System.out.println("📖 Text mila: " + text);
            return text;
        } catch (Exception e) {
            System.out.println("❌ Text nahi mila: " + locator);
            e.printStackTrace();
            return "";
        }
    }

    
    
    public static void scrollToElementAndClick(String locator) {
        try {
          
            WebElement el = driver.findElement(ByLocator(locator));

         
            ((JavascriptExecutor) driver).executeScript(
                "arguments[0].scrollIntoView({block:'center', inline:'nearest'});", el);
            Thread.sleep(500);

          
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.elementToBeClickable(el));

          
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", el);

            System.out.println("Scroll karke click kiya: " + locator);

        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            System.out.println("Interrupted: " + locator);
            e.printStackTrace();

        } catch (Exception e) {
            System.out.println("Click nahi hua: " + locator);
            e.printStackTrace();
        }
    }
    
    
    public static void scrollToElementAndSendKeys(String locator, String text) {
        try {
          
            WebElement el = driver.findElement(ByLocator(locator));

          
            ((JavascriptExecutor) driver).executeScript(
                "arguments[0].scrollIntoView({block:'center', inline:'nearest'});", el);
            Thread.sleep(500);

           
            new WebDriverWait(driver, Duration.ofSeconds(10))
                .until(ExpectedConditions.visibilityOf(el));

            // Pehle clear karo — phir type karo
            el.clear();
            el.sendKeys(text);

            System.out.println("Scroll karke type kiya: " + text + " in: " + locator);

        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            System.out.println("Interrupted: " + locator);
            e.printStackTrace();

        } catch (Exception e) {
            System.out.println("Type nahi hua: " + locator);
            e.printStackTrace();
        }
    }
    
    public static void scrollByXPath(String xpath)
		{
		JavascriptExecutor je = (JavascriptExecutor)driver;
		//Identify the WebElement which will appear after scrolling down
		WebElement element = driver.findElement(By.xpath(xpath));
		// now execute query which actually will scroll until that element is not appeared on page.
		je.executeScript("arguments[0].scrollIntoView(true);",element);
		// Extract the text and verify
		System.out.println(element.getText());
		}
 
    public static void clickByJS(String locator)
		{

			WebElement el = driver.findElement(ByLocator(locator));
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", el);

		}
		public static void ScrollWithclickByJS(String locator) {
		    // Scroll to the top of the page
		    JavascriptExecutor executor = (JavascriptExecutor) driver;
		    executor.executeScript("window.scrollTo(0, 0);");

		    // Locate the element
		    WebElement el = driver.findElement(ByLocator(locator));

		    // Perform the click using JavaScript
		    executor.executeScript("arguments[0].click();", el);
		}
    
    
  
    public static boolean isVisible(String locator) {
        try {
            waitForElementPresent(locator, timeout);
            return driver.findElement(byLocator(locator)).isDisplayed();
        } catch (Exception e) {
            System.out.println("⚠️ Element nahi dikh raha: " + locator);
            return false;
        }
    }
    
    
    public static boolean isLoginSuccessful() {
        return BrowserManager.openBrowser().getCurrentUrl().contains("just_sign_in=true");
        
    }

   
}