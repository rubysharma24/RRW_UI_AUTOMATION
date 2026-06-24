package com.stepDefinations;

import org.junit.Assert;

import com.locator.descriptionpagelocator;
import com.locator.homepagelocator;
import com.locator.listingpagelocator;
import com.locator.searchlocators;
import com.rrw.utils.ApiHelper;
import io.restassured.response.Response;

import CommonMethod.Java_methods;
import io.cucumber.java.en.*;



public class Dashboard_validation {
	
	 private String apiProductTitle;
	 private String apiProductPrice;
	
	 
	 @Given("the user is on the Home Page")
	 public void the_user_is_on_the_home_page() {


	     String actualUrl = Java_methods.getCurrentUrl();
	     String expectedUrl = "https://staging.roadreadywheels.com/";

	     Assert.assertEquals(expectedUrl, actualUrl);
	 }

	 @When("the user clicks on the {string} button")
	 public void the_user_clicks_on_the_button(String buttonName) {

	     Java_methods.clickOn(homepagelocator.Shopnowbutton);
	     try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

	 }

	 @Then("the user should be redirected to the Product Listing Page")
	 public void the_user_should_be_redirected_to_the_product_listing_page() {

	     String actualUrl = Java_methods.getCurrentUrl();
	     String expectedUrl = "https://staging.roadreadywheels.com/t/categories";

	     Assert.assertEquals(expectedUrl, actualUrl);
	 }

	 @Then("the {string} title should be visible")
	 public void the_title_should_be_visible(String expectedTitle) {

	     String actualTitle =
	             Java_methods.getText(listingpagelocator.Shop_RoadReady_Products_text);

	     Assert.assertEquals(expectedTitle, actualTitle);

	     Java_methods.sendKeys(searchlocators.Search_input_field, "BMW");
	     
	     try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	     Java_methods.clickOn(listingpagelocator.SEARCH_BUTTON);
	     
	     try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

	     Java_methods.clickOn(listingpagelocator.FIRST_PRODUCT_TITLE);
	 }

	 @When("the product description API response is captured")
	 public void the_product_description_api_response_is_captured() {

	     Response response = ApiHelper.getSearchAutoComplete("BMW");

	     System.out.println("Status Code : " + response.getStatusCode());
	     System.out.println(response.prettyPrint());


	     apiProductTitle =
	    		    response.jsonPath().getString("data[0].name");

	    		apiProductPrice =
	    		    response.jsonPath().getString("data[0].display_price");
	    		
	     System.out.println("API Product Title : " + apiProductTitle);
	     System.out.println("API Product Price : " + apiProductPrice);
	     
	  
	 }

	 @Then("the first product name on the UI should match the API response")
	 public void the_first_product_name_on_the_ui_should_match_the_api_response() {

	     String uiProductTitle =
	             Java_methods.getText(descriptionpagelocator.PRODUCT_DESCRIPTION_PAGE_TITLE);

	     Assert.assertEquals(apiProductTitle, uiProductTitle);
	 }

	 @Then("the first product price on the UI should match the API response")
	 public void the_first_product_price_on_the_ui_should_match_the_api_response() {

	     String uiProductPrice =
	             Java_methods.getText(descriptionpagelocator.PRODUCT_DESCRIPTION_PAGE_PRICE);

	     Assert.assertEquals(apiProductPrice, uiProductPrice);
	 }

	 @Then("the first product URL on the UI should match the API response")
	 public void the_first_product_url_on_the_ui_should_match_the_api_response() {

	     String actualUrl = Java_methods.getCurrentUrl();

	     System.out.println("Current URL : " + actualUrl);
	 }}