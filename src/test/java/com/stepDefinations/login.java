package com.stepDefinations;

import com.locator.loginlocator;
import CommonMethod.Java_methods;
import io.cucumber.java.en.*;
import org.junit.Assert;

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
     * For INVALID login scenarios — verifies error message.
     */
    @Then("User should see a mesage {string}")
    public void user_should_see_error_message(String expectedMessage) {
        String actualMessage = Java_methods.getText(loginlocator.unsuccess_message);

        System.out.println("Expected Error: " + expectedMessage);
        System.out.println("Actual Error  : " + actualMessage);

        Assert.assertEquals(
            "Error message mismatch on invalid login",
            expectedMessage.trim(),
            actualMessage.trim()
        );
    }

    /**
     * For VALID login scenario — verifies dashboard message after successful login.
     */
    @Then("User should see {string}")
    public void user_should_see_dashboard_message(String expectedMessage) {
        // Dashboard load hone tak wait
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        String actualMessage = Java_methods.getText(loginlocator.Dashboardmessage);

        System.out.println("Expected Dashboard: " + expectedMessage);
        System.out.println("Actual Dashboard  : " + actualMessage);

        Assert.assertEquals(
            "Dashboard message mismatch on successful login",
            expectedMessage.trim(),
            actualMessage.trim()
        );
    }
}