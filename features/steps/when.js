const { When } = require('cucumber');
const clickElement = require('../support/action/clickElement');
const openUrl = require('../support/action/openUrl');
const setElementValue = require('../support/action/setElementValue');

When(
    /^I open the url "([^"]*)?"$/, 
    openUrl
);

When(
    /^I click the (?:element|button|link) "([^"]*)?"$/, 
    clickElement
);

When(
    /^I set the (?:element|input|select|textarea) "([^"]*)?" value to "([^"]*)?"$/, 
    setElementValue
);