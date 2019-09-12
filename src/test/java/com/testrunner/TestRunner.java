package com.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/resources/Feature/"
,glue="com.stepdefinitions",plugin="html:target"
)
public class TestRunner {
	
}
