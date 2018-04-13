package stepDefinitions;


import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import pageobjects.HomePage;
import pageobjects.LoginPage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import util.TestUtil;

public class LoginTest
{ // creating the reference of login page here and initialising the ref var in the method
  // if we initialise at global level only then it is initialised for 1st time and lost, thus do as above.	
	LoginPage lp; 
	HomePage hp;
	Scenario scenario;
	@Before
	public void setUp(Scenario scenario) 
	{
	  this.scenario = scenario;
	  TestUtil.openBrowser();
	  System.out.println("Test Environment set up....");
	  System.out.println("Exceuting Scenario"+scenario.getName());
	}
	@After
	public void close()
	{
		 scenario.write("Finished Scenario...");
		  if(scenario.isFailed())
		  {
			  scenario.embed(((TakesScreenshot)TestUtil.driver).getScreenshotAs(OutputType.BYTES),"image/png");
		  }
		  
		TestUtil.closeBrowser();
	}
	
	@Given("^User navigates to the Free CRM url on the opened browser$")
	public void User_navigates_to_the_Free_CRM_url_on_the_opened_browser() 
	{
      lp = new LoginPage();
      TestUtil.navigateURL();
	}

	@Then("^Login page is displayed$")
	public void login_page_is_displayed() 
	{
     String title = lp.verifyLoginPageTitle(); //actual
     Assert.assertEquals("Free CRM in the cloud software boosts sales",title);
	}

	@Then("^User enters username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enters_username_as_and_password_as(String uname, String passwd)
	{
	 lp.enterUserNamePassword(uname, passwd);
	}

	@Then("^User click on login button$")
	public void User_click_on_login_button() 
	{
       lp.clickOnLoginBtn();

	}
		
	@Then("^login should be \"([^\"]*)\"$")
	public void login_should_be(String expectedResult)
	{
	 	lp.verifyLogoTextAfterLogin();
	}
	
	@Then("^Validate home page title$")
	public void validate_home_page_title() 
	{
		hp = new HomePage();
        String homeTitle = hp.verifyHomePageTitle(); //actual
        System.out.println("Home pg title: "+homeTitle);
        Assert.assertEquals("Home page title is not matching","CRMPRO",homeTitle);
	}
	
	@Then("^Validate logotext after login$")
	public void validate_logotext_after_login() 
	{
		//Assert.assertTrue(lp.verifyLogoTextAfterLogin());
		Assert.assertTrue("Logotext is not matching", lp.verifyLogoTextAfterLogin());
	}
	
}

// In Junit

//  Assert.asserEquals(message,expected,actual)
//  Assrt.assertTrue(message,boolean condition)

//In TestNg

//   Assert.assertEquals(actual,expected,msg);
//   Assert.assertTrue(boolean condition, String message)


