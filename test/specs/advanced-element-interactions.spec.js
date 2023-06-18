describe('advanced element interactions', () => {
    beforeEach(async function() {
        await browser.maximizeWindow();
    });
    
    it('inputs', async () => {
        await browser.url("/Contact-Us/contactus.html");
        const firstNameTextField = await $('//*[@name="first_name"]');
        await firstNameTextField.addValue("Add your text here");
        await firstNameTextField.addValue("My added text");
        await browser.pause(2000);

        await firstNameTextField.setValue("Hello how are you");
        await browser.pause(2000);

        await firstNameTextField.clearValue();
        await browser.pause(2000);

    });
});