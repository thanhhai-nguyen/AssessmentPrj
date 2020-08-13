package action;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginFail {
	
	public void checkLoginFail(WebDriver driver) throws Exception {
		String loginBtn = "//button[@name='submit']";
		if (driver.findElements(By.xpath(loginBtn)).size() != 0) {
			System.out.println("Login successful !!!");
		} else {
			throw new Exception("Element not found");
		}
	}
}
