const BaseComponent = require('../common/base.component');

class BreakHoursModal extends BaseComponent {
  constructor() {
    super("//*[@class='e-control e-dialog e-lib break-hour-dialog e-dlg-modal e-popup e-popup-open']");
  }

  get saveBtn() {
    return this.rootEl.$('.e-popup-open .button-container button.e-primary');
  }

  get sundayBtn() {
    return this.rootEl.$('#sunday_button');
  }

  get fridayBtn() {
    return this.rootEl.$('#friday_button');
  }
}

module.exports = BreakHoursModal;
