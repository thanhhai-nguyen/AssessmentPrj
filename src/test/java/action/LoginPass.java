package action;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPass {

	public void navigate(WebDriver driver, String URL) {
		driver.get(URL);
	} 
	
	public void inputLogin(WebDriver driver, String username, String password) {
		String usernameXpath = "//input[@id='loginEmail']";
		String pwXpath = "//input[@id='password']";
		String loginBtn = "//button[@name='submit']";
		if (username.equalsIgnoreCase("blank") == false) {
			driver.findElement(By.xpath(usernameXpath)).sendKeys(username);
		}
		if (password.equalsIgnoreCase("blank") == false) {
			driver.findElement(By.xpath(pwXpath)).sendKeys(password);
		}
		driver.findElement(By.xpath(loginBtn)).click();
	}
	
	public void checkLoginSuccess(WebDriver driver) throws Exception {
		String textArea = "//textarea";
		if (driver.findElements(By.xpath(textArea)).size() != 0) {
			System.out.println("Login successful !!!");
		} else {
			throw new Exception("Element not found");
		}
	}
	
	
}
