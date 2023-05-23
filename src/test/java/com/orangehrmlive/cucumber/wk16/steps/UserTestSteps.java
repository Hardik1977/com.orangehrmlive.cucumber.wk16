package com.orangehrmlive.cucumber.wk16.steps;

import com.orangehrmlive.cucumber.wk16.pages.AddUserPage;
import com.orangehrmlive.cucumber.wk16.pages.HomePage;
import com.orangehrmlive.cucumber.wk16.pages.ViewSystemUserUsersPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class UserTestSteps {
    @And("^I click on 'Admin' tab$")
    public void iClickOnAdminTab() {
        new HomePage().clickOnAdminTab();
    }

    @Then("^I verify System users text as \"([^\"]*)\"$")
    public void iVerifySystemUsersTextAs(String expectedText)  {
        Assert.assertEquals(new ViewSystemUserUsersPage().verifySystemUsersText(),expectedText);
    }

    @When("^I click on 'Add' button$")
    public void iClickOnAddButton() {
        new ViewSystemUserUsersPage().clickOnAddButton();
    }

    @Then("^I verify Add user text as \"([^\"]*)\"$")
    public void iVerifyAddUserTextAs(String expectedText)  {
        Assert.assertEquals(new AddUserPage().verifyAddUserText(), expectedText);
    }

    @When("^I click on 'User Roll Dropdown'$")
    public void iClickOnUserRollDropdown() {
        new AddUserPage().clickOnUserRollDropdown();
    }

    @And("^I enter employee name as \"([^\"]*)\"$")
    public void iEnterEmployeeNameAs(String employeeName)  {
        new AddUserPage().enterEmployeeName(employeeName);
    }

    @And("^I click on 'Status dropdown'$")
    public void iClickOnStatusDropdown() throws InterruptedException {
        new AddUserPage().selectStatusDisabled();
    }

    @And("^I enter password on add user page as \"([^\"]*)\"$")
    public void iEnterPasswordOnAddUserPageAs(String password)  {
        new AddUserPage().enterPassword(password);
    }

    @And("^I enter confirm password on add user page as \"([^\"]*)\"$")
    public void iEnterConfirmPasswordOnAddUserPageAs(String cPassword)  {
        new AddUserPage().enterConfirmPassword(cPassword);
    }

    @And("^I click on 'Save' button$")
    public void iClickOnSaveButton() {
        new AddUserPage().clickOnSaveButton();
    }

    @Then("^I verify message of saved successfully \"([^\"]*)\"$")
    public void iVerifyMessageOfSavedSuccessfully(String expectedMessage)  {
        Assert.assertEquals(new AddUserPage().verifyAlertText(),expectedMessage);
    }

    @When("^I enter username on view system users page \"([^\"]*)\"$")
    public void iEnterUsernameOnViewSystemUsersPage(String username)  {
        new ViewSystemUserUsersPage().enterUsername(username);
    }

    @And("^I click on checkbox$")
    public void iClickOnCheckbox() {
        new ViewSystemUserUsersPage().clickOnCheckbox();
    }

    @And("^I click on 'Delete' button$")
    public void iClickOnDeleteButton() {
        new ViewSystemUserUsersPage().clickOnDeleteButton();
    }

    @And("^I click on 'User Roll Dropdown' on view users page$")
    public void iClickOnUserRollDropdownOnViewUsersPage() {
        new ViewSystemUserUsersPage().clickOnUserRollDropdown();
    }

    @And("^I click on 'Status dropdown' on view users page$")
    public void iClickOnStatusDropdownOnViewUsersPage() {
        new ViewSystemUserUsersPage().clickOnStatusDropdown();
    }

    @And("^I click on 'Search' button$")
    public void iClickOnSearchButton() {
        new ViewSystemUserUsersPage().clickOnSearchButton();
    }

    @Then("^I verify the user \"([^\"]*)\" should in result list$")
    public void iVerifyTheUserShouldInResultList(String expectedText)  {
        Assert.assertTrue(new ViewSystemUserUsersPage().verifyResultList(expectedText));
    }

//    @Then("^I click ok button on Popup$")
//    public void iClickOkButtonOnPopup() {
//        new ViewSystemUserUsersPage().c
//    }

    @And("^I verify message of deleted record as \"([^\"]*)\"$")
    public void iVerifyMessageOfDeletedRecordAs(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }



    @And("^I enter username on add user page as \"([^\"]*)\"$")
    public void iEnterUsernameOnAddUserPageAs(String username)  {
        new AddUserPage().enterUsername(username);
    }

    @And("^I enter employee name on view system users pas as \"([^\"]*)\"$")
    public void iEnterEmployeeNameOnViewSystemUsersPasAs(String employeeName)  {
        new ViewSystemUserUsersPage().enterEmployeeName(employeeName);
    }



    @Then("^I verify the message of no records found \"([^\"]*)\"$")
    public void iVerifyTheMessageOfNoRecordsFound(String expected)  {
        Assert.assertEquals(new ViewSystemUserUsersPage().verifyRecordsFound(),expected);
    }
}
