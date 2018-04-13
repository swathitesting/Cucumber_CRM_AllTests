package runner;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.ExtentCucumberFormatter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(glue="stepDefinitions",
                 features="src/test/resources/Features/",
                 plugin = {"pretty","html:Cucumber-Reports/cucumber-pretty",
                                    "json:Cucumber-Reports/cucumber-json/cucumberJsonReport",
                  	                "com.cucumber.listener.ExtentCucumberFormatter:"},
                 tags = {"@login2,@contacts,@deals,@negative1"},
                 monochrome = true,
                 dryRun = false)
                 

public class TestRunner 
{
  @BeforeClass
	public static void setup() 
	 {
		String reportFilePath = "Cucumber-Reports"+File.separator+"extentreport.html";
	    System.out.println("FilePath:"+reportFilePath);
	    ExtentCucumberFormatter.initiateExtentCucumberFormatter(new File(reportFilePath));
	 }
}	
	
