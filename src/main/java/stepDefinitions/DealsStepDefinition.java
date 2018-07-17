/*package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsStepDefinition {
	WebDriver driver;

	@Given("^user is on the login page$")
	public void user_is_on_the_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\NewGeckoDriver\\chromedriver.exe"); 
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com/");
	}
	
	@When("^title of the login page is Free CRM$")
	public void title_of_the_login_page_is_Free_CRM()  {
		
		String title = driver.getTitle();
		System.out.println("Login page title is: " +title);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
	   
	}
	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials)  {
		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	}
	

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
	 WebElement Loginbtn =  driver.findElement(By.xpath("//input[@type='submit']")); 
	 JavascriptExecutor js = (JavascriptExecutor)driver;
	 js.executeScript("arguments[0].click()", Loginbtn);
	}

	@Then("^user is on homepage$")
	public void user_is_on_homepage()  {
		String homepagetitle = driver.getTitle();
		System.out.println("Home page tittle is: "+homepagetitle);
	   Assert.assertEquals("CRMPRO", homepagetitle);
	}
	
	@Then("^user moves to new deal page$")
	public void user_moves_to_new_deal_page()  {
		driver.switchTo().frame("mainpanel");
		WebElement contactsLink=driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		Actions actions = new Actions(driver);	
		actions.moveToElement(contactsLink).build().perform();
		WebElement newDealLink=driver.findElement(By.xpath("//a[@title='New Deal']"));
		newDealLink.click();
	}
	
	@Then("^user enter deal details$")
	public void user_enter_deal_details(DataTable dealdata) throws InterruptedException  {
	   List<List<String>> DealData = dealdata.raw();
	   Thread.sleep(5000);
	   driver.findElement(By.xpath("//input[@name ='title']")).sendKeys(DealData.get(0).get(0));
	   Thread.sleep(5000);
	   driver.findElement(By.xpath("//input[@name ='amount']")).sendKeys(DealData.get(0).get(1));
	   Thread.sleep(5000);
	   driver.findElement(By.xpath("//input[@name ='probability']")).sendKeys(DealData.get(0).get(2));
	   Thread.sleep(5000);
	   driver.findElement(By.xpath("//input[@name ='commission']")).sendKeys(DealData.get(0).get(3));
	   Thread.sleep(5000);
	   driver.findElement(By.xpath("//input[@value= 'Save' and @type ='submit']")).click();
	   
	}
	@Then("^close the browser$")
	public void close_the_browser()  {
    driver.close();
	}
}
*/