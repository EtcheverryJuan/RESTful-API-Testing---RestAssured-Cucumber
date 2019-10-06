package steps;

import io.restassured.http.ContentType;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.is;

public class HelperMethods {
    public static void GET_username(String username, String name) {
        given().contentType(ContentType.JSON).
                with().queryParam("username",username).
                when().get("http://localhost:8081/waesheroes/api/v1/users/details").
                then().body("name", is(name)).statusCode(200);
    }
}
