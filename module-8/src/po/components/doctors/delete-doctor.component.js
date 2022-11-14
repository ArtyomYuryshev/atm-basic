const BaseComponent = require('../common/base.component');

class DeleteDocModal extends BaseComponent {
  constructor() {
    super('ejs-dialog.e-popup-open');
  }

  get okBtn() {
    return this.rootEl.$('ejs-dialog.e-popup-open button.e-primary');
  }

  get cancelBtn() {
    return this.rootEl.$('ejs-dialog.e-popup-open button:nth-child(2)'); 
    // i don't see the way to don't use 'nth-child(2)'
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
