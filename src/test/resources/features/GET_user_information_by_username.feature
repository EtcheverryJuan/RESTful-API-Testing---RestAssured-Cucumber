@FunctionalTest
Feature: Verify GET user information

  @SmokeTest
  Scenario: GET user details with valid information
    Given I perform GET operation with username "dev"
    Then I should see the "name" "Zuper Dooper Dev" in body response
    And "password" field is not present
    And status code should be 200

  Scenario: GET user details with Invalid information
    Given I perform GET operation with username "invalid"
    Then I should see the "message" "Username invalid does not exist." in body response
    And status code should be 404

  Scenario: GET user details without queryParam
    Given I perform GET operation without query parameter
    Then status code should be 400