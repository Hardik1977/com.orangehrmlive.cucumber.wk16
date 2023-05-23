Feature: Login functionality
  As a user I want to check login functionality

  Background: User is on login page

  @sanity @regression
  Scenario: Verify user should login successfully
    When    I enter username as "Admin"
    And     I enter password as "admin123"
    And     I click on 'Login' button
    Then    I verify dashboard text as "Dashboard"

  @smoke @regression
  Scenario: Verify the logo displayed on login page
    Then    I verify the logo on login page

  @regression
  Scenario: Verify user should logout successfully
    When    I enter username as "Admin"
    And     I enter password as "admin123"
    And     I click on 'Login' button
    And     I click on 'User Profile Logo Dropdown' tab
    And     I mouse hover and click on 'Logout' link
    Then    I verify login panel text as "Login"
