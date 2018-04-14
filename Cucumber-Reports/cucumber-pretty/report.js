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
  "duration": 8344949201,
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
  "duration": 8247142611,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 11716276,
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
  "duration": 316393230,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 9178438125,
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
  "duration": 348423978,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 6286085,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 2703759534,
  "status": "passed"
});
formatter.before({
  "duration": 6027395010,
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
  "duration": 6056759515,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 12767585,
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
  "duration": 234888734,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 6584644339,
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
  "duration": 84434846,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 4101123,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 1234943347,
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
  "duration": 4662910005,
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
  "duration": 3839284343,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 9698995,
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
  "duration": 253409070,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 5727874327,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 7117659,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 661702111,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.verify_contacts_page_is_displayed()"
});
formatter.result({
  "duration": 1308633437,
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
  "duration": 1788402166,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_clicks_on_contacts_tab()"
});
formatter.result({
  "duration": 3131635739,
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
  "duration": 48739881,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 1215634530,
  "status": "passed"
});
formatter.before({
  "duration": 5200435371,
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
  "duration": 3421290599,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 9594035,
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
  "duration": 220439655,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 5476660460,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 10203315,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 266128014,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.verify_contacts_page_is_displayed()"
});
formatter.result({
  "duration": 885547849,
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
  "duration": 1392222628,
  "status": "passed"
});
formatter.match({
  "location": "MultipleContactsCreationTest.user_clicks_on_contacts_tab()"
});
formatter.result({
  "duration": 3130178245,
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
  "duration": 39153954,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 1092254799,
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
  "duration": 4466015117,
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
  "duration": 3039258060,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_page_is_displayed()"
});
formatter.result({
  "duration": 7601926,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 223504830,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.User_click_on_login_button()"
});
formatter.result({
  "duration": 2839737463,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.validate_home_page_title()"
});
formatter.result({
  "duration": 6197766,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.user_switches_and_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 284774217,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.verify_deals_page_is_displayed()"
});
formatter.result({
  "duration": 1366072206,
  "status": "passed"
});
formatter.match({
  "location": "MultipleDealsMapObjStepdef.user_enters_deal_details_validate_created_user(DataTable)"
});
formatter.result({
  "duration": 14097097043,
  "status": "passed"
});
formatter.write("Finished Scenario...");
formatter.after({
  "duration": 1027622424,
  "status": "passed"
});
});