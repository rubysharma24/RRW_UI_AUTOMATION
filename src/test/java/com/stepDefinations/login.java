package com.stepDefinations;

import com.locator.loginlocator;
import CommonMethod.Java_methods;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.TimeoutException;
import java.time.Duration;
public class login {

    @Given("User is on the login page")
    public void user_is_on_the_login_page() {
        Java_methods.openBrowserAndNavigate();
        Java_methods.clickOn(loginlocator.login_icon);
    }

    @When("User enters {string} and {string}")
    public void user_enters_credentials(String username, String password) {
        Java_methods.typeText(loginlocator.login_email, username);
        Java_methods.typeText(loginlocator.login_password, password);
    }

    @And("User clicks on login button")
    public void user_clicks_on_login_button() {
        Java_methods.clickOn(loginlocator.login_button);
    }

    /**
     * Smart step — automatically detects login success vs failure.
     * - If error message visible → checks against error
     * - If dashboard visible → checks against dashboard text
     */
    @Then("User should see {string}")
    public void user_should_see_message(String expectedMessage) {
    	try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        String actualMessage = "";

        if (Java_methods.isVisible(loginlocator.unsuccess_message)) {
            actualMessage = Java_methods.getText(loginlocator.unsuccess_message);
            System.out.println("🔴 Login FAILED — error message detected");
        } else if (Java_methods.isVisible(loginlocator.Dashboardmessage)) {
            actualMessage = Java_methods.getText(loginlocator.Dashboardmessage);
            System.out.println("🟢 Login SUCCESS — dashboard detected");
        } else {
            System.out.println("⚠️ Neither error nor dashboard visible!");
        }

        System.out.println("Expected: " + expectedMessage);
        System.out.println("Actual:   " + actualMessage);

        Assert.assertEquals(
            "Message mismatch — page state unclear",
            expectedMessage.trim(),
            actualMessage.trim()
        );
    }

    /** Backward-compat — agar feature file mein "a mesage" wording use ho rahi ho */
    @Then("User should see a mesage {string}")
    public void user_should_see_message_alt(String expectedMessage) {
        user_should_see_message(expectedMessage);   // delegate to main impl
    }
}