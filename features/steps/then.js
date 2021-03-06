const { Then } = require('cucumber');
const checkAttribute = require('../support/check/checkAttribute');
const checkContainsText = require('../support/check/checkContainsText');
const checkElementEnabled = require('../support/check/checkElementEnabled');
const checkElementExists = require('../support/check/checkElementExists');
const checkElementVisible = require('../support/check/checkElementVisible');
const checkElementValue = require('../support/check/checkElementValue');
const checkIsEmpty = require('../support/check/checkIsEmpty');
const checkTitle = require('../support/check/checkTitle');
const checkUrl = require('../support/check/checkUrl');
const checkHasFocus = require("../support/check/checkHasFocus");
const checkIsChecked = require('../support/check/checkIsChecked');

Then(
    /^I expect that the title is "([^"]*)"$/, 
    checkTitle
);

Then(
    /^I expect the element "([^"]*)" is( not)? visible$/, 
    checkElementVisible
);

Then(
    /^I expect the element "([^"]*)?" value is( not)? "([^"]*)?"$/,
    checkElementValue
);

Then(
    /^I expect the element "([^"]*)"( does not)? contains? text "([^"]*)"$/, 
    checkContainsText
);

Then(
    /^I expect the page url is( not)? "([^"]*)?"$/,
    checkUrl
);

Then(
    /^I expect the attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkAttribute
);

Then(
    /^I expect the element "([^"]*)?" is( not)* on the page$/,
    checkElementExists
);

Then(
    /^I expect the element "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Then(
    /^I expect the element "([^"]*)?" is( not)* enabled$/,
    checkElementEnabled
);

Then(
    /^I expect the element "([^"]*)?" has( no)* focus$/,
    checkHasFocus
);

Then(
    /^I expect the element "([^"]*)?" is( not)* checked$/,
    checkIsChecked
);