package com.locator;

public interface listingpagelocator {
	String first_product = "(//h3[contains(@class,'font-semibold') and contains(text(),'GMC Yukon')])[1]";
	String Shop_RoadReady_Products_text="//span[@class='font-medium text-gray-700 text-xl lg:text-2xl']";
	String By_Category_button="//div[@class='hidden md:flex md:items-center md:gap-4 md:justify-between']//a[1]";
	String By_TopBrands_button = "//div[@class='hidden md:flex md:items-center md:gap-4 md:justify-between']//a[2]";
	String By_FeaturedItems_button="//div[@class='hidden md:flex md:items-center md:gap-4 md:justify-between']//a[3]";
	String FIRST_PRODUCT_TITLE ="(//a[contains(@href,'/products')]/h3)[1]";	
	String FIRST_PRODUCT_LINK ="(//a[contains(@href,'/products')])[1]";
	String FIRST_PRODUCT_PRICE="((//a[contains(@href,'/products')])[1]/following::span[contains(text(),'$')][1])";
	String SEARCH_BUTTON="//button[text()='Search']";
}
