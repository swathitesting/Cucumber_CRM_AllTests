package util;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TestUtil 
{
	
	public static WebDriver driver;
	
	public static void openBrowser() 
	  {
		  System.setProperty("webdriver.chrome.driver", "driver_exefiles\\chromedriver.exe");
		  driver = new ChromeDriver();
		  driver.manage().window().maximize();
		  driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	  }

	public static void navigateURL()
	{
	      driver.get("https://www.freecrm.com");
	}
	 
	 public static void switchToFrame()
	 {
		 driver.switchTo().frame("mainpanel");
	 }
	  
	  public  boolean isElementPresent(WebElement element)
		{ 
			try
			{
				if(element.isDisplayed())
				  return true;
				else
				  return false;	
					
			}
			
			catch(Exception e)
			{
				return false;
			}
		}

		public  void mouseHoverElementAndClick(WebElement element)
		{
			Actions act = new Actions(driver);
			act.moveToElement(element).click().build().perform();
		
		}
		
		public  void mouseHoverElement(WebElement element)
		{
			Actions act = new Actions(driver);
			act.moveToElement(element).build().perform();
		
		}
		
		public void waitForElementToLoad(WebElement element) 
		{
	        WebDriverWait wait = new WebDriverWait(driver, 30);
	        wait.until(ExpectedConditions.visibilityOf(element));
	    }
		
		public static void wait(int milliSecs) 
	    {
	        try 
	        {
	            Thread.sleep(milliSecs);
	        }
	        catch (InterruptedException e) 
	        {
	            e.printStackTrace();
	        }
	    }

	    public static void shortWait() 
	    {
	        wait(3000);
	    }

	    public void longWait() 
	    {
	        wait(6000);
	    }
	    
	    public static void closeBrowser()
	    {
	    	driver.close();
	    	driver.quit();
	    }



// we can also make step defs file extends TestUtil and remove static for
//   open browser,close browser, navigate url methods	    
}
