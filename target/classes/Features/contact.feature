Feature:  Free CRM New Contact Feature
Scenario: Free CRM New Contact Test Scenario

Scenario Outline: Free CRM Login Test Scenario
Given user is on the login page
When title of the login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
And user is on homepage
Then user moves to new contact page
Then user enters contact details "<title>" and "<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples: 
 		| username | password | 	title | firstname | lastname | position |
 		| amanbirla18 | testing@123 | Mr. | Aman | Birla1 | QA1 |
 		| amanbirla18 | testing@123 | Mr. | Aman | Birla2 | QA2 |
 		| amanbirla18 | testing@123 | Mr. | Aman | Birla3 | QA3 |