package action;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.DataTable;

public class CreateNew {

	String strUsername = "";
	String strPW = "";
	String strURL = "https://anotepad.com/login";

	public void navigateRegister(WebDriver driver) {
		String register = "//a[@href='/create_account']";
		driver.findElement(By.xpath(register)).click();
	}

	public String executeCreate(WebDriver driver, DataTable table) {
		List<Map<String, String>> list = table.asMaps(String.class, String.class);

		for (int i = 0; i < list.size(); i++) {
			String genUsername = "aaaa" + (int)(Math.random() * 10000) +"@gmail.com";
			strUsername = genUsername;
			strPW = list.get(i).get("Password");
			String createUserPath = "//input[@id='registerEmail']";
			String createPWPath = "//input[@placeholder='New Password']";
			String createBtn = "//button[contains(.,'Create')]";

			driver.findElement(By.xpath(createUserPath)).sendKeys(strUsername);
			driver.findElement(By.xpath(createPWPath)).sendKeys(strPW);

			driver.findElement(By.xpath(createBtn)).click();
		}
		return strUsername + "/" + strPW;
	}

	public void navigateBack(WebDriver driver) {
		driver.get(strURL);
	}
}
