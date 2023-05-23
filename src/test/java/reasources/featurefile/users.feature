Feature: Users page functionality
  As a user I want to check users page functionality


  Background: User is on login page
    And       I enter username as "Admin"
    And       I enter password as "admin123"
    And       I click on 'Login' button
    And       I click on 'Admin' tab
    Then      I verify System users text as "System Users"


  @sanity @regression
  Scenario: Admin should be able to add user successfully
    When    I click on 'Add' button
    Then    I verify Add user text as "Add User"
    When    I click on 'User Roll Dropdown'
    And     I enter employee name as "Lisa Andrews"
    And     I click on 'Status dropdown'
    And     I enter username on add user page as "Lisa.Andrews"
    And     I enter password on add user page as "9081811670@Dv"
    And     I enter confirm password on add user page as "9081811670@Dv"
    And     I click on 'Save' button


  @smoke @regression
  Scenario: Search the user created and verify
    When    I enter username on view system users page "Lisa.Andrews"
    And     I click on 'User Roll Dropdown' on view users page
    And     I enter employee name on view system users pas as "Lisa Andrews"
    And     I click on 'Status dropdown' on view users page
    And     I click on 'Search' button
    Then    I verify the user "Lisa.Andrews" should in result list



  @regression
  Scenario: Verify that admin should delete the user successfully
    When    I click on 'Admin' tab
    Then    I verify System users text as "System Users"
    And     I enter username on view system users page "Lisa.Andrews"
    And     I click on 'User Roll Dropdown' on view users page
    And     I enter employee name on view system users pas as "Lisa Andrews"
    And     I click on 'Status dropdown' on view users page
    And     I click on 'Search' button
    Then    I verify the user "Lisa.Andrews" should in result list
    When    I click on checkbox
    And     I click on 'Delete' button
    #Then    I click ok button on Popup
   # And     I verify message of deleted record as "Successfully Deleted"

  @regression
  Scenario: Search the deleted user and verify the message no record found
    When    I click on 'Admin' tab
    Then    I verify System users text as "System Users"
    And     I enter username on view system users page "Lisa.Andrews"
    And     I click on 'Status dropdown' on view users page
    And     I click on 'Search' button
    Then    I verify the message of no records found "No Records Found"



