package steps;

import Utils.RestAssuredExtension;
import com.user.User;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.restassured.response.Response;

import java.util.Map;

public class TestInitialize {

    @Before
    public void TestSetup(){
        RestAssuredExtension restAssuredExtension = new RestAssuredExtension();
    }
}
