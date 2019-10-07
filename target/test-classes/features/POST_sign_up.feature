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
    And I perform DELETE operation with username "tester" and password "maniac" with data
      |id         |7                    |
      |name       |Juan Etcheverry      |
      |username   |jetche5              |
      |isAdmin    |false                |
      |dateOfBirth|1986-07-10           |
      |email      |jetche5@wearewaes.com|
      |superpower |Super Sayan          |
    And I should receive a successful response and a confirmation message  for "jetche5" deleted

  Scenario: POST method with existing data in DB
    Given I perform POST with the following data
      |username|jetche5|
      |isAdmin |false |
      |dateOfBirth|1986-07-10|
      |email      |jetche5@wearewaes.com|
      |name       |Juan Etcheverry     |
      |password   |tester              |
      |superpower |Super Sayan         |
    Then I should get a successful response and my information in the response
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