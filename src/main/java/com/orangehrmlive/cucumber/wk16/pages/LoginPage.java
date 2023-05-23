package com.orangehrmlive.cucumber.wk16.pages;

import com.orangehrmlive.cucumber.wk16.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Username']")
    WebElement userNameField;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Password']")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Login']")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='orangehrm-login-logo']")
    WebElement hrForAllLogo;

    @CacheLookup
    @FindBy(xpath = "//h5")
    WebElement loginPanelText;

//    By userNameField = By.xpath("//input[@placeholder='Username']");
//    By passwordField = By.xpath("//input[@placeholder='Password']");
//    By loginButton = By.xpath("//button[normalize-space()='Login']");
//    By hrForAllLogo = By.xpath("//div[@class='orangehrm-login-logo']");
//    By loginPanelText = By.xpath("//h5[normalize-space()='Login']");

    public void enterUsername(String username) {
        sendTextToElement(userNameField, username);
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
    }

    public void clickOnLoginButton() {
        clickOnElement(loginButton);
    }

    public boolean hrForAllLogoDisplayedOrNot() {

        if (elementDisplayedOrNot(hrForAllLogo)) {
            return true;
        }
        return false;
    }

    public String verifyLoginPanelText() {
        return getTextFromElement(loginPanelText);
    }


}
