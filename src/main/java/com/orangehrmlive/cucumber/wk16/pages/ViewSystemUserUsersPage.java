package com.orangehrmlive.cucumber.wk16.pages;

import com.orangehrmlive.cucumber.wk16.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ViewSystemUserUsersPage extends Utility {

    private static final Logger log = LogManager.getLogger(ViewSystemUserUsersPage.class.getName());

    public ViewSystemUserUsersPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h5[normalize-space()='System Users']")
    WebElement systemUsersText;

    @CacheLookup
    @FindBy(xpath = "//i[@class='oxd-icon bi-caret-down-fill']")
    WebElement dropdownLink;

    @CacheLookup
    @FindBy(xpath = "(//input[@class='oxd-input oxd-input--active'])[2]")
    WebElement usernameField;

    @CacheLookup
    @FindBy(xpath = "(//div[@class='oxd-select-text-input'][text()='-- Select --'])[1]")
    WebElement userRollDropdown;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Type for hints...']")
    WebElement employeeNameField;

    @CacheLookup
    @FindBy(xpath = "(//div[@class='oxd-select-text-input'][text()='-- Select --'])[1]")
    WebElement statusDropdown;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Search']")
    WebElement searchButton;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Reset']")
    WebElement resetButton;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Add']")
    WebElement addButton;

    @CacheLookup
    @FindBy(xpath = "(//button[@class='oxd-icon-button oxd-table-cell-action-space'][1]/i)[1]")
    WebElement deleteButton;

    @CacheLookup
    @FindBy(xpath = "(//div[@class='oxd-table-body']/descendant::span)[1]")
    WebElement checkBox;

    @CacheLookup
    @FindBy(xpath = "//div[@class='oxd-table-body']")
    List<WebElement> resultList;

    @CacheLookup
    @FindBy(css = ".oxd-autocomplete-option span")
    WebElement nameOption;


    @CacheLookup
    @FindBy(xpath = "//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']")
    WebElement recordsFountHeading;


//    By systemUsersText = By.xpath("//h5[normalize-space()='System Users']");
//    By dropDownLink = By.xpath("//i[@class='oxd-icon bi-caret-down-fill']");
//    By usernameField = By.xpath("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']");
//    By userRollDropdown = By.xpath("//div[@class='oxd-table-filter-area']//div[2]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]");
//    By employeeNameField = By.xpath("//input[@placeholder='Type for hints...']");
//    By statusDropdown = By.xpath("//div[@class='oxd-table-filter-area']//div[2]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]");
//    By searchButton = By.xpath("//button[normalize-space()='Search']");
//    By resetButton = By.xpath("//button[normalize-space()='Reset']");
//    By addButton = By.xpath("//button[normalize-space()='Add']");
//    By deleteButton = By.xpath("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/div[6]/div[1]/button");
//    By checkBox = By.xpath("//input[@type='checkbox']");

    public String verifySystemUsersText() {
        log.info("Getting system users text : " + systemUsersText.toString());
        return getTextFromElement(systemUsersText);
    }

    public void enterUsername(String username) {
        clickOnElement(usernameField);
        sendTextToElement(usernameField, username);
        log.info("Entering username : " + usernameField.toString());

    }

    public void clickOnUserRollDropdown() {
        clickOnElement(userRollDropdown);
        userRollDropdown.sendKeys(Keys.DOWN, Keys.TAB);
        log.info("Clicking on user roll dropdown : " + userRollDropdown.toString());

    }

    public void enterEmployeeName(String name) {
        sendTextToElement(employeeNameField, name);
        clickOnElement(nameOption);
    }

    public void clickOnStatusDropdown() {
        clickOnElement(statusDropdown);
        statusDropdown.sendKeys(Keys.DOWN, Keys.TAB);
    }


    public void clickOnSearchButton() {
        clickOnElement(searchButton);
        log.info("Clicking on search button : " + searchButton.toString());

    }

    public void clickOnResetButton() {
        clickOnElement(resetButton);
        log.info("Clicking on reset button : " + resetButton.toString());

    }

    public void clickOnAddButton() {
        clickOnElement(addButton);
        log.info("Clicking on add button : " + addButton.toString());

    }

    public void clickOnDeleteButton() {
        clickOnElement(deleteButton);
        log.info("Clicking on delete button : " + deleteButton.toString());

    }

    public void clickOnCheckbox() {
        clickOnElement(checkBox);
        log.info("Clicking on checkbox : " + checkBox.toString());

    }

    public boolean verifyResultList(String text) {
        List<WebElement> elementList = resultList;
        for (WebElement e : elementList) {
            if (e.getText().contains(text)) {
                e.click();
            }
        }
        return true;
    }

    public String verifyRecordsFound() {
        return getTextFromElement(recordsFountHeading);
    }


}
