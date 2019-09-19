$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/AddTariffPlan.feature");
formatter.feature({
  "name": "AddTariffPlan",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@Third"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter all the data value.",
  "rows": [
    {
      "cells": [
        "2500",
        "100",
        "50",
        "40",
        "3",
        "2",
        "3"
      ]
    },
    {
      "cells": [
        "500",
        "50",
        "10",
        "4",
        "2",
        "1",
        "4"
      ]
    },
    {
      "cells": [
        "600",
        "70",
        "70",
        "10",
        "1",
        "3",
        "1"
      ]
    },
    {
      "cells": [
        "550",
        "10",
        "20",
        "20",
        "4",
        "6",
        "2"
      ]
    },
    {
      "cells": [
        "300",
        "30",
        "10",
        "50",
        "5",
        "1",
        "1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.user_enter_all_the_data_value(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed customer id is entered",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_displayed_customer_id_is_entered()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@Second"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter all the data values.",
  "rows": [
    {
      "cells": [
        "MothRen",
        "LO",
        "IM",
        "SMS",
        "LC",
        "IC",
        "SC"
      ]
    },
    {
      "cells": [
        "2500",
        "100",
        "50",
        "40",
        "3",
        "2",
        "3"
      ]
    },
    {
      "cells": [
        "500",
        "50",
        "10",
        "4",
        "2",
        "1",
        "4"
      ]
    },
    {
      "cells": [
        "600",
        "70",
        "70",
        "10",
        "1",
        "3",
        "1"
      ]
    },
    {
      "cells": [
        "550",
        "10",
        "20",
        "20",
        "4",
        "6",
        "2"
      ]
    },
    {
      "cells": [
        "300",
        "30",
        "10",
        "50",
        "5",
        "1",
        "1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.user_enter_all_the_data_values(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed customer id is entered",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_displayed_customer_id_is_entered()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@First"
    }
  ]
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.step({
  "name": "click add customer button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter all the data value of outline \"\u003cMothRen\u003e\",\"\u003cLO\u003e\",\"\u003cIM\u003e\",\"\u003cSMS\u003e\",\"\u003cLC\u003e\",\"\u003cIC\u003e\",\"\u003cSC\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "user should be displayed customer id is entered",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MothRen",
        "LO",
        "IM",
        "SMS",
        "LC",
        "IC",
        "SC"
      ]
    },
    {
      "cells": [
        "2500",
        "100",
        "50",
        "40",
        "3",
        "2",
        "3"
      ]
    },
    {
      "cells": [
        "500",
        "50",
        "10",
        "4",
        "2",
        "1",
        "4"
      ]
    },
    {
      "cells": [
        "600",
        "70",
        "70",
        "10",
        "1",
        "3",
        "1"
      ]
    },
    {
      "cells": [
        "300",
        "30",
        "10",
        "50",
        "5",
        "1",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@First"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter all the data value of outline \"2500\",\"100\",\"50\",\"40\",\"3\",\"2\",\"3\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.user_enter_all_the_data_value_of_outline(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed customer id is entered",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_displayed_customer_id_is_entered()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[text()\u003d\u0027Congratulation you add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64143}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5381442e2982afadf2c709ed3059fe00\n*** Element info: {Using\u003dxpath, value\u003d//h2[text()\u003d\u0027Congratulation you add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefinitions.AddTariffPlan.user_should_be_displayed_customer_id_is_entered(AddTariffPlan.java:82)\r\n\tat ✽.user should be displayed customer id is entered(src/test/resources/Feature/AddTariffPlan.feature:37)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@First"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_add_customer_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64211}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8cc9375908943ff2249a4bf271106a8c\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefinitions.AddTariffPlan.click_add_customer_button(AddTariffPlan.java:31)\r\n\tat ✽.click add customer button(src/test/resources/Feature/AddTariffPlan.feature:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter all the data value of outline \"500\",\"50\",\"10\",\"4\",\"2\",\"1\",\"4\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.user_enter_all_the_data_value_of_outline(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be displayed customer id is entered",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_displayed_customer_id_is_entered()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@First"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_add_customer_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64229}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 70361b886d3ff9d39d0c7520b86ac57c\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefinitions.AddTariffPlan.click_add_customer_button(AddTariffPlan.java:31)\r\n\tat ✽.click add customer button(src/test/resources/Feature/AddTariffPlan.feature:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter all the data value of outline \"600\",\"70\",\"70\",\"10\",\"1\",\"3\",\"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.user_enter_all_the_data_value_of_outline(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be displayed customer id is entered",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_displayed_customer_id_is_entered()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@First"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_add_customer_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64246}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 019957e073ce80842ab48596deeb5948\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefinitions.AddTariffPlan.click_add_customer_button(AddTariffPlan.java:31)\r\n\tat ✽.click add customer button(src/test/resources/Feature/AddTariffPlan.feature:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter all the data value of outline \"300\",\"30\",\"10\",\"50\",\"5\",\"1\",\"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.user_enter_all_the_data_value_of_outline(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be displayed customer id is entered",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.user_should_be_displayed_customer_id_is_entered()"
});
formatter.result({
  "status": "skipped"
});
});