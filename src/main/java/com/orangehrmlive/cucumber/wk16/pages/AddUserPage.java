package com.orangehrmlive.cucumber.wk16.pages;

import com.orangehrmlive.cucumber.wk16.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddUserPage extends Utility {
    private static final Logger log = LogManager.getLogger(AddUserPage.class.getName());

    public AddUserPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h6[normalize-space()='Add User']")
    WebElement addUserText;

    @CacheLookup
    @FindBy(xpath = "(//div[@class='oxd-select-text-input'][normalize-space()='-- Select --'])[1]")
    WebElement userRollDropdown;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Type for hints...']")
    WebElement employeeNameField;


    @CacheLookup
    @FindBy(css = ".oxd-autocomplete-option span")
    WebElement nameOption;

    @CacheLookup
    @FindBy(xpath = "//input[@class='oxd-input oxd-input--active'])[2]")
    WebElement usernameField;

    @CacheLookup
    @FindBy(xpath = "(//div[@class='oxd-select-text-input'][normalize-space()='-- Select --'])[1]")
    WebElement statusDropdown;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Disabled']")
    WebElement disabledOption;

    @CacheLookup
    @FindBy(xpath = "//div[@class='oxd-grid-item oxd-grid-item--gutters user-password-cell']//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@type='password']")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//div[@class='oxd-grid-item oxd-grid-item--gutters']//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@type='password']")
    WebElement confirmPasswordField;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Save']")
    WebElement saveButton;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Save']")
    WebElement cancelButton;


    public String verifyAddUserText() {
        return getTextFromElement(addUserText);
    }


    public void clickOnUserRollDropdown() {
        clickOnElement(userRollDropdown);
        userRollDropdown.sendKeys(Keys.DOWN, Keys.TAB);

    }

    public void enterEmployeeName(String name) {
        sendTextToElement(employeeNameField, name);
        clickOnElement(nameOption);
    }

    public void selectStatusDisabled() throws InterruptedException {
        Thread.sleep(1000);
        clickOnElement(statusDropdown);
        statusDropdown.sendKeys(Keys.DOWN, Keys.TAB);
    }


    public void enterUsername(String username) {
        sendTextToElement(usernameField, username);
        log.info("Entering username : " + usernameField.toString());

    }


    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("Entering password : " + passwordField.toString());

    }

    public void enterConfirmPassword(String confirmPassword) {
        sendTextToElement(confirmPasswordField, confirmPassword);
        log.info("Entering confirm password : " + confirmPasswordField.toString());

    }

    public void clickOnSaveButton() {
        clickOnElement(saveButton);
        log.info("Clicking on save button : " + saveButton.toString());

    }

    public void clickOnCancelButton() {
        clickOnElement(cancelButton);
        log.info("Clicking on cancel button : " + cancelButton.toString());

    }

    public String verifyAlertText() {
        return getAlertText();
    }


}
