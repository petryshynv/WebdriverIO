import BasePage from "./base.page";

class ContactUsPage extends BasePage {
    open (){
        return super.open('Contact-Us/contactus.html');
    }

    get inputFirstName () {
        return $('//*[@name="first_name"]');
    }

    get inputLastName () {
        return $('//*[@name="last_name"]');
    }

    get inputEmailAdress () {
        return $('//*[@name="email"]');
    }

    get inputMessage () {
        return $('//*[@name="message"]');
    }

    get submitButton () {
        return $('//input[@value="SUBMIT"]');
    }

    get succesfullSubmisionHeader () {
        return  $('#contact_reply>h1');
    }

    get unSuccesfullSubmisionHeader () {
        return  $('//body');
    }

    async submitForm(firstName, lastName, emailAdress, message) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmailAdress.setValue(emailAdress);
        await this.inputMessage.setValue(message);
    }
    async clickOnSubmitButton(){
        await this.submitButton.click();
    }

}
export default new ContactUsPage();