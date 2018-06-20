Feature:  Free CRM Login Feature
Scenario: Free CRM Login Test Scenario


# Without Examples Keyword
#Scenario: Free CRM Login Test Scenario
#Given user is on the login page
#When title of the login page is Free CRM
#Then user enters "amanbirla18"  and "testing@123"
#Then user clicks on login button
#And user is on homepage


Scenario Outline: Free CRM Login Test Scenario
Given user is on the login page
When title of the login page is Free CRM
Then user enters "<username>"  and "<password>"
Then user clicks on login button
And user is on homepage
Then close the browser

Examples: 
 		| username | password |
 		| amanbirla18 | testing@123 |
 		| username1 | password1 |
 		| username2 | password2 |
 		 		