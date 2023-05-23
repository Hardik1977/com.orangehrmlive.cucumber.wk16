$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "As a user I want to check login functionality",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "User is on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user should login successfully",
  "description": "",
  "id": "login-functionality;verify-user-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter username as \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify dashboard text as \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterUsernameAs(String)"
});
formatter.result({
  "duration": 141568000,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.orangehrmlive.cucumber.wk16.utility.Utility.sendTextToElement(Utility.java:74)\r\n\tat com.orangehrmlive.cucumber.wk16.pages.LoginPage.enterUsername(LoginPage.java:37)\r\n\tat com.orangehrmlive.cucumber.wk16.steps.LoginTestSteps.iEnterUsernameAs(LoginTestSteps.java:13)\r\n\tat ✽.When I enter username as \"Admin\"(login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterPasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 28
    }
  ],
  "location": "LoginTestSteps.iVerifyDashboardTextAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "User is on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the logo displayed on login page",
  "description": "",
  "id": "login-functionality;verify-the-logo-displayed-on-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I verify the logo on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iVerifyTheLogoOnLoginPage()"
});
formatter.result({
  "duration": 559300,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\r\n\tat com.orangehrmlive.cucumber.wk16.utility.Utility.elementDisplayedOrNot(Utility.java:390)\r\n\tat com.orangehrmlive.cucumber.wk16.pages.LoginPage.hrForAllLogoDisplayedOrNot(LoginPage.java:50)\r\n\tat com.orangehrmlive.cucumber.wk16.steps.LoginTestSteps.iVerifyTheLogoOnLoginPage(LoginTestSteps.java:33)\r\n\tat ✽.Then I verify the logo on login page(login.feature:15)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "User is on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "Verify user should logout successfully",
  "description": "",
  "id": "login-functionality;verify-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter username as \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter password as \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \u0027User Profile Logo Dropdown\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I mouse hover and click on \u0027Logout\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify login panel text as \"Login\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterUsernameAs(String)"
});
formatter.result({
  "duration": 573900,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.orangehrmlive.cucumber.wk16.utility.Utility.sendTextToElement(Utility.java:74)\r\n\tat com.orangehrmlive.cucumber.wk16.pages.LoginPage.enterUsername(LoginPage.java:37)\r\n\tat com.orangehrmlive.cucumber.wk16.steps.LoginTestSteps.iEnterUsernameAs(LoginTestSteps.java:13)\r\n\tat ✽.When I enter username as \"Admin\"(login.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterPasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnUserProfileLogoDropdownTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTestSteps.iMouseHoverAndClickOnLogoutLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 30
    }
  ],
  "location": "LoginTestSteps.iVerifyLoginPanelTextAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("users.feature");
formatter.feature({
  "line": 1,
  "name": "Users page functionality",
  "description": "As a user I want to check users page functionality",
  "id": "users-page-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "User is on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify System users text as \"System Users\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterUsernameAs(String)"
});
formatter.result({
  "duration": 1218101,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.orangehrmlive.cucumber.wk16.utility.Utility.sendTextToElement(Utility.java:74)\r\n\tat com.orangehrmlive.cucumber.wk16.pages.LoginPage.enterUsername(LoginPage.java:37)\r\n\tat com.orangehrmlive.cucumber.wk16.steps.LoginTestSteps.iEnterUsernameAs(LoginTestSteps.java:13)\r\n\tat ✽.And I enter username as \"Admin\"(users.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterPasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 31
    }
  ],
  "location": "UserTestSteps.iVerifySystemUsersTextAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Admin should be able to add user successfully",
  "description": "",
  "id": "users-page-functionality;admin-should-be-able-to-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on \u0027Add\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I verify Add user text as \"Add User\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027User Roll Dropdown\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter employee name as \"Lisa Andrews\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \u0027Status dropdown\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter username on add user page as \"Lisa.Andrews\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password on add user page as \"9081811670@Dv\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter confirm password on add user page as \"9081811670@Dv\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on \u0027Save\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add User",
      "offset": 27
    }
  ],
  "location": "UserTestSteps.iVerifyAddUserTextAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnUserRollDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lisa Andrews",
      "offset": 26
    }
  ],
  "location": "UserTestSteps.iEnterEmployeeNameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnStatusDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lisa.Andrews",
      "offset": 38
    }
  ],
  "location": "UserTestSteps.iEnterUsernameOnAddUserPageAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9081811670@Dv",
      "offset": 38
    }
  ],
  "location": "UserTestSteps.iEnterPasswordOnAddUserPageAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9081811670@Dv",
      "offset": 46
    }
  ],
  "location": "UserTestSteps.iEnterConfirmPasswordOnAddUserPageAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "User is on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify System users text as \"System Users\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterUsernameAs(String)"
});
formatter.result({
  "duration": 509600,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.orangehrmlive.cucumber.wk16.utility.Utility.sendTextToElement(Utility.java:74)\r\n\tat com.orangehrmlive.cucumber.wk16.pages.LoginPage.enterUsername(LoginPage.java:37)\r\n\tat com.orangehrmlive.cucumber.wk16.steps.LoginTestSteps.iEnterUsernameAs(LoginTestSteps.java:13)\r\n\tat ✽.And I enter username as \"Admin\"(users.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterPasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 31
    }
  ],
  "location": "UserTestSteps.iVerifySystemUsersTextAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Search the user created and verify",
  "description": "",
  "id": "users-page-functionality;search-the-user-created-and-verify",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@smoke"
    },
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter username on view system users page \"Lisa.Andrews\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click on \u0027User Roll Dropdown\u0027 on view users page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter employee name on view system users pas as \"Lisa Andrews\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on \u0027Status dropdown\u0027 on view users page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify the user \"Lisa.Andrews\" should in result list",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Lisa.Andrews",
      "offset": 44
    }
  ],
  "location": "UserTestSteps.iEnterUsernameOnViewSystemUsersPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnUserRollDropdownOnViewUsersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lisa Andrews",
      "offset": 51
    }
  ],
  "location": "UserTestSteps.iEnterEmployeeNameOnViewSystemUsersPasAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnStatusDropdownOnViewUsersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lisa.Andrews",
      "offset": 19
    }
  ],
  "location": "UserTestSteps.iVerifyTheUserShouldInResultList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "User is on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify System users text as \"System Users\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterUsernameAs(String)"
});
formatter.result({
  "duration": 659300,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.orangehrmlive.cucumber.wk16.utility.Utility.sendTextToElement(Utility.java:74)\r\n\tat com.orangehrmlive.cucumber.wk16.pages.LoginPage.enterUsername(LoginPage.java:37)\r\n\tat com.orangehrmlive.cucumber.wk16.steps.LoginTestSteps.iEnterUsernameAs(LoginTestSteps.java:13)\r\n\tat ✽.And I enter username as \"Admin\"(users.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterPasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 31
    }
  ],
  "location": "UserTestSteps.iVerifySystemUsersTextAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 38,
  "name": "Verify that admin should delete the user successfully",
  "description": "",
  "id": "users-page-functionality;verify-that-admin-should-delete-the-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I verify System users text as \"System Users\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I enter username on view system users page \"Lisa.Andrews\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on \u0027User Roll Dropdown\u0027 on view users page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter employee name on view system users pas as \"Lisa Andrews\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on \u0027Status dropdown\u0027 on view users page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I verify the user \"Lisa.Andrews\" should in result list",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I click on checkbox",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I click on \u0027Delete\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 31
    }
  ],
  "location": "UserTestSteps.iVerifySystemUsersTextAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lisa.Andrews",
      "offset": 44
    }
  ],
  "location": "UserTestSteps.iEnterUsernameOnViewSystemUsersPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnUserRollDropdownOnViewUsersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lisa Andrews",
      "offset": 51
    }
  ],
  "location": "UserTestSteps.iEnterEmployeeNameOnViewSystemUsersPasAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnStatusDropdownOnViewUsersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lisa.Andrews",
      "offset": 19
    }
  ],
  "location": "UserTestSteps.iVerifyTheUserShouldInResultList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnDeleteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "User is on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify System users text as \"System Users\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterUsernameAs(String)"
});
formatter.result({
  "duration": 980801,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.orangehrmlive.cucumber.wk16.utility.Utility.sendTextToElement(Utility.java:74)\r\n\tat com.orangehrmlive.cucumber.wk16.pages.LoginPage.enterUsername(LoginPage.java:37)\r\n\tat com.orangehrmlive.cucumber.wk16.steps.LoginTestSteps.iEnterUsernameAs(LoginTestSteps.java:13)\r\n\tat ✽.And I enter username as \"Admin\"(users.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterPasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 31
    }
  ],
  "location": "UserTestSteps.iVerifySystemUsersTextAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 49,
      "value": "#Then    I click ok button on Popup"
    },
    {
      "line": 50,
      "value": "# And     I verify message of deleted record as \"Successfully Deleted\""
    }
  ],
  "line": 53,
  "name": "Search the deleted user and verify the message no record found",
  "description": "",
  "id": "users-page-functionality;search-the-deleted-user-and-verify-the-message-no-record-found",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I verify System users text as \"System Users\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I enter username on view system users page \"Lisa.Andrews\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click on \u0027Status dropdown\u0027 on view users page",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I verify the message of no records found \"No Records Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 31
    }
  ],
  "location": "UserTestSteps.iVerifySystemUsersTextAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lisa.Andrews",
      "offset": 44
    }
  ],
  "location": "UserTestSteps.iEnterUsernameOnViewSystemUsersPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnStatusDropdownOnViewUsersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No Records Found",
      "offset": 42
    }
  ],
  "location": "UserTestSteps.iVerifyTheMessageOfNoRecordsFound(String)"
});
formatter.result({
  "status": "skipped"
});
});