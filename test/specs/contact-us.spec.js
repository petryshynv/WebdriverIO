describe('webdriveruniversity - contact page', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
    });
    it('valid submission - submit all information', async() => {
        await browser.url('/Contact-Us/contactus.html');
        const firstName = await $('//*[@name="first_name"]');
        const lastName = await $('//*[@name="last_name"]');
        const emailAdress = await $('//*[@name="email"]');
        const message = await $('//*[@name="message"]');
        const submitButton = await $('//input[@value="SUBMIT"]');

        await firstName.setValue('Vital');
        await lastName.setValue('Petryh');
        await emailAdress.setValue('Petryh@asd.dsf');
        await message.setValue('Some message');
        await submitButton.click();
        
        const succesfullSubmisionHeader = await $('#contact_reply>h1');
        await expect(succesfullSubmisionHeader).toHaveText('Thank You for your Message!');

        await browser.pause(5000);
    });

    it('invalid submission - dont submmit all info', () => {
             //first name
        //last  name
        //message
        //submit button
    });
});