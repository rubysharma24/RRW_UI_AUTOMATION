
@dashboard

Feature: Product Description Page Validation

Scenario: Validate first product details ( price , name )  on UI against API

Given the user is on the Home Page
When the user clicks on the "Shop Now" button
Then the user should be redirected to the Product Listing Page
And the "Shop Road Ready Products" title should be visible
When the product description API response is captured
Then the first product name on the UI should match the API response
And the first product price on the UI should match the API response
And the first product URL on the UI should match the API response

