const BaseComponent = require('../common/base.component');

class DeleteDocModal extends BaseComponent {
  constructor() {
    super('ejs-dialog.e-popup-open');
  }

  get okBtn() {
    return this.rootEl.$('button=Ok');
  }

  get cancelBtn() {
    return this.rootEl.$('button=Cancel');
  }

  /**
   * @param button {'ok' | 'cancel'}
   */
  async clickButton(button) {
    if (button.toLocaleLowerCase() === 'ok') {
      await this.okBtn.click();
    } else {
      await this.cancelBtn.click();
    }
  }
}

module.exports = DeleteDocModal;
