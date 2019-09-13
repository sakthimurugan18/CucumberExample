package com.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/resources/Feature/"
,glue="com.stepdefinitions",
plugin= {"pretty","html:target"},
dryRun=false,
strict=false,
monochrome=true,
tags={"@regression"}
)
public class TestRunner {
	
}
