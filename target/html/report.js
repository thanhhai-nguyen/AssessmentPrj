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
  "duration": 6230229600,
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
  "duration": 3333908000,
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
  "duration": 2369699200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_navigate_to_main_page_success()"
});
formatter.result({
  "duration": 138597200,
  "status": "passed"
});
formatter.after({
  "duration": 218798500,
  "status": "passed"
});
formatter.before({
  "duration": 5263656500,
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
  "duration": 3232822600,
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
  "duration": 740606600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTC.user_navigate_to_main_page_success()"
});
formatter.result({
  "duration": 682109800,
  "status": "passed"
});
formatter.after({
  "duration": 4162686000,
  "status": "passed"
});
});