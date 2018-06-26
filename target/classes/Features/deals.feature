Feature: Deal Data Creation

Scenario: Creating a new deal

Given user is on the login page
When title of the login page is Free CRM
Then user enters username and password
| amanbirla18 | testing@123 |
Then user clicks on login button
And user is on homepage
Then user moves to new deal page
Then user enter deal details
| test deal | 1000 | 50 | 50 |
Then close the browser