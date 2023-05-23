package com.orangehrmlive.cucumber.wk16.pages;

import com.orangehrmlive.cucumber.wk16.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdminPage extends Utility {

    private static final Logger log = LogManager.getLogger(AdminPage.class.getName());

    public AdminPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='User Management']")
    WebElement userManagement;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Job']")
    WebElement jobTab;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Organization']")
    WebElement organisationTab;



//    By userManagement= By.xpath("//span[normalize-space()='User Management']");
//    By jobTab = By.xpath("//span[normalize-space()='Job']");
//    By organisationTab = By.xpath("//span[normalize-space()='Organization']");

    public void clickOnUserManagementTab(){
        clickOnElement(userManagement);
        log.info("Clicking on user management tab : " + userManagement.toString());

    }

    public void clickOnJobTab(){
        clickOnElement(jobTab);
        log.info("Clicking on job tab : " + jobTab.toString());

    }

    public void clickOnOrganisationTab(){
        clickOnElement(organisationTab);
        log.info("Clicking on organisation tab : " + organisationTab.toString());

    }


}








