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
    }
  ]
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
    }
  ]
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
    }
  ]
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
  "status": "passed"
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
    }
  ]
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
  "name": "User enter all the data value of outline \"500\",\"50\",\"10\",\"4\",\"2\",\"1\",\"4\"",
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
  "status": "passed"
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
    }
  ]
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
  "name": "User enter all the data value of outline \"600\",\"70\",\"70\",\"10\",\"1\",\"3\",\"1\"",
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
  "status": "passed"
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
    }
  ]
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
  "name": "User enter all the data value of outline \"300\",\"30\",\"10\",\"50\",\"5\",\"1\",\"1\"",
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
  "status": "passed"
});
});