const BaseComponent = require('../common/base.component');

class DoctorDetails extends BaseComponent {
  constructor() {
    super('.doctor-details-container');
  }

  get availability() {
    return this.rootEl.$('div.available-days');
  }

  get breakHoursDoctorBtn() {
    return this.rootEl.$('div[class="add-container"] button');
  }

  get breakHoursBtn() {
    return this.rootEl.$('div.add-container');
  }

  get deleteDoctorBtn() {
    return this.rootEl.$('//*[@cssclass="e-small delete-details" and "Delete"]');
  }

  get docName() {
    return this.rootEl.$('div[class=name]');
  }
}

module.exports = DoctorDetails;
