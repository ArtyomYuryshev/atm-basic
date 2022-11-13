const BaseComponent = require('../common/base.component');

class DeleteDocModal extends BaseComponent {
  constructor() {
    super('ejs-dialog.e-popup-open');
  }

  get okBtn() {
    return this.rootEl.$('ejs-dialog.e-popup-open button.e-primary');
  }
}

module.exports = DeleteDocModal;
