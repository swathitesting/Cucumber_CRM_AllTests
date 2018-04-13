$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginAndLogout.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Validate Free CRM Login test using examples",
  "description": "",
  "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@login2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters username as \"\u003cuserName\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "login should be \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "expectedResult"
      ],
      "line": 23,
      "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;;1"
    },
    {
      "cells": [
        "swathitesting81",
        "testing123",
        "success"
      ],
      "line": 24,
      "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;;2"
    },
    {
      "cells": [
        "swathi123testing",
        "testing123",
        "success"
      ],
      "line": 25,
      "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3827328279,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate Free CRM Login test using examples",
  "description": "",
  "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@login2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters username as \"swathitesting81\" and password as \"testing123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "login should be \"success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.User_navigates_to_the_Free_CRM_url_on_the_opened_browser()"
});
formatter.result({
  "duration": 2883864647,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 12133557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swathitesting81",
      "offset": 25
    },
    {
      "val": "testing123",
      "offset": 59
    }
  ],
  "location": "LoginTest.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 242225700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 5649225940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LoginTest.login_should_be(String)"
});
formatter.result({
  "duration": 91124558,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 7447046,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 931505435,
  "status": "passed"
});
formatter.before({
  "duration": 3616760419,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate Free CRM Login test using examples",
  "description": "",
  "id": "free-crm-login-feature;validate-free-crm-login-test-using-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@login2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters username as \"swathi123testing\" and password as \"testing123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "login should be \"success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.User_navigates_to_the_Free_CRM_url_on_the_opened_browser()"
});
formatter.result({
  "duration": 2575146304,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 38883447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swathi123testing",
      "offset": 25
    },
    {
      "val": "testing123",
      "offset": 60
    }
  ],
  "location": "LoginTest.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 214873356,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 5055107887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LoginTest.login_should_be(String)"
});
formatter.result({
  "duration": 81614577,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 5421658,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 1132502726,
  "status": "passed"
});
formatter.uri("MultipleContactsFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Creting contacts feature",
  "description": "",
  "id": "creting-contacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Creating multiple contacts",
  "description": "",
  "id": "creting-contacts-feature;creating-multiple-contacts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@contacts"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"\u003cuserName\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User switches and moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify contacts page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on contacts tab",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify the new created contact \"\u003cfirstName\u003e\" under contacts",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "creting-contacts-feature;creating-multiple-contacts;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "firstName",
        "lastName",
        "position"
      ],
      "line": 17,
      "id": "creting-contacts-feature;creating-multiple-contacts;;1"
    },
    {
      "cells": [
        "swathi123testing",
        "testing123",
        "Danniel",
        "Josh",
        "Manager"
      ],
      "line": 18,
      "id": "creting-contacts-feature;creating-multiple-contacts;;2"
    },
    {
      "cells": [
        "swathi123testing",
        "testing123",
        "Henry",
        "Peter",
        "Director"
      ],
      "line": 19,
      "id": "creting-contacts-feature;creating-multiple-contacts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3574640277,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Creating multiple contacts",
  "description": "",
  "id": "creting-contacts-feature;creating-multiple-contacts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@contacts"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"swathi123testing\" and password as \"testing123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User switches and moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify contacts page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"Danniel\" and \"Josh\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on contacts tab",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify the new created contact \"Danniel\" under contacts",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.User_navigates_to_the_Free_CRM_url_on_the_opened_browser()"
});
formatter.result({
  "duration": 2670161212,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 36636191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swathi123testing",
      "offset": 25
    },
    {
      "val": "testing123",
      "offset": 60
    }
  ],
  "location": "LoginTest.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 236118814,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 2598771711,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 10289502,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 406009093,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.verify_contacts_page_is_displayed()"
});
formatter.result({
  "duration": 758178354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danniel",
      "offset": 13
    },
    {
      "val": "Josh",
      "offset": 27
    },
    {
      "val": "Manager",
      "offset": 38
    }
  ],
  "location": "MultipleContactsCreationTest.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 1500933974,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_clicks_on_contacts_tab()"
});
formatter.result({
  "duration": 3130193177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danniel",
      "offset": 32
    }
  ],
  "location": "MultipleContactsCreationTest.verify_the_new_created_contact_under_contacts(String)"
});
formatter.result({
  "duration": 46264359,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 1299960576,
  "status": "passed"
});
formatter.before({
  "duration": 4946216061,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Creating multiple contacts",
  "description": "",
  "id": "creting-contacts-feature;creating-multiple-contacts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@contacts"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"swathi123testing\" and password as \"testing123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User switches and moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify contacts page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters \"Henry\" and \"Peter\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on contacts tab",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify the new created contact \"Henry\" under contacts",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.User_navigates_to_the_Free_CRM_url_on_the_opened_browser()"
});
formatter.result({
  "duration": 2493858129,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 37665739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swathi123testing",
      "offset": 25
    },
    {
      "val": "testing123",
      "offset": 60
    }
  ],
  "location": "LoginTest.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 221347176,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 2163033312,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 9774088,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 391538680,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.verify_contacts_page_is_displayed()"
});
formatter.result({
  "duration": 868553275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henry",
      "offset": 13
    },
    {
      "val": "Peter",
      "offset": 25
    },
    {
      "val": "Director",
      "offset": 37
    }
  ],
  "location": "MultipleContactsCreationTest.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 1392738895,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_clicks_on_contacts_tab()"
});
formatter.result({
  "duration": 3128242456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henry",
      "offset": 32
    }
  ],
  "location": "MultipleContactsCreationTest.verify_the_new_created_contact_under_contacts(String)"
});
formatter.result({
  "duration": 42600143,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 883578780,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Validate error message for not entering FirstName",
  "description": "",
  "id": "creting-contacts-feature;validate-error-message-for-not-entering-firstname",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@negative1"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enters username as \"\u003cuserName\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User switches and moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Verify contacts page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User enters only \"\u003clastName\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User should get error message to enter firstname",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "creting-contacts-feature;validate-error-message-for-not-entering-firstname;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "lastName",
        "position"
      ],
      "line": 34,
      "id": "creting-contacts-feature;validate-error-message-for-not-entering-firstname;;1"
    },
    {
      "cells": [
        "swathi123testing",
        "testing123",
        "Sam",
        "TechEngineer"
      ],
      "line": 35,
      "id": "creting-contacts-feature;validate-error-message-for-not-entering-firstname;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4685429491,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Validate error message for not entering FirstName",
  "description": "",
  "id": "creting-contacts-feature;validate-error-message-for-not-entering-firstname;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@negative1"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enters username as \"swathi123testing\" and password as \"testing123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User switches and moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Verify contacts page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User enters only \"Sam\" and \"TechEngineer\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User should get error message to enter firstname",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.User_navigates_to_the_Free_CRM_url_on_the_opened_browser()"
});
formatter.result({
  "duration": 2207774897,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 5929391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swathi123testing",
      "offset": 25
    },
    {
      "val": "testing123",
      "offset": 60
    }
  ],
  "location": "LoginTest.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 228460995,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 4570795580,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 5306031,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 413581580,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.verify_contacts_page_is_displayed()"
});
formatter.result({
  "duration": 781793521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sam",
      "offset": 18
    },
    {
      "val": "TechEngineer",
      "offset": 28
    }
  ],
  "location": "MultipleContactsCreationTest.user_enters_only_and(String,String)"
});
formatter.result({
  "duration": 654918533,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_gets_error_message_to_enter_firstname()"
});
formatter.result({
  "duration": 34024990,
  "error_message": "java.lang.AssertionError: Expected Error Message and actual message not matching\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat stepDefinitions.MultipleContactsCreationTest.user_gets_error_message_to_enter_firstname(MultipleContactsCreationTest.java:70)\r\n\tat ✽.Then User should get error message to enter firstname(MultipleContactsFeature.feature:31)\r\n",
  "status": "failed"
});
formatter.write("Finished Scenario...");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1739575245,
  "status": "passed"
});
formatter.uri("MultipleDealsCreation.feature");
formatter.feature({
  "line": 1,
  "name": "Creation of deals in CRM",
  "description": "",
  "id": "creation-of-deals-in-crm",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3858403720,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Multiple deals creation using datatable",
  "description": "",
  "id": "creation-of-deals-in-crm;multiple-deals-creation-using-datatable",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@deals"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to the Free CRM url on the opened browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "swathi123testing",
        "testing123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User switches and moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify deals page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters deal details and validate created user",
  "rows": [
    {
      "cells": [
        "tit",
        "amt",
        "probabile",
        "comm"
      ],
      "line": 15
    },
    {
      "cells": [
        "testdeal1",
        "8000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "testdeal2",
        "9000",
        "30",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "testdeal3",
        "1000",
        "40",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.User_navigates_to_the_Free_CRM_url_on_the_opened_browser()"
});
formatter.result({
  "duration": 2515918093,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 29379439,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 234024733,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 3899251967,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 8620381,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.user_switches_and_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 386638837,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.verify_deals_page_is_displayed()"
});
formatter.result({
  "duration": 983685959,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.user_enters_deal_details_validate_created_user(DataTable)"
});
formatter.result({
  "duration": 13348514857,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 907488347,
  "status": "passed"
});
});