$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testcase.feature");
formatter.feature({
  "line": 1,
  "name": "Test Login",
  "description": "",
  "id": "test-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login sucsess",
  "description": "",
  "id": "test-login;login-sucsess",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigate to page \"https://anotepad.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User input \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigate to main page success",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-login;login-sucsess;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 9,
      "id": "test-login;login-sucsess;;1"
    },
    {
      "cells": [
        "thanhhai.ng.333@gmail.com",
        "123456"
      ],
      "line": 10,
      "id": "test-login;login-sucsess;;2"
    },
    {
      "cells": [
        "blank",
        "blank"
      ],
      "line": 11,
      "id": "test-login;login-sucsess;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6084961500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login sucsess",
  "description": "",
  "id": "test-login;login-sucsess;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigate to page \"https://anotepad.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User input \"thanhhai.ng.333@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigate to main page success",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://anotepad.com/login",
      "offset": 23
    }
  ],
  "location": "LoginTC.user_navigate_to_page(String)"
});
formatter.result({
  "duration": 3325089000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thanhhai.ng.333@gmail.com",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 44
    }
  ],
  "location": "LoginTC.user_input_and(String,String)"
});
formatter.result({
  "duration": 2049539400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_navigate_to_main_page_success()"
});
formatter.result({
  "duration": 103290900,
  "status": "passed"
});
formatter.after({
  "duration": 160232300,
  "status": "passed"
});
formatter.before({
  "duration": 5475321600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login sucsess",
  "description": "",
  "id": "test-login;login-sucsess;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigate to page \"https://anotepad.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User input \"blank\" and \"blank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigate to main page success",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://anotepad.com/login",
      "offset": 23
    }
  ],
  "location": "LoginTC.user_navigate_to_page(String)"
});
formatter.result({
  "duration": 3117073000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blank",
      "offset": 12
    },
    {
      "val": "blank",
      "offset": 24
    }
  ],
  "location": "LoginTC.user_input_and(String,String)"
});
formatter.result({
  "duration": 1077887200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_navigate_to_main_page_success()"
});
formatter.result({
  "duration": 543721800,
  "status": "passed"
});
formatter.after({
  "duration": 4336946500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Login invalid",
  "description": "",
  "id": "test-login;login-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User navigate to page \"https://anotepad.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User input \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User stay in login page, not login success",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "test-login;login-invalid;",
  "rows": [
    {
      "cells": [
        "type",
        "Username",
        "Password"
      ],
      "line": 19,
      "id": "test-login;login-invalid;;1"
    },
    {
      "cells": [
        "pw blank, invalid username",
        "aaa",
        "blank"
      ],
      "line": 20,
      "id": "test-login;login-invalid;;2"
    },
    {
      "cells": [
        "username blank",
        "blank",
        "aaa"
      ],
      "line": 21,
      "id": "test-login;login-invalid;;3"
    },
    {
      "cells": [
        "pw blank, valid username",
        "aaa@gmail.com",
        "blank"
      ],
      "line": 22,
      "id": "test-login;login-invalid;;4"
    },
    {
      "cells": [
        "valid username, wrong pass",
        "thanhhai.ng.333@gmail.com",
        "11111"
      ],
      "line": 23,
      "id": "test-login;login-invalid;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5690111600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login invalid",
  "description": "",
  "id": "test-login;login-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User navigate to page \"https://anotepad.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User input \"aaa\" and \"blank\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User stay in login page, not login success",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://anotepad.com/login",
      "offset": 23
    }
  ],
  "location": "LoginTC.user_navigate_to_page(String)"
});
formatter.result({
  "duration": 3570720600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaa",
      "offset": 12
    },
    {
      "val": "blank",
      "offset": 22
    }
  ],
  "location": "LoginTC.user_input_and(String,String)"
});
formatter.result({
  "duration": 524488800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_stay_in_login_page_not_login_success()"
});
formatter.result({
  "duration": 24992500,
  "status": "passed"
});
formatter.after({
  "duration": 297385300,
  "status": "passed"
});
formatter.before({
  "duration": 5489117900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login invalid",
  "description": "",
  "id": "test-login;login-invalid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User navigate to page \"https://anotepad.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User input \"blank\" and \"aaa\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User stay in login page, not login success",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://anotepad.com/login",
      "offset": 23
    }
  ],
  "location": "LoginTC.user_navigate_to_page(String)"
});
formatter.result({
  "duration": 2957208000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blank",
      "offset": 12
    },
    {
      "val": "aaa",
      "offset": 24
    }
  ],
  "location": "LoginTC.user_input_and(String,String)"
});
formatter.result({
  "duration": 1244012800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_stay_in_login_page_not_login_success()"
});
formatter.result({
  "duration": 543924500,
  "status": "passed"
});
formatter.after({
  "duration": 4317337900,
  "status": "passed"
});
formatter.before({
  "duration": 5360749200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login invalid",
  "description": "",
  "id": "test-login;login-invalid;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User navigate to page \"https://anotepad.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User input \"aaa@gmail.com\" and \"blank\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User stay in login page, not login success",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://anotepad.com/login",
      "offset": 23
    }
  ],
  "location": "LoginTC.user_navigate_to_page(String)"
});
formatter.result({
  "duration": 3043648600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaa@gmail.com",
      "offset": 12
    },
    {
      "val": "blank",
      "offset": 32
    }
  ],
  "location": "LoginTC.user_input_and(String,String)"
});
formatter.result({
  "duration": 1394911500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_stay_in_login_page_not_login_success()"
});
formatter.result({
  "duration": 50049200,
  "status": "passed"
});
formatter.after({
  "duration": 4330501500,
  "status": "passed"
});
formatter.before({
  "duration": 5278540100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login invalid",
  "description": "",
  "id": "test-login;login-invalid;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User navigate to page \"https://anotepad.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User input \"thanhhai.ng.333@gmail.com\" and \"11111\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User stay in login page, not login success",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://anotepad.com/login",
      "offset": 23
    }
  ],
  "location": "LoginTC.user_navigate_to_page(String)"
});
formatter.result({
  "duration": 3045646200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thanhhai.ng.333@gmail.com",
      "offset": 12
    },
    {
      "val": "11111",
      "offset": 44
    }
  ],
  "location": "LoginTC.user_input_and(String,String)"
});
formatter.result({
  "duration": 1087181200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_stay_in_login_page_not_login_success()"
});
formatter.result({
  "duration": 492332800,
  "status": "passed"
});
formatter.after({
  "duration": 4081179100,
  "status": "passed"
});
formatter.before({
  "duration": 5341977500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Create and login with new account",
  "description": "",
  "id": "test-login;create-and-login-with-new-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User navigate to page \"https://anotepad.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User navigate to create account page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User create new account with generate username and default PW",
  "rows": [
    {
      "cells": [
        "Password"
      ],
      "line": 29
    },
    {
      "cells": [
        "12345"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User navigate back to login page",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Login with new create account",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User navigate to main page success",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://anotepad.com/login",
      "offset": 23
    }
  ],
  "location": "LoginTC.user_navigate_to_page(String)"
});
formatter.result({
  "duration": 2867819400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_navigate_to_create_account_page()"
});
formatter.result({
  "duration": 658909100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_create_new_account_with_generate_username_and_default_PW(DataTable)"
});
formatter.result({
  "duration": 3132604500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_navigate_back_to_login_page()"
});
formatter.result({
  "duration": 1104103300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.login_with_new_create_account()"
});
formatter.result({
  "duration": 1517304700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_navigate_to_main_page_success()"
});
formatter.result({
  "duration": 109905900,
  "status": "passed"
});
formatter.after({
  "duration": 4102168500,
  "status": "passed"
});
});