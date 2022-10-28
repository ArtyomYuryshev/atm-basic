describe('Module 3: WebdriverIO Introduction', () => {
  it('1st test: check page title', async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
    const pageTitle = await browser.getTitle();
    console.log(pageTitle);
    expect(pageTitle).toEqual('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('2nd test: check empty name validation', async () => {
    await (await $('//*[@class="sidebar-item doctors"]')).click();
    await (await $("//*[@class='specialization-types']//button[text()='Add New Doctor']")).click();
    await (await $("//*[@for='patientCheckFemale']")).click();
    const emailError = await $("//*[@id='Name-info']");
    expect(await emailError.getText()).toEqual('Enter valid name');
  });

  it('3rd test: check validation on Save', async () => {
    await (await $("//input[@name='Name']")).setValue('Lol Kek');
    await $("//*[text()='Save']").click();
    const emailError = await $("//*[@id='Email-info']");
    expect(await emailError.getText()).toEqual('Enter valid email');
  });

  it('4th test: close create doctor pop-up', async () => {
    const popUp = await $("body > div[style='z-index: 1000; display: flex; position: fixed;']");
    await expect(popUp).toExist();
    await (await $("div[class='button-container']>button[class='e-control e-btn e-lib e-normal']")).click();
    await await expect(popUp).not.toExist();
  });

  it('5th test: create a new doctor', async () => {
    await (await $('//*[@class="specialization-types"]//..//button["Add New Doctor"]')).click();
    await (await $("input[name='Name']")).setValue('Lol Kek');
    await (await $('input#DoctorMobile')).setValue('1234567890');
    await (await $("input[name='Email']")).setValue('Lol@Kek.com');
    await (await $("input[name='Education']")).setValue('brodyaga');
    await $("//*[@class='e-footer-content']//button[@class='e-control e-btn e-lib e-normal e-primary' and 'Save']").click();
    const newDoc = await $('#Specialist_8 .name');
    expect(await newDoc.getText()).toEqual('Dr. Lol Kek');
  });
});
