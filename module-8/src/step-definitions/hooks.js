const { After } = require("@wdio/cucumber-framework");

// eslint-disable-next-line arrow-body-style
After({ name: 'console log', tags: '@addDoctor' }, () => {
    return console.log("AFTER TEST GET COOKIES" + browser.getCookies());
});