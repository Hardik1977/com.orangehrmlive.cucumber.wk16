package com.orangehrmlive.cucumber.wk16.pages;

import com.orangehrmlive.cucumber.wk16.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {


    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//p[@class='oxd-userdropdown-name']")
    WebElement userProfileLogoDropdownTab;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Logout')]")
    WebElement logoutLink;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Search']")
    WebElement searchField;

    @CacheLookup
    @FindBy(xpath = "//li[1]//a[1]//span[1]")
    WebElement adminTab;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='PIM']")
    WebElement pimTab;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Leave']")
    WebElement leaveTab;

    @CacheLookup
    @FindBy(xpath = "//h6[normalize-space()='Dashboard']")
    WebElement dashboardText;


//    By userProfileLogoDropdownTab = By.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']");
//    By logoutLink = By.xpath("//a[normalize-space()='Logout']");
//    By searchField = By.xpath("//input[@placeholder='Search']");
//    By adminTab = By.xpath("//li[1]//a[1]//span[1]");
//    By pimTab = By.xpath("//span[normalize-space()='PIM']");
//    By leaveTab = By.xpath("//span[normalize-space()='Leave']");
//    By dashboardText = By.xpath("//h6[normalize-space()='Dashboard']");


    public String verifyDashboardText() {
        log.info("Getting Dashboard text : " + dashboardText.toString());
        return getTextFromElement(dashboardText);
    }


    public void clickOnUserProfileLogoDropdownTab() {
        clickOnElement(userProfileLogoDropdownTab);
        log.info("Clicking on profile logo dropdown : " + userProfileLogoDropdownTab.toString());

    }

    public void mouseHoverAndClickOnLogoutLink() throws InterruptedException {
        Thread.sleep(1000);
        mouseHoverToElementAndClick(logoutLink);
        log.info("Mouse hovering and clicking on logout link : " + logoutLink.toString());

    }

    public void clickOnAdminTab() {
        clickOnElement(adminTab);
        log.info("Clicking on admin tab : " + adminTab.toString());

    }


}





