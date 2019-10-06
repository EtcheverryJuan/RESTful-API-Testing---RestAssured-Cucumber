package Utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.user.User;
import gherkin.deps.net.iharder.Base64;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import java.net.URISyntaxException;
import java.util.Map;

public class RestAssuredExtension {
    //Arrange-Act-Assert pattern
    public static RequestSpecification Request;
    public static Response response;
    public static String uri = "http://localhost:8081";
    public static String basePath = "/waesheroes/api/v1/users";

    public RestAssuredExtension() {
        //Arrange
        RequestSpecBuilder builder = new RequestSpecBuilder();
        builder.setBaseUri(uri);
        builder.setBasePath(basePath);
        builder.setContentType(ContentType.JSON);
        var requestSpec = builder.build();
        Request = RestAssured.given().spec(requestSpec);
    }

    private static RequestSpecification resetRequest(){
        RequestSpecBuilder builder = new RequestSpecBuilder();
        builder.setBaseUri(uri);
        builder.setBasePath(basePath);
        builder.setContentType(ContentType.JSON);
        var requestSpec = builder.build();
        return RestAssured.given().spec(requestSpec);
    }

    public static Response GetWithBasicAuth(String url, Map<String, String> auth) throws URISyntaxException {
        Request = resetRequest();
        Request.header("Authorization", "Basic "+encodeAuth(auth));
        return Request.get(url);
    }

    public static Response GetWithoutBasicAuth(String url) throws URISyntaxException {
        return Request.get(url);
    }

    private static String encodeAuth(Map<String, String> auth) {
        String stringToEncode = auth.get("username")+":"+ auth.get("password");
        return Base64.encodeBytes(stringToEncode.getBytes());
    }

    public static Response PostWithBody(String url, User user) {
        ObjectMapper mapper = new ObjectMapper();
        String json = "";
        try {
            json = mapper.writeValueAsString(user);
            return Request.with().body(json).when().post(url);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Response PuttWithBodyAndBasicAuth(String url,Map<String,String> auth ,User user) {
        ObjectMapper mapper = new ObjectMapper();
        String json = "";
        try {
            json = mapper.writeValueAsString(user);
            System.out.println("JSON: "+json);
            return Request.header("Authorization", "Basic "+encodeAuth(auth)).with().body(json).when().put(url);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Response DeleteWithBodyAndBasicAuth(String url,Map<String,String> auth ,User user){
        ObjectMapper mapper = new ObjectMapper();
        String json = "";
        try {
            json = mapper.writeValueAsString(user);
            System.out.println("JSON Request: "+json);
            return Request.header("Authorization", "Basic "+encodeAuth(auth)).with().body(json).when().delete(url);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
    public static Response DeleteWithBodyAndBasicAuth(String url,Map<String,String> auth ,Map<String,String> body){
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            String json = objectMapper.writeValueAsString(body);

            return Request.header("Authorization", "Basic "+encodeAuth(auth)).with().body(json).when().delete(url);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void statusCodeVerification(int statusCode){
        response.then().statusCode(statusCode);
    }
}
