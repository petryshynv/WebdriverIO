import HomePage from "../../pageobjects/automation-store/home.page";
import ScainCarePage from "../../pageobjects/automation-store/skincare.page";

describe("add item to basket", () => {
    beforeEach(async function () {
        await browser.maximizeWindow();
    });

    it("add specific skincare product to basket and validate cart total", async () => {
        await HomePage.open();
        (await HomePage.categoryMenuComponent.categoryMenuLink("Skincare")[1]).click();
    })
});