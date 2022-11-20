const { When } = require('@wdio/cucumber-framework');
const { page } = require('../po');

When('I open {string} page', function (pageName) {
  return page(pageName).open();
});

When('I click {string} link from the side menu', function (link) {
  return page('dashboard').sideMenu.item(link).click();
});

When('I click {string} new doctor button from list header', function (command) {
  return page('doctors').doctorListHeader.clickButton(command);
});

When('I click {string} button in modal window', function (button) {
  return page('doctors').addDoctorModal.clickButton(button);
});

When('I wait {int} seconds', function (timeToWaitInSeconds) {
  return browser.pause(timeToWaitInSeconds * 1000);
});

// When(/^I wait (\d+) seconds$/, function(timeToWaitInSeconds) {
//   return browser.pause(timeToWaitInSeconds * 1000);
// });

When('I enter {string} to {string} field', function (text, field) {
  return page('doctors').addDoctorModal.input(field).setValue(text);
});

When(/^I click on (\d+) doctor card name$/, function(id) {
  const newDoc = page('doctors').specialistCard(id).name;
  return newDoc.click();
});

// When('I click on {int} doctor card name', function (id) {
//   const newDoc = page('doctors').specialistCard(id).name;
//   return newDoc.click();
// });

When('I click on {string} button in doctor details tab', function (button) {
  return page('doctors').doctorDetails.button(button).click();
});

When('I click {string} button in delete confirmation pop-up', function (button) {
  return page('doctors').deleteDocModal.clickButton(button);
});
