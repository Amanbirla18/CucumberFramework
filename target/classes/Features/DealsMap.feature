Feature: Deal Data Creation

  Scenario: Creating a new deal with map
    Given user is on the login page
    When title of the login page is Free CRM
    Then user enters username and password
      | username    | password    |
      | amanbirla18 | testing@123 |
    Then user clicks on login button
    And user is on homepage
    Then user moves to new deal page
    Then user enter deal details
      | title      | amount | probability | commission |
      | test deal1 |   1000 |          50 |         50 |
      | test deal2 |   2000 |          60 |         60 |
      | test deal3 |   3000 |          70 |         70 |
    Then close the browser
