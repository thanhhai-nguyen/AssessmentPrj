package stepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import action.CreateNew;
import action.LoginFail;
import action.LoginPass;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTC extends LoginPass {

	public WebDriver driver;
	String location = System.getProperty("user.dir");
	LoginPass loginPass = new LoginPass();
	action.LoginFail loginFail = new LoginFail();
	CreateNew createNew = new CreateNew();

	@Before()
	public void init() {
		System.setProperty("webdriver.chrome.driver", location + "\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Given("^User navigate to page \"([^\"]*)\"$")
	public void user_navigate_to_page(String url) throws Throwable {
		loginPass.navigate(driver, url);
	}

	@When("^User input \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_input_and(String username, String password) throws Throwable {
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
		loginPass.inputLogin(driver, username, password);
	}

	@Then("^User navigate to main page success$")
	public void user_navigate_to_main_page_success() throws Throwable {
		loginPass.checkLoginSuccess(driver);
	}

	@Then("^User stay in login page, not login success$")
	public void user_stay_in_login_page_not_login_success() throws Throwable {
		loginFail.checkLoginFail(driver);
	}

	@Given("^User navigate to create account page$")
	public void user_navigate_to_create_account_page() throws Throwable {
		createNew.navigateRegister(driver);
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);

	}

	String createData = "";

	@Given("^User create new account with generate username and default PW$")
	public void user_create_new_account_with_generate_username_and_default_PW(DataTable table) throws Throwable {
		createData = createNew.executeCreate(driver, table);
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
	}

	@When("^User navigate back to login page$")
	public void user_navigate_back_to_login_page() throws Throwable {
		createNew.navigateBack(driver);
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
	}

	@When("^Login with new create account$")
	public void login_with_new_create_account() throws Throwable {

		String[] tmp = createData.split("/");
		String newUser = tmp[0];
		String newPW = tmp[1];
		System.out.println("AAA:"+ newUser +"|" + newPW);
		loginPass.inputLogin(driver, newUser, newPW);
	}

	@Then("^User login to application success$")
	public void user_login_to_application_success() throws Throwable {
		String searchBtn = "//input[@id='search']";
		if (driver.findElements(By.xpath(searchBtn)).size() != 0) {
			System.out.println("Login successful !!!");
		} else {
			throw new Exception("Element not found");
		}
	}

	@After
	public void closeBrower() {
		driver.close();
	}

}
