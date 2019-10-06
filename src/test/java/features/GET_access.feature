@FunctionalTest
Feature: Verify GET access operation

  Scenario: GET access method with valid username and password
    Given I perform GET operation to get access with username "tester" and password "maniac"
    Then status code should be 200
    And I should see the "username" "tester" in body response

  Scenario: GET access method with invalid username and password
    Given I perform GET operation to get access with username "invalid" and password "data"
    Then I should see the "message" "Bad credentials" in body response
    And status code should be 401

  Scenario: GET access method with no auth data
    Given I perform GET operation on "/access" with no auth data
    Then I should see the "message" "Full authentication is required to access this resource" in body response
    And status code should be 401

  Scenario: GET access method with empty username and password
    Given I perform GET operation to get access with username "" and password ""
    Then I should see the "message" "Bad credentials" in body response
    And status code should be 401

  Scenario: GET access method with empty password
    Given I perform GET operation to get access with username "tester" and password ""
    Then I should see the "message" "Bad credentials" in body response
    And status code should be 401