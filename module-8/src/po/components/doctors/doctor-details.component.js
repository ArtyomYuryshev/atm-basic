const BaseComponent = require('../common/base.component');

class DoctorDetails extends BaseComponent {
  constructor() {
    super('.doctor-details-container');
  }

  get docName() {
    return this.rootEl.$('div[class=name]');
  }

  // get deleteDoctorBtn() {
  //   return this.rootEl.$('//*[@cssclass="e-small delete-details" and "Delete"]');
  // }

    /**
   * @param name {'delete' | 'edit'}
   */
    button(name) {
      const selectors = {
        delete: '//*[@cssclass="e-small delete-details" and "Delete"]',
        edit: '//*[@cssclass="e-small edit-details" and "Edit"]'
      };
  
      return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}

module.exports = DoctorDetails;
