@AutocompleteSearch  @APIsWithoutLogin
Feature: Validate Search APIs (OE Number, Global & Hollander)

  Scenario: Validate Global product search
    When I send a Valid search request using Excel sheet "API_GlobalsearchTerm"
    Then I validate the API response contains correct keys and values

  Scenario: Validate OE product search
    When I send a Valid search request using Excel sheet "API_OENumberSearchTerm"
    Then I validate the API response contains correct keys and values

  Scenario: Validate Hollander product search
    When I send a Valid search request using Excel sheet "hollander_API_search_terms"
    Then I validate the API response contains correct keys and values
     