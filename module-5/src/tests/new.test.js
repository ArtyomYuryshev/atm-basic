describe('Module 5: ', () => {

    it('test1: execute()', async () => {
        await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
        const availabilityHeader = await $('.doctor-availability div.availability-title');
        await browser.execute(function (availabilityHeader) {
            availabilityHeader.style.color = '#de5285';
        }, availabilityHeader);
        await browser.pause(3000);

        const color = await availabilityHeader.getCSSProperty('color');
        expect(color.parsed.hex).toEqual('#de5285');
    });

    it('test2: waitUntil', async () => {
        await browser.url('/demos/#/bootstrap5/progress-bar/progress_segment.html');
        const result = await browser.waitUntil(async () => (await $('#point1').getText()) === '100%', {
            timeout: 25000,
            interval: 1000,
            timeoutMsg: 'not loaded',
        });
        expect(result).toEqual(true);
    });

    it('test3: browser action (hover to trigger a tooltip)', async () => {
        await browser.url('/showcase/angular/appointmentplanner/#/dashboard');

        const tooltip = await $("//*[@class='e-tooltip-wrap e-popup e-lib e-control e-popup-open']");
        const symptomsRow = await $("td[aria-label='Swelling or bruising over a bone, Pain in the injured area column header Symptoms']");

        await symptomsRow.moveTo();
        await browser.pause(3000);
        await expect(tooltip).toExist();
    });

    it('test4: add cookies', async () => {
        await browser.setCookies([
            {
                name: "azino",
                value: "777"
            }
        ]);

        const newCookies = await browser.getCookies();
        const checkNewCookie = newCookies.find(item => item.name === 'azino')
        await expect(checkNewCookie.name).toEqual("azino")
    });

});
