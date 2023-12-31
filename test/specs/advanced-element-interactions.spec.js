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

    it ('dropdown list', async () => {
        await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
        const programLanguage = await $('#dropdowm-menu-1');
        await programLanguage.selectByAttribute('value', 'python');
        await expect(programLanguage).toHaveValueContaining('python');
        await browser.pause('2000');

        const technology = await $('#dropdowm-menu-2');
        await technology.selectByIndex(2);
        await expect(technology).toHaveValueContaining('TestNG', {ignoreCase: true});
        await browser.pause('2000');

        const frontendLanguage = await $('#dropdowm-menu-3');
        await frontendLanguage.selectByVisibleText('CSS');
        await expect(frontendLanguage).toHaveValueContaining('CSS', {ignoreCase: true});
        await browser.pause('2000');
    });

    it ('state commands',  async () => {
        await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
        const lettuceRadiaButton = await $('[value="lettuce"]');
        const lettuceRadioButton_isDisplayed = await lettuceRadiaButton.isDisplayed();
        await expect(lettuceRadioButton_isDisplayed).toEqual(true);
        await expect(lettuceRadiaButton).toBeEnabled();

        const lettuceRadioButton_isClickable= await lettuceRadiaButton.isClickable();
        await expect(lettuceRadioButton_isClickable).toEqual(true);
        
        const cabbageRadiaButton = await $('[value="cabbage"]');
        const cabbageRadiaButton_isEnabled = await cabbageRadiaButton.isEnabled();
        await expect(cabbageRadiaButton_isEnabled).toEqual(false);
        await expect(cabbageRadiaButton).toBeDisabled();
    });

    it('actions', async () => {
        await browser.url("/Actions/index.html");
        const drag = await $('[id="draggable"]');
        const drop = await $('[id="droppable"]');
        await drag.dragAndDrop(drop);
        await browser.pause('2000');
    }
    )
});