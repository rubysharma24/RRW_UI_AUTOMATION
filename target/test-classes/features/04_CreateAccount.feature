@accountcreate
Feature: Sign In

  Scenario: User logs in with valid credentials
    Given user is on the login page
    When user enters email
    And user enters password
    And user clicks on login button
    Then user should be logged in successfully