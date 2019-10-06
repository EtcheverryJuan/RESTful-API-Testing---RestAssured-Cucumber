# RESTful-API-Testing---RestAssured-Cucumber
RESTful Testing Framework built with Maven + Cucumber + Rest Assured

Description
Here you will find an example of WAES API Test using RestAssured Java library, Cucumber and Cucumber Reporting

### Test Scenarios: 

1. RESTful-API-Testing
(under test/java/tests/features)
 Write a test that makes a GET request to the API mentioned in the user story and do
the following using the response content.
    1. Validate all the state names returned are valid, and total state count is 48
    2. Validate only one state has a min age of 19, and output the name of that state
    3. Validate that Georgia is the only state with min loan amount requirement of $3,005

2. ChallengeUITest
(under test/java/com/tests)
 Automate via the UI, the web scenario mentioned in User Story, and include any
validations you deem necessary

### Requirement:
- Java 1.8 (1.8.0_102)
- Gradle (4.10)
- ChromeDriver (74 or next stable version -check on http://chromedriver.chromium.org/)


### Main Usages
- Rest Assured - for write RESTful APIs tests( http://rest-assured.io/)
- TestNG - for run tests (https://testng.org/doc/index.html)
- Slf4j - Simple Logging Facade for Java (https://www.slf4j.org/)
- Selenium WebDriver - for write automate web application tests (https://www.seleniumhq.org/)
- Javafaker - to generate fake test data   (https://github.com/DiUS/java-faker)
- AssertJ - for poweful assertions on Java (https://joel-costigliola.github.io/assertj/)
- Jackson-databind  -for json file convertion to object (https://github.com/FasterXML/jackson-databind)

### How to Execute the tests
1. Download code zip and Unzip on desired folder
2. Open command line from folder
3. Open config.properties file with any text editor 
( which is located on /src/test/resources/config.properties)
and set  chromeDriverPath= "your chrome driver path" 
example on Windows C:Users\\UserName\\chromedriver.exe
4. Run command ./gradlew ChallengeTests
(If you are using Windows just execute : gradlew ChallengeTests)


### Report
Once you've run the tests, in the cmd line execution you'll see the link to the report generated (if it failed) if not the report can be found in Challenge2019/build/reports/tests/ChallengeTests/index.html
