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

    @Then("User should see {string}")
    public void user_should_see(String expectedMessage) {

        String actualMessage;

        // Success message
        if (Java_methods.isLoginSuccessful()) {

        	try {
				Thread.sleep(8000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
           
            actualMessage =
                    Java_methods.getText(loginlocator.success_message);

        } 
        // Error message
        else {

            actualMessage = Java_methods.getText(loginlocator.unsuccess_message);
            
        }

        System.out.println("Expected Message : " + expectedMessage);
        System.out.println("Actual Message : " + actualMessage);

        Assert.assertEquals(expectedMessage, actualMessage);
    }
}