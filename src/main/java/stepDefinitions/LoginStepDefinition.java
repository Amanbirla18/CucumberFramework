package stepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
public class LoginStepDefinition {
	
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
	// Reg Exp.
	// 1. \"(.*)\"
	// 2. \"([^\"]*)\"
	
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
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

	@Then("^close the browser$")
	public void close_the_browser()  {
    driver.close();
	}

	@Then("^user moves to new contact page$")
	public void user_moves_to_new_contact_page()  {
		driver.switchTo().frame("mainpanel");
		WebElement contactsLink=driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"));
		Actions actions = new Actions(driver);	
		actions.moveToElement(contactsLink).build().perform();
		WebElement newContactLink=driver.findElement(By.xpath("//a[@title='New Contact']"));
		newContactLink.click();
	}

	
	
	
	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and_and_and(String title, String firstname, String lastname, String position) throws Throwable {
		Thread.sleep(5000);
		Select select = new Select(driver.findElement(By.name("title")));
		select.selectByValue(title);
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.name("surname")).sendKeys(lastname);
		driver.findElement(By.name("company_position")).sendKeys(position);
		driver.findElement(By.xpath("//input[@value= 'Save' and @type ='submit']")).click();
	}
	}
