package pageobjects;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.DataTable;
import util.TestUtil;

public class DealsPage extends TestUtil
{
	@FindBy(id="title")
	 WebElement title;
    
	@FindBy(id="amount")
	 WebElement amount;

	@FindBy(id="probability")
	 WebElement probability;

	@FindBy(id="commission")
	 WebElement commission;
	
	@FindBy(xpath="//input[@type='submit']")
	 WebElement saveBtn;
	
	@FindBy(xpath="//a[contains(text(),'Deals')]")
	  public WebElement dealsTabLink;
	  
	@FindBy(xpath="//a[contains(text(),'New Deal')]")
	  public WebElement newDealLink;
		
	@FindBy(xpath="//legend[contains(text(),'Deal')]")
	 WebElement dealsPageText;
		
	public DealsPage()
	 {
		  PageFactory.initElements(driver,this);

	 }
	 
	 public boolean verifyDealsPageText()
	 {
		 return dealsPageText.isDisplayed();
	 }
	 
	 public void enterDealDetails_AsMaps(DataTable table2)
	{
	 List<Map<String,String>> dataList2 = table2.asMaps(String.class,String.class);
	 for(int i=0;i<dataList2.size();i++)
	{
	  title.sendKeys(dataList2.get(i).get("tit"));
	  amount.sendKeys(dataList2.get(i).get("amt"));
	  probability.sendKeys(dataList2.get(i).get("probabile"));
	  commission.sendKeys(dataList2.get(i).get("comm"));
	  saveBtn.click();
	  validateDeal(dataList2.get(i).get("tit").toString());
	  shortWait();
	  mouseHoverElement(dealsTabLink);
	  waitForElementToLoad(newDealLink);
	  newDealLink.click();
	 }
	
	}	
	 
	public void validateDeal(String dealTitle)
	{
	 mouseHoverElementAndClick(dealsTabLink);
	 WebElement deal = driver.findElement(By.xpath("//a[contains(text(),'"+dealTitle+"')]"));
	 System.out.println("Deal "+dealTitle+" is displayed = "+deal.isDisplayed());
	 Assert.assertTrue(deal.isDisplayed());
	}
	

}
