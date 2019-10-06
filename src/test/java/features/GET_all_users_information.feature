@FunctionalTest
Feature: Verify GET all user information

  @SmokeTest
  Scenario: GET all users details with valid information
    Given I perform GET operation for all users with username: "admin" and password: "hero"
    Then I should get a list of users with all their information
    And status code should be 200

  Scenario: GET all users details with invalid auth data
    Given I perform GET operation for all users with username: "invalid" and password: "data"
    Then I should see the "message" "Bad credentials" in body response
    And status code should be 401

  Scenario: GET all users details with no auth data
    Given I perform GET operation on "/all" with no auth data
    Then I should see the "message" "Full authentication is required to access this resource" in body response
    And status code should be 401
