import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
/*
TAGS to RUN SUITES
@FunctionalTest
@SmokeTest
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber-reports-html", "json:target/jsonReports/cucumber-json-report.json"},
        features = "src/test/java/features",
        glue={"steps"},
        monochrome = true,
        tags = {"@FunctionalTest"}
)
public class TestRunner {

}
