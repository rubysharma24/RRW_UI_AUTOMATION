@login_test

Feature: Login



 Scenario Outline: User login with invalid  credentials
    Given User is on the login page
    When User enters "<username>" and "<password>"
    And User clicks on login button
    Then User should see "<message>"

    Examples:
      | username                        | password                    | message                    |
      | xyzzz@email.com                 | 123456                      | Invalid email or password  |
      | rishabh.gangwar@w3villa.com     | 1234567890                  | Invalid email or password   |
      | rg@w3villa.com                  | 123456                      | Invalid email or password  |
       

  Scenario Outline: User login with valid  credentials
    Given User is on the login page
    When User enters "<username>" and "<password>"
    And User clicks on login button
    Then User should see "<message>"

    Examples:
      | username                        | password                    | message     |
      | rishabh.gangwar@w3villa.com     | 123456                      | Shop Road Ready Products    |
     
      
      
    