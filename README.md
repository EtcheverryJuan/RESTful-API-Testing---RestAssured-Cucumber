# RESTful-API-Testing---RestAssured-Cucumber
RESTful Testing Framework built with Maven + Cucumber + Rest Assured

### Description
Here you will find an example of WAES API Test using RestAssured Java library, Cucumber and Cucumber Reporting

### Test Scenarios: 

1. RESTful-API-Testing
(under test/java/tests/features)
 Functional tests for User operations API
    1. GET user by username
    2. GET all users with basic auth
    3. GET access with basic auth
    4. POST user
    5. PUT user to update fields
    6. DELETE user

### Requirement:
- Java 10
- Maven

### Main Usages
- Rest Assured - for write RESTful APIs tests( http://rest-assured.io/)
- Cucumber for BDD design https://cucumber.io
- Cucumber-JUnit as Test Runner https://cucumber.io/docs/installation/java/
- Jackson-databind  -for json file convertion to object (https://github.com/FasterXML/jackson-databind)
- Cucumber-reporting - To generate html reports based on json result file.

### How to Execute the tests
You can run all the test as a suite, specified as Functional Regression or Smoke Test, or you can run individual features or scenarios from feature files.
#### Execute complete Functional Regression
By default, all tests are going to run as a suite for funcitonal regression, which includes all tests.
1. From command line using maven
 1. Download code zip and Unzip on desired folder
 2. Open command line from folder
 3. Run `mvn clean install`
2. From TestRunner file
 1. Right-Click in TestRunner.class located in src/test/java
 2. Select `Run 'TestRunner'`
 
 #### Execute SmokeTest regression
 You can run a quick smoke test, which is composed with all positives scenarios for each call, so you can verify quickly that the main flow of the features are working.
 1. Open TestRunner.class
 2. Change `tags = {"@FunctionalTest"}` to `tags = {"@SmokeTest"}`
 3. Run `mvn clean install` or Run from TestRunner

### Report
Once you've run the tests, report is generated in `target/cucumber-reports-html-pretty/cucumber-html-reports`. You can open the report with the browser of your preference.
