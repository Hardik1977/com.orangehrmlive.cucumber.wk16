package com.orangehrmlive.cucumber.wk16.steps;

import com.orangehrmlive.cucumber.wk16.pages.HomePage;
import com.orangehrmlive.cucumber.wk16.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginTestSteps {
    @When("^I enter username as \"([^\"]*)\"$")
    public void iEnterUsernameAs(String username)  {
        new LoginPage().enterUsername(username);
    }

    @And("^I enter password as \"([^\"]*)\"$")
    public void iEnterPasswordAs(String password)  {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on 'Login' button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I verify dashboard text as \"([^\"]*)\"$")
    public void iVerifyDashboardTextAs(String expectedText)  {
        Assert.assertEquals(new HomePage().verifyDashboardText(),expectedText);
    }

    @Then("^I verify the logo on login page$")
    public void iVerifyTheLogoOnLoginPage() {
        Assert.assertTrue(new LoginPage().hrForAllLogoDisplayedOrNot());
    }

    @And("^I click on 'User Profile Logo Dropdown' tab$")
    public void iClickOnUserProfileLogoDropdownTab() {
        new HomePage().clickOnUserProfileLogoDropdownTab();
    }

    @And("^I mouse hover and click on 'Logout' link$")
    public void iMouseHoverAndClickOnLogoutLink() throws InterruptedException {
        new HomePage().mouseHoverAndClickOnLogoutLink();
    }

    @Then("^I verify login panel text as \"([^\"]*)\"$")
    public void iVerifyLoginPanelTextAs(String expectedText)  {
        Assert.assertEquals(new LoginPage().verifyLoginPanelText(), expectedText);
    }
}
