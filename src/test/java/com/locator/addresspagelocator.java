package com.locator;

public interface addresspagelocator {

	
	String email="//input[@placeholder='Email address']";
	String firstname = "//body/div[@class='min-h-screen bg-gray-50']/div[@class='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8']/div[@class='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8']/div[@class='lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8']/div[@class='bg-white rounded-lg shadow-sm p-4 sm:p-6']/form[@class='space-y-3 sm:space-y-4']/div[@class='grid grid-cols-1 sm:grid-cols-2 gap-4']/input[1]";
	String lastname = "//body/div[@class='min-h-screen bg-gray-50']/div[@class='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8']/div[@class='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8']/div[@class='lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8']/div[@class='bg-white rounded-lg shadow-sm p-4 sm:p-6']/form[@class='space-y-3 sm:space-y-4']/div[@class='grid grid-cols-1 sm:grid-cols-2 gap-4']/input[2]";
	String Company = "//body/div[@class='min-h-screen bg-gray-50']/div[@class='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8']/div[@class='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8']/div[@class='lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8']/div[@class='bg-white rounded-lg shadow-sm p-4 sm:p-6']/form[@class='space-y-3 sm:space-y-4']/input[1]";
	String Address = "//body/div[@class='min-h-screen bg-gray-50']/div[@class='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8']/div[@class='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8']/div[@class='lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8']/div[@class='bg-white rounded-lg shadow-sm p-4 sm:p-6']/form[@class='space-y-3 sm:space-y-4']/input[2]";
	String city = "//body/div[@class='min-h-screen bg-gray-50']/div[@class='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8']/div[@class='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8']/div[@class='lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8']/div[@class='bg-white rounded-lg shadow-sm p-4 sm:p-6']/form[@class='space-y-3 sm:space-y-4']/div[@class='grid grid-cols-1 sm:grid-cols-3 gap-4']/input[1]";
	String zipcode="//body/div[@class='min-h-screen bg-gray-50']/div[@class='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8']/div[@class='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8']/div[@class='lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8']/div[@class='bg-white rounded-lg shadow-sm p-4 sm:p-6']/form[@class='space-y-3 sm:space-y-4']/div[@class='grid grid-cols-1 sm:grid-cols-3 gap-4']/input[2]";
	String State="//input[contains(@class, 'ant-select-selection-search-input')]";
	String Option="//div[@class='ant-select-item-option-content'][normalize-space()='Florida']";
	String Phonenumber = "//body/div[@class='min-h-screen bg-gray-50']/div[@class='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8']/div[@class='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8']/div[@class='lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8']/div[@class='bg-white rounded-lg shadow-sm p-4 sm:p-6']/form[@class='space-y-3 sm:space-y-4']/input[4]";
	String check = "//input[@name='useSameForBilling']";
	String button = "//span[normalize-space()='Continue']";
	String auth_button="//button[@class='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors']";
}
