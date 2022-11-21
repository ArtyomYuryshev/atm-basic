const BaseComponent = require('../common/base.component');

class ListHeaderComponent extends BaseComponent {
  constructor() {
    super('.specialization-types');
  }

  get addNewDoctorBtn() {
    return this.rootEl.$('button.e-control');
  }

  /**
   * @param button {'ok' | 'cancel'}
   */
  // eslint-disable-next-line consistent-return
  async clickButton(button) {
    if (button.toLocaleLowerCase() === 'add') {
      await this.addNewDoctorBtn.click();
    } else {
      return console.log('Provided invalid argument');
    }
  }
}

module.exports = ListHeaderComponent;
