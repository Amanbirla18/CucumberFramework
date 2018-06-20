package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		 features = "C:/Selenium_Workspace/FreeCRMBDDFramework/src/main/java/Features/contact.feature/" // path of feature files
		,glue={"stepDefinitions"} // path of step definition files
//		,plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json"}
//		,strict = true // it will chec if any step is not defined in step definition file 
//		,monochrome = true // display output on console in proper readable format
		,dryRun = false  // to verify that  for each definition in feature file we have method in step definition
		)
public class TestRunner {

}
