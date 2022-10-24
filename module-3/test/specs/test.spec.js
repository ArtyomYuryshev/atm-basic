describe('Module 3: WebdriverIO Introduction', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('1st test: check page title', async () => {
    const pageTitle = await browser.getTitle();
    console.log(pageTitle);
    expect(pageTitle).toEqual('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('2nd test: check empty name validation', async () => {
    await $('div.doctors').click();
    await $("//*[text()='Add New Doctor']").click();
    await $("//*[@class='e-btn' and text()='Female']").click();
    const emailError = await $('#Name-info');
    expect(await emailError.getText()).toEqual('Enter valid name');
  });

  it('3rd test: check validation', async () => {
    await $('div.doctors').click();
    await $("//*[text()='Add New Doctor']").click();
    await $("//input[@name='Name']").setValue('Lol Kek');
    await $("//*[text()='Save']").click();
    const emailError = await $("//*[@id='Email-info']");
    expect(await emailError.getText()).toEqual('Enter valid email');
  });

  it('4th test: close New Doctor tab', async () => {
    await $('div.doctors').click();
    await $('div.specialization-types>button').click();
    await $("div[class='button-container']>button:nth-child(1)").click();
    const popUp = await $("ejs-dialog[cssclass='new-doctor-dialog']");
    expect(await popUp.isDisplayed(false));
    expect(await popUp.isExisting(true));
  });

  it('5th test: open edit Doctor pop-up', async () => {
    await $('div.doctors').click();
    await $('div#Specialist_1').click();
    await $('div.doctor-detail>button:nth-child(2)').click();
    const popUpTitle = await $('div:nth-child(16)>ejs-dialog  div#_title');
    expect(await popUpTitle.getText()).toEqual('Edit Doctor');
  });
});
