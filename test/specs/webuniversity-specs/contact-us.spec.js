import ContactUsPage from "../../pageobjects/webdriver-university/contact-us.page"
describe('webdriveruniversity - contact page', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
        await ContactUsPage.open();
    });
    it('valid submission - submit all information', async() => {
        await ContactUsPage.submitForm('Vital', 'Petryh','Petryh@asd.dsf', 'Some message');
        await ContactUsPage.clickOnSubmitButton();
        await expect(ContactUsPage.succesfullSubmisionHeader).toHaveText('Thank You for your Message!');
    });

    it('invalid submission - dont submmit all info', async () => {
        await ContactUsPage.submitForm('Vital', 'Petryh','', 'Some message');
        await ContactUsPage.clickOnSubmitButton();
        await expect(ContactUsPage.unSuccesfullSubmisionHeader).toHaveTextContaining('Error: all fields are required');

    });
});