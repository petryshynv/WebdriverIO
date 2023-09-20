describe('wait commands examples', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/Ajax-Loader/index.html');  
    });
    it('pause command', async () => {
        const click_me_button = await $('//*[text()="CLICK ME!"]/..');
        await browser.pause(6000);
        await click_me_button.click();
        await browser.pause(1500);
    });  
    it('waitforclickable', async () => {
        const click_me_button = await $("#button1");
        await click_me_button.waitForClickable();
        await click_me_button.click(); 
        await browser.pause(1500);
    });
    it('waitforDisplayed', async () => {
        const click_me_button = await $("#button1");
        await click_me_button.waitForDisplayed();
        await click_me_button.click();
        await browser.pause(1500);
    });
    it('waitforExist', async () => {
        const click_me_button = await $("#button1");
        await click_me_button.waitForExist();
        await browser.pause(1500);
    });
    it.only('waitUntil', async () => {
        await browser.url('/Accordion/index.html');
        const loadingStatus_Ui = $('#text-appear-box');
        await loadingStatus_Ui.waitUntil(async function(){
            return (await this.getText())==='LOADING COMPLETE.';
        },
        {
            timeout: 15000,
            timeoutMsg: 'expected text to be differnt after 15seconds'
        })
    });
});