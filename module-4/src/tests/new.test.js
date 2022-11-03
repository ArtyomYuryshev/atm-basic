describe('Module 4: Basic Commands examples', () => {
  it('1st test: check validation', async () => {
    const doctorsButton = await $("div[routerLink='/doctors']");
    const addNewDoctorButton = await $('.specialization-types button.e-control');
    const doctorNameInput = await $('#Name input');
    const doctorPhone = await $('input#DoctorMobile');
    const doctorEmail = await $("input[name='Email']");
    const doctorEducation = await $("input[name='Education']");
    const saveButton = await $(
      "//*[@style='z-index: 1000; display: flex; position: fixed;']//button[@class='e-control e-btn e-lib e-normal e-primary' and 'Save']",
    );
    const emailError = await $('#Email-info');

    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
    await doctorsButton.customClick();
    await addNewDoctorButton.customClick();
    await doctorNameInput.setValue('John');
    await doctorPhone.setValue('7773334444');
    await doctorEmail.setValue('John@Doe');
    await doctorEducation.setValue('Vocational School of Welding');
    await saveButton.customClick();
    expect(await emailError.getText()).toEqual('Email address is invalid');
  });

  it('2nd test: create doctor', async () => {
    const doctorNameInput = await $('#Name input');
    const doctorEmail = await $("input[name='Email']");
    const saveButton = await $(
      "//*[@style='z-index: 1000; display: flex; position: fixed;']//button[@class='e-control e-btn e-lib e-normal e-primary' and 'Save']",
    );
    const newDoc = await $('#Specialist_8 .name');

    await doctorNameInput.addValue(' Ibrahimovich');
    await doctorEmail.addValue('.com');
    await saveButton.customClick();
    expect(await newDoc.getText()).toEqual('Dr. John Ibrahimovich');
  });

  it('3rd test: check availability', async () => {
    const newDoc = await $('#Specialist_8 .name');
    const availability = await $('div.available-days');

    await newDoc.customClick();
    expect(await availability.getText()).toEqual('SUN,TUE,WED,THU,FRI - 12:00 PM - 9:00 PM');
  });

  it('4th test: change availability', async () => {
    const addBreakHours = await $('div[class="add-container"] button');
    const sundayButton = await $('#sunday_button');
    const fridayButton = await $('#friday_button');
    const saveButton = await $(
      "//*[@class='e-control e-dialog e-lib break-hour-dialog e-dlg-modal e-popup e-popup-open']//..//button[@class='e-control e-btn e-lib e-normal e-primary' and 'Save']",
    );
    const availability = await $('div.available-days');

    await addBreakHours.customClick();
    await sundayButton.customClick();
    await fridayButton.doubleClick();
    await saveButton.customClick();
    expect(await availability.getText()).toEqual('TUE,WED,THU - 12:00 PM - 9:00 PM');
  });

  it('5th test: delete doctor', async () => {
    const deleteButton = await $('//*[@class="e-control e-btn e-lib e-small delete-details" and "Delete"]');
    const deletePopup = await $('//*[@class="e-control e-dialog e-lib break-hour-dialog e-dlg-modal e-popup e-popup-open"]');
    const okButton = await $(
      '//*[@class="e-control e-dialog e-lib break-hour-dialog e-dlg-modal e-popup e-popup-open"]//*[@class="e-control e-btn e-lib e-normal e-primary"]',
    );
    const openedDoctor = await $('div[class="basic-detail info-field-container"] .name');

    await deleteButton.customClick();
    await expect(deletePopup).toExist();
    await okButton.customClick();
    expect(await openedDoctor.getText()).toEqual('Dr. Nembo Lukeni');
  });
});
