package steps;

import Utils.RestAssuredExtension;
import com.user.User;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.hamcrest.Matchers;

import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.Matchers.*;
import static org.hamcrest.Matchers.is;

public class UserAPI_steps {
    private static Response response;

    @Given("I perform GET operation with username {string}")
    public void iPerformGETOperationWithUsername(String paramValue) throws Throwable {
        response = RestAssuredExtension.Request.
                queryParam("username", paramValue).get("/details");
    }

    @Then("I should see the {string} {string} in body response")
    public void iShouldSeeTheInBodyResponse(String field, String nameUser) throws Throwable {
        response.
                then().
                body(field,is(nameUser));
    }

    @And("{string} field is not present")
    public void passwordFieldIsNotPresent(String field) {
        response.
                then().
                body("$", not(hasKey(field)));
    }

    @Given("I perform GET operation without query parameter")
    public void iPerformGETOperationWithoutQueryParameter() {

        response = RestAssuredExtension.Request.get("/details");
    }

    @And("status code should be {int}")
    public void statusCodeShouldBe(int statusCode) {
        response.then().statusCode(statusCode);
    }

    @Given("I perform GET operation for all users with username: {string} and password: {string}")
    public void iPerformGETOperationForAllUsersWithUsernameAndPassword(String username, String password) throws URISyntaxException {
        Map<String, String> auth = new HashMap<String, String>();
        auth.put("username", username);
        auth.put("password", password);
        response = RestAssuredExtension.GetWithBasicAuth("/all", auth);
    }

    @Then("I should get a list of users with all their information")
    public void iShouldGetAListOfUsersWithAllTheirInformation() {
        response.then()
                .body("size()", Matchers.greaterThan(0));
        System.out.print("JSON response: ");
        response.print();
    }

    @Given("I perform GET operation to get access with username {string} and password {string}")
    public void iPerformGETOperationToGetAccessWithUsernameAndPassword(String username, String password) throws URISyntaxException {
        Map<String, String> auth = new HashMap<String, String>();
        auth.put("username", username);
        auth.put("password", password);
        response = RestAssuredExtension.GetWithBasicAuth("/access", auth);
    }

    @Then("I should get access and obtain my user info")
    public void iShouldGetAccessAndObtainMyUserInfo() {
        response.then()
                .statusCode(200)
                .body("size()", Matchers.greaterThan(0));
        response.print();
    }

    private User user;
    @Given("I perform DELETE operation with username {string} and password {string} with data")
    public void iPerformDELETEOperationWithUsernameAndPasswordWithData(String username, String password, DataTable dt) {
        Map<String, String> auth = new HashMap<String, String>();
        auth.put("username", username);
        auth.put("password", password);
        Map<String, String> map = dt.asMap(String.class,String.class);
        user = new User(
                String.valueOf(map.get("username")),
                Boolean.valueOf(map.get("isAdmin")),
                String.valueOf(map.get("dateOfBirth")),
                String.valueOf(map.get("email")),
                String.valueOf(map.get("name")),
                String.valueOf(map.get("password")),
                String.valueOf(map.get("superpower"))
        );
        response = RestAssuredExtension.DeleteWithBodyAndBasicAuth("",auth,user);
    }

    @Given("I perform GET operation on {string} with no auth data")
    public void iPerformGETOperationOnWithNoAuthData(String url) throws URISyntaxException {
        response = RestAssuredExtension.GetWithoutBasicAuth(url);
    }

    @Given("I perform POST with the following data")
    public void iPerformPOSTWithTheFollowingData(DataTable dt) {
        Map<String, String> map = dt.asMap(String.class,String.class);
        User user = new User(
                String.valueOf(map.get("username")),
                Boolean.valueOf(map.get("isAdmin")),
                String.valueOf(map.get("dateOfBirth")),
                String.valueOf(map.get("email")),
                String.valueOf(map.get("name")),
                String.valueOf(map.get("password")),
                String.valueOf(map.get("superpower"))
        );
        response = RestAssuredExtension.PostWithBody("",user);
    }

    @Then("I should get a successful response and my information in the response")
    public void iShouldGetASuccessfulResponseAndMyInformationInTheResponse() {
        response.then()
                .statusCode(201)
                .body("username",Matchers.notNullValue())
                .body("isAdmin",Matchers.notNullValue())
                .body("dateOfBirth",Matchers.notNullValue())
                .body("email",Matchers.notNullValue())
                .body("name",Matchers.notNullValue())
                .body("password",Matchers.nullValue())
                .body("superpower",Matchers.notNullValue());
        response.body().print();
    }

    @Given("I perform PUT operation with username {string} and password {string} with data")
    public void iPerformPUTOperationWithUsernameAndPasswordWithData(String username, String password, DataTable dt) {
        Map<String, String> auth = new HashMap<String, String>();
        auth.put("username", username);
        auth.put("password", password);
        Map<String, String> map = dt.asMap(String.class,String.class);
        String id = map.get("id");
        User user;
        if (id.equals("")){
            user = new User(
                    null,
                    String.valueOf(map.get("username")),
                    Boolean.valueOf(map.get("isAdmin")),
                    String.valueOf(map.get("dateOfBirth")),
                    String.valueOf(map.get("email")),
                    String.valueOf(map.get("name")),
                    String.valueOf(map.get("password")),
                    String.valueOf(map.get("superpower"))
            );
        }
        else {
            user = new User(
                    Integer.parseInt(id),
                    String.valueOf(map.get("username")),
                    Boolean.valueOf(map.get("isAdmin")),
                    String.valueOf(map.get("dateOfBirth")),
                    String.valueOf(map.get("email")),
                    String.valueOf(map.get("name")),
                    String.valueOf(map.get("password")),
                    String.valueOf(map.get("superpower"))
            );
        }

        response = RestAssuredExtension.PuttWithBodyAndBasicAuth("",auth,user);
    }

    @Then("I should receive a successful response and information of user updated")
    public void iShouldReceiveASuccessfulResponseAndInformationOfUserUpdated() {
        response.then()
                .statusCode(200)
                .body("username", Matchers.notNullValue())
                .body("isAdmin",Matchers.notNullValue())
                .body("dateOfBirth",Matchers.notNullValue())
                .body("email",Matchers.notNullValue())
                .body("name",Matchers.notNullValue())
                .body("password",Matchers.nullValue())
                .body("superpower",Matchers.notNullValue())
                .body("id",Matchers.notNullValue());
        response.body().print();
    }

    @Given("I perform DELETE operation with username {string} and password {string} with body {string} and {string}")
    public void iPerformDELETEOperationWithUsernameAndPasswordWithBodyAnd(String username, String password, String bodyUsername, String bodyEmail) {
        Map<String, String> auth = new HashMap<String, String>();
        auth.put("username", username);
        auth.put("password", password);

        Map<String,String> body = new HashMap<>();
        body.put("username", bodyUsername);
        body.put("email", bodyEmail);
        response = RestAssuredExtension.DeleteWithBodyAndBasicAuth("",auth,body);
    }

    @And("I should receive a successful response and a confirmation message  for {string} deleted")
    public void iShouldReceiveASuccessfulResponseAndAConfirmationMessageForDeleted(String username) {
        response.then().contentType(ContentType.TEXT)
                .statusCode(200)
                .body(containsString("User '"+username+"' removed from database."));

        System.out.print("Response Body: ");
        response.body().print();
    }
}
