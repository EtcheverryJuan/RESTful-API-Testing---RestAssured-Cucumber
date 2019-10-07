@FunctionalTest
Feature: Verify Delete user functionality

  @SmokeTest
  Scenario: DELETE method with valid credentials
    Given I perform POST with the following data
      |username|jetche4|
      |isAdmin |false |
      |dateOfBirth|1986-07-10|
      |email      |jetche4@wearewaes.com|
      |name       |Juan Etcheverry     |
      |password   |tester              |
      |superpower |Super Sayan         |
    And I perform DELETE operation with username "tester" and password "maniac" with data
      |id         |8                    |
      |name       |Juan Etcheverry      |
      |username   |jetche4              |
      |isAdmin    |false                |
      |dateOfBirth|1986-07-10           |
      |email      |jetche4@wearewaes.com|
      |superpower |Super Sayan          |
    And I should receive a successful response and a confirmation message  for "jetche4" deleted
    Then I perform GET operation to get access with username "jetche4" and password "tester"
    And status code should be 401

  Scenario: DELETE method with invalid credentials
    Given I perform DELETE operation with username "invalid" and password "data" with data
      |id         |8                    |
      |name       |Juan Etcheverry      |
      |username   |jetche4              |
      |isAdmin    |false                |
      |dateOfBirth|1986-07-10           |
      |email      |jetche4@wearewaes.com|
      |superpower |Super Sayan          |
    Then I should see the "message" "Bad credentials" in body response
    And status code should be 401

  Scenario: DELETE method with empty credentials
    Given I perform DELETE operation with username "" and password "" with data
      |id         |8                    |
      |name       |Juan Etcheverry      |
      |username   |jetche4              |
      |isAdmin    |false                |
      |dateOfBirth|1986-07-10           |
      |email      |jetche4@wearewaes.com|
      |superpower |Super Sayan          |
    Then I should see the "message" "Bad credentials" in body response
    And status code should be 401

  Scenario: DELETE method with empty password credentials
    Given I perform DELETE operation with username "invalid" and password "" with data
      |id         |8                    |
      |name       |Juan Etcheverry      |
      |username   |jetche4              |
      |isAdmin    |false                |
      |dateOfBirth|1986-07-10           |
      |email      |jetche4@wearewaes.com|
      |superpower |Super Sayan          |
    Then I should see the "message" "Bad credentials" in body response
    And status code should be 401

  Scenario: DELETE method with invalid username
    Given I perform DELETE operation with username "tester" and password "maniac" with data
      |id         |8                    |
      |name       |Juan Etcheverry      |
      |username   |jetche213            |
      |isAdmin    |false                |
      |dateOfBirth|1986-07-10           |
      |email      |jetche4@wearewaes.com|
      |superpower |Super Sayan          |
    Then I should see the "message" "Username jetche213 does not exist." in body response
    And status code should be 404

  Scenario: DELETE method with invalid email
    Given I perform DELETE operation with username "tester" and password "maniac" with data
      |id         |8                    |
      |name       |Juan Etcheverry      |
      |username   |jetche4              |
      |isAdmin    |false                |
      |dateOfBirth|1986-07-10           |
      |email      |jetche213@wearewaes.com|
      |superpower |Super Sayan          |
    Then I should see the "message" "Email does not exist" in body response
    And status code should be 404

  Scenario: DELETE method without optional fields
    Given I perform POST with the following data
      |username|jetche4|
      |isAdmin |false |
      |dateOfBirth|1986-07-10|
      |email      |jetche4@wearewaes.com|
      |name       |Juan Etcheverry     |
      |password   |tester              |
      |superpower |Super Sayan         |
    And I perform DELETE operation with username "tester" and password "maniac" with body "jetche4" and "jetche4@wearewaes.com"
    Then I should receive a successful response and a confirmation message  for "jetche4" deleted

  Scenario: DELETE method with invalid optional fields
    Given I perform POST with the following data
      |username|jetche4|
      |isAdmin |false |
      |dateOfBirth|1986-07-10|
      |email      |jetche4@wearewaes.com|
      |name       |Juan Etcheverry     |
      |password   |tester              |
      |superpower |Super Sayan         |
    And I perform DELETE operation with username "tester" and password "maniac" with data
      |id         |23123131             |
      |name       |Some Tester          |
      |username   |jetche4              |
      |isAdmin    |true                 |
      |dateOfBirth|1982-03-11           |
      |email      |jetche4@wearewaes.com|
      |superpower |Other Superpower     |
    Then I should receive a successful response and a confirmation message  for "jetche4" deleted

