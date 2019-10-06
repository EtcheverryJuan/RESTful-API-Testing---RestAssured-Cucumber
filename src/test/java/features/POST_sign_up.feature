@FunctionalTest
Feature: Verify POST sign up functionality

  @SmokeTest
  Scenario: POST method with valid data
    Given I perform POST with the following data
      |username|jetche5|
      |isAdmin |false |
      |dateOfBirth|1986-07-10|
      |email      |jetche5@wearewaes.com|
      |name       |Juan Etcheverry     |
      |password   |tester              |
      |superpower |Super Sayan         |
    Then I should get a successful response and my information in the response

  Scenario: POST method with existing data in DB
    Given I perform POST with the following data
      |username|jetche5|
      |isAdmin |false |
      |dateOfBirth|1986-07-10|
      |email      |jetche5@wearewaes.com|
      |name       |Juan Etcheverry     |
      |password   |tester              |
      |superpower |Super Sayan         |
    Then I should see the "message" "Username or email already registered. Please select different values." in body response
    And status code should be 403

  Scenario: POST method with empty data
    Given I perform POST with the following data
      |username||
      |isAdmin ||
      |dateOfBirth||
      |email      ||
      |name       ||
      |password   ||
      |superpower ||
    Then I should see the "message" "Cannot pass null or empty values to constructor" in body response
    And status code should be 400

  Scenario: POST method with existing data in DB
    Given I perform POST with the following data
      |username|jetche5|
      |isAdmin |false |
      |dateOfBirth|1986-07-10|
      |email      |jetche5@wearewaes.com|
      |name       |Juan Etcheverry     |
      |password   |tester              |
      |superpower |Super Sayan         |
    Then I should see the "message" "Username or email already registered. Please select different values." in body response
    And status code should be 403