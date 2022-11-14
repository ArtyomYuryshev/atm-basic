const { When } = require('@wdio/cucumber-framework');
const { page } = require('../po');

When('I open {string} page', function (pageName) {
  return page(pageName).open();
});

When('I click {string} link from the side menu', function (link) {
  return page('dashboard').sideMenu.item(link).click();
});

When('I click add new doctor button from list header', function () {
  return page('doctors').doctorListHeader.addNewDoctorBtn.click();
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

When('I click on {string} doctor card name', function (id) {
  const newDoc = page('doctors').specialistCard(id).name;
  return newDoc.click();
});

When('I click on delete button in doctor details tab', function () {
  return page('doctors').doctorDetails.deleteDoctorBtn.click();
});

When('I click {string} button in delete confirmation pop-up', function (button) {
  return page('doctors').deleteDocModal.clickButton(button);
});
