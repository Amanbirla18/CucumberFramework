$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "# Without Examples Keyword"
    },
    {
      "line": 6,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 7,
      "value": "#Given user is on the login page"
    },
    {
      "line": 8,
      "value": "#When title of the login page is Free CRM"
    },
    {
      "line": 9,
      "value": "#Then user enters \"amanbirla18\"  and \"testing@123\""
    },
    {
      "line": 10,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 11,
      "value": "#And user is on homepage"
    }
  ],
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of the login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"\u003cusername\u003e\"  and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "amanbirla18",
        "testing@123"
      ],
      "line": 24,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "username1",
        "password1"
      ],
      "line": 25,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    },
    {
      "cells": [
        "username2",
        "password2"
      ],
      "line": 26,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of the login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"amanbirla18\"  and \"testing@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 6735647591,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 44485695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amanbirla18",
      "offset": 13
    },
    {
      "val": "testing@123",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 300577635,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8871360778,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 17739571,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 106739520,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of the login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"username1\"  and \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 4001356069,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 36856631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 13
    },
    {
      "val": "password1",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 240256399,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 472062240,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 15236710,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[Free CRM software in the cloud powers sales and customer service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDefinition.user_is_on_homepage(LoginStepDefinition.java:57)\r\n\tat ✽.And user is on homepage(Login.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of the login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"username2\"  and \"password2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 4105396391,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 56036608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username2",
      "offset": 13
    },
    {
      "val": "password2",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 263890568,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 511486434,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 15433047,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[Free CRM software in the cloud powers sales and customer service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDefinition.user_is_on_homepage(LoginStepDefinition.java:57)\r\n\tat ✽.And user is on homepage(Login.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});