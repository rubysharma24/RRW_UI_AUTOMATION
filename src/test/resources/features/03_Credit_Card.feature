@Credit
Feature: Validate Checkout Flow Using Credit Card

  Scenario: Complete credit card checkout flow as guest user
    Given user is on the home page
    When user clicks on the button
    Then user is redirected to the listing page

    When user clicks on the first product displayed on the listing page
    Then user is redirected to the product description page

    Then the item is added to the cart and the cart sidebar opens

    Given user is on the product description page with the cart sidebar open
    Then user is redirected to the address page with all fields blank

    When user fills in the shipping and billing address fields and clicks
    When user clicks button on the popup
    Then user is redirected to the checkout review page

    When user clicks on button
    Then user is redirected to the payment page

    When user clicks on the credit card option
    Then the credit card payment form opens

    When user enters valid data into all required fields and clicks "Pay Now"
    Then the order is successfully placed and user is redirected to the order confirmation page
