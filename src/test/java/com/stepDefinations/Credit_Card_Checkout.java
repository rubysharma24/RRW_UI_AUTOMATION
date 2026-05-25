package com.stepDefinations;

import com.locator.addresspagelocator;
import com.locator.cartlocator;
import com.locator.descriptionpagelocator;
import com.locator.homepagelocator;
import com.locator.listingpagelocator;
import com.locator.paymentpagelocator;
import com.locator.reviewpagelocator;
import com.rrw.utils.PropertyReader;

import CommonMethod.Java_methods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Credit_Card_Checkout {
	
	@Given("user is on the home page")
	public void user_is_on_the_home_page() {
		
		Java_methods.openBrowserAndNavigate();
	}

	@When("user clicks on the button")
	public void user_clicks_on_the_button() {
	   
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
      Java_methods.clickOn(homepagelocator.Shopnowbutton);		
	}

	@Then("user is redirected to the listing page")
	public void user_is_redirected_to_the_listing_page() {
	    System.out.println("user_is_redirected_to_the_listing_page()");

	   
	}

	@Given("user is on the listing page")
	public void user_is_on_the_listing_page() {
	    System.out.println("user_is_on_the_listing_page()");

	 
	}

	@When("user clicks on the first product displayed on the listing page")
	public void user_clicks_on_the_first_product_displayed_on_the_listing_page() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	   Java_methods.clickOn(listingpagelocator.first_product);
	}

	@Then("user is redirected to the product description page")
	public void user_is_redirected_to_the_product_description_page() {
	    System.out.println("user_is_redirected_to_the_product_description_page()");
	}

	@Given("user is on the product description page")
	public void user_is_on_the_product_description_page() {
	    System.out.println("user_is_on_the_product_description_page");

	}

	@Then("the item is added to the cart and the cart sidebar opens")
	public void the_item_is_added_to_the_cart_and_the_cart_sidebar_opens() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	    Java_methods.clickOn(descriptionpagelocator.AddToCart);
	}

	@Given("user is on the product description page with the cart sidebar open")
	public void user_is_on_the_product_description_page_with_the_cart_sidebar_open() {
		
		
		try {
			Thread.sleep(6000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	    
		Java_methods.scrollToElementAndClick(cartlocator.proceedtocheckout);
		
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		

	}

	
	@Then("user is redirected to the address page with all fields blank")
	public void user_is_redirected_to_the_address_page_with_all_fields_blank() {
	    System.out.println("System.out.println(\"user_is_on_the_product_description_page\");\r\n"+ "");
	    
	    Java_methods.clickOn(cartlocator.continue_button);
	   
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

	}

	@Given("user is on the address page")
	public void user_is_on_the_address_page() {
	    System.out.println("user_is_on_the_address_page");
	   
	    
	}

	@When("user fills in the shipping and billing address fields and clicks")
	public void user_fills_in_the_shipping_and_billing_address_fields_and_clicks() {
	    Java_methods.sendKeys(addresspagelocator.email, PropertyReader.getDataProperty("Email_Id"));
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    Java_methods.sendKeys(addresspagelocator.firstname , PropertyReader.getDataProperty("First_Name"));
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    Java_methods.sendKeys(addresspagelocator.lastname , PropertyReader.getDataProperty("Last_Name"));
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    Java_methods.sendKeys(addresspagelocator.Company , PropertyReader.getDataProperty("Company"));
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    Java_methods.sendKeys(addresspagelocator.Address, PropertyReader.getDataProperty("Address_Line_1"));
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    Java_methods.sendKeys(addresspagelocator.city, PropertyReader.getDataProperty("City_Name"));
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    
	       Java_methods.clickOn(addresspagelocator.State);
	       Java_methods.scrollToElementAndClick(addresspagelocator.Option);
	       
	       
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    Java_methods.sendKeys(addresspagelocator.zipcode, PropertyReader.getDataProperty("Zip_Code"));
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    Java_methods.sendKeys(addresspagelocator.Phonenumber, PropertyReader.getDataProperty("Mobile_Number"));
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    Java_methods.clickOn(addresspagelocator.check);
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    Java_methods.clickOn(addresspagelocator.button);
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	   
	}

	@Then("a popup appears to authenticate for an invalid zip code")
	public void a_popup_appears_to_authenticate_for_an_invalid_zip_code() {
	    System.out.println("a_popup_appears_to_authenticate_for_an_invalid_zip_code");
	    try {
			Thread.sleep(6000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@When("user clicks button on the popup")
	public void user_clicks_on_the_popup() {
		 Java_methods.clickOn(addresspagelocator.auth_button);
	}

	@Then("user is redirected to the checkout review page")
	public void user_is_redirected_to_the_checkout_review_page() {
	    System.out.println("user_is_redirected_to_the_checkout_review_page");

	}

	@Given("user is on the checkout review page")
	public void user_is_on_the_checkout_review_page() {
	    System.out.println("user_is_on_the_checkout_review_page");

	}

	@When("user checks the order summary cart and verifies all shipping options are visible")
	public void user_checks_the_order_summary_cart_and_verifies_all_shipping_options_are_visible() {
	    System.out.println("user_checks_the_order_summary_cart_and_verifies_all_shipping_options_are_visible");
	    try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@When("user clicks on button")
	public void user_clicks_on_next_button() {
		Java_methods.clickOn(reviewpagelocator.continue_button);
	   
	}

	@Then("user is redirected to the payment page")
	public void user_is_redirected_to_the_payment_page() {
	    System.out.println("user_is_redirected_to_the_payment_page");

	}

	@Given("user is on the payment page and all payment methods are visible")
	public void user_is_on_the_payment_page_and_all_payment_methods_are_visible() {
	    System.out.println("user_is_on_the_payment_page_and_all_payment_methods_are_visible");

	}

	@When("user clicks on the credit card option")
	public void user_clicks_on_the_option() {
	    
		Java_methods.clickOn(paymentpagelocator.creditcardpayment);
	}

	@Then("the credit card payment form opens")
	public void the_credit_card_payment_form_opens() {
	    System.out.println("the_credit_card_payment_form_opens");

	    
	}

	@Given("user is filling out the credit card form with first name, last name, CVV, and expiry date")
	public void user_is_filling_out_the_credit_card_form_with_first_name_last_name_cvv_and_expiry_date() {
	    System.out.println("user_is_filling_out_the_credit_card_form_with_first_name_last_name_cvv_and_expiry_date");

	}

	@When("user enters valid data into all required fields and clicks {string}")
	public void user_enters_valid_data_into_all_required_fields_and_clicks(String string) {
	 
	    Java_methods.sendKeys(paymentpagelocator.cardnumber_credit_card, PropertyReader.getDataProperty("cardNumber"));
	    try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    Java_methods.sendKeys(paymentpagelocator.candidate_name_credit_card, PropertyReader.getDataProperty("customername"));
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    Java_methods.sendKeys(paymentpagelocator.cvv_credit_card, PropertyReader.getDataProperty("cvv"));
	    try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	   
	    
	  
			 Java_methods.selectDropDownByIndex(paymentpagelocator.EXPIRATION_MONTH_DROPDOWN, 8);				
			Java_methods.selectDropDownByIndex(paymentpagelocator.EXPIRATION_YEAR_DROPDOWN, 8);
			Java_methods.clickOn(paymentpagelocator.pay_button);
 

	}

	@Then("the order is successfully placed and user is redirected to the order confirmation page")
	public void the_order_is_successfully_placed_and_user_is_redirected_to_the_order_confirmation_page() {
	    System.out.println("the_order_is_successfully_placed_and_user_is_redirected_to_the_order_confirmation_page");

	}

}
