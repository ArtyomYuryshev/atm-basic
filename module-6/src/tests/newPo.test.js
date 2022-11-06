const { page } = require('../po');

describe('Module 6: ', () => {

    it('1st test: create doctor validation', async () => {
        await page('dashboard').open();
        await page('dashboard').sideMenu.item('doctors').click();
        await page('doctors').doctorListHeader.addNewDoctorBtn.click();
        await expect(page('doctors').addDoctorModal.rootEl).toBeDisplayed();

        await page('doctors').addDoctorModal.input('name').setValue('John');
        await page('doctors').addDoctorModal.input('phone').setValue('7773334444');
        await page('doctors').addDoctorModal.input('email').setValue('John@Doe');
        await page('doctors').addDoctorModal.input('education').setValue('Vocational School of Welding');
        await page('doctors').addDoctorModal.saveBtn.click();

        await expect(page('doctors').addDoctorModal.rootEl).toExist();
        await expect(await (page('doctors').addDoctorModal.emailValidation).getText()).toEqual('Email address is invalid');
    });

    it('2nd test: create doctor', async () => {
        await page('doctors').addDoctorModal.input('name').addValue(' Ibrahimovich');
        await page('doctors').addDoctorModal.input('email').addValue('.com');
        await page('doctors').addDoctorModal.saveBtn.click();

        await expect(page('doctors').specialistCard(8).name).toHaveTextContaining('John Ibrahimovich');
        await expect(page('doctors').specialistCard(8).education).toHaveTextContaining('Vocational School of Welding', {
            ignoreCase: true,
        });
    });

    it('3rd test: check availability', async () => {
        await page('doctors').specialistCard(8).name.click();
        await expect(await page('doctors').doctorDetails.availability.getText()).toEqual('SUN,TUE,WED,THU,FRI - 12:00 PM - 9:00 PM', {
            ignoreCase: true,
        });
    });

    it('4th test: change availability', async () => {
        await page('doctors').doctorDetails.breakHoursDoctorBtn.click()

        await page('doctors').breakHoursModal.sundayBtn.click()
        await page('doctors').breakHoursModal.fridayBtn.click()
        await page('doctors').breakHoursModal.fridayBtn.click()
        await page('doctors').breakHoursModal.saveBtn.click()

        await expect(await page('doctors').doctorDetails.availability.getText()).toEqual('TUE,WED,THU - 12:00 PM - 9:00 PM', {
            ignoreCase: true,
        });
    });

    it('5th test: delete doctor', async () => {
        await page('doctors').doctorDetails.deleteDoctorBtn.click()
        await page('doctors').deleteDocModal.okBtn.click();

        await expect(await page('doctors').doctorDetails.docName.getText()).toEqual('Dr. Nembo Lukeni');
    });

});
