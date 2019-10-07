@FunctionalTest
Feature: Verify Update user functionality

  @SmokeTest
  Scenario: PUT method with valid data
    Given I perform PUT operation with username "admin" and password "hero" with data
    |id|23|
    |username|jetche6|
    |dateOfBirth|1970-01-01|
    |email      |edited@edited.com|
    |isAdmin    |false            |
    |name       |Juan Etcheverry  |
    |password   |testedited       |
    |superpower |Gomu Gomu No Mi  |
    Then I should receive a successful response and information of user updated

  Scenario: PUT method with invalid username
    Given I perform PUT operation with username "admin" and password "hero" with data
      |id|7|
      |username|jetche90|
      |dateOfBirth|1970-01-01|
      |email      |edited@edited.com|
      |isAdmin    |false            |
      |name       |Juan Etcheverry  |
      |password   |testedited       |
      |superpower |Gomu Gomu No Mi  |
    Then I should see the "message" "user should exist" in body response
    And status code should be 400

  #This is another bug, with response message
  Scenario: PUT method with invalid id
    Given I perform PUT operation with username "admin" and password "hero" with data
      |id|9483746|
      |username|jetche6|
      |dateOfBirth|1970-01-01|
      |email      |emailedit@edited.com|
      |isAdmin    |false            |
      |name       |Juan Etcheverry  |
      |password   |testedited       |
      |superpower |Gomu Gomu No Mi  |
    Then I should see the "message" "Username jetche6 does not exist." in body response
    And status code should be 404

  Scenario: PUT method with empty data
    Given I perform PUT operation with username "admin" and password "hero" with data
      |id||
      |username||
      |dateOfBirth||
      |email      ||
      |isAdmin    ||
      |name       ||
      |password   ||
      |superpower ||
    Then I should see the "message" "The given id must not be null!; nested exception is java.lang.IllegalArgumentException: The given id must not be null!" in body response
    And status code should be 400

  Scenario: PUT method with email incorrect format
    Given I perform PUT operation with username "admin" and password "hero" with data
      |id|23|
      |username|jetche76|
      |dateOfBirth|1970-01-01|
      |email      |edited.com|
      |isAdmin    |false            |
      |name       |Juan Etcheverry  |
      |password   |testedited       |
      |superpower |Gomu Gomu No Mi  |
    Then I should see the "message" "Email bad format" in body response
    And status code should be 400

  Scenario: PUT method with date incorrect format
    Given I perform PUT operation with username "admin" and password "hero" with data
      |id|23|
      |username|jetche6|
      |dateOfBirth|1970asd|
      |email      |edit@edited.com|
      |isAdmin    |false            |
      |name       |Juan Etcheverry  |
      |password   |testedited       |
      |superpower |Gomu Gomu No Mi  |
    Then I should see the "message" "Date bad format" in body response
    And status code should be 400