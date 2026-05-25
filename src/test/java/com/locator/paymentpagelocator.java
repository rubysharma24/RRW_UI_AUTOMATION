package com.locator;

public interface paymentpagelocator {
	String creditcardpayment = "/html/body/div[4]/div[2]/div[1]/div[1]/div/div[1]/div[1]/button";
	String cardnumber_credit_card="//input[@placeholder='1234 5678 9012 3456']";
	String candidate_name_credit_card="//input[@placeholder='John Doe']";
	String cvv_credit_card="//input[@placeholder='123']";
	//String EXPIRY_DATE = "//input[@name='expiryDate']"; 
	String pay_button = "//button[@type='submit']";
	 static final String EXPIRATION_MONTH_DROPDOWN = "//select[@name='expiryDate']"; 
	 static final String EXPIRATION_YEAR_DROPDOWN = "//select[@id='expiry_year']"; 
	
//	String EXPIRY_DATE_INPUT= "//input[@name='expiryDate']";
//	String EXPIRY_YEAR_DISPLAY= "//div[contains(@class,'date-picker')]//*[matches(text(),'^\\d{4}$')]";
//	String EXPIRY_YEAR_NEXT_ARROW= "//button[@aria-label='Next year' or contains(@class,'year-next')]";
//	// Month cell by 3-letter abbreviation: Jan, Feb, Mar... Dec
//	String EXPIRY_MONTH_CELL_BY_TEXT= "//div[contains(@class,'date-picker')]//*[normalize-space()='%s']";
//	
//	// ── Expiry Date ───────────────────────────────────────────────────
//	public static final String EXPIRY_DATE       = "//input[@name='expiryDate']";
//	public static final String EXPIRY_DATE_INPUT = "//input[@name='expiryDate']";
}
