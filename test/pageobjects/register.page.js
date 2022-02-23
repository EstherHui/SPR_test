import Page from './page';

class RegisterPage extends Page {

    get UsernameTXB(){ return $('input[name = "username"]'); }
    get PasswordTXB(){ return $('input[name = "password"]'); }
    get TransactionPassTXB() { return $('input[name = "secondary_pin"]'); }
    get InvitationCodeTXB() { return $('input[name="referral_code"]'); }
    get FirstNameTXB() { return $('input[name="first_name"]'); }
    get LastNameTXB() { return $('input[name = "last_name"]'); }
    get MobileNum(){return $('input[name="mobile_no"]'); }
    get Email(){ return $('input[name="email"]'); }
    get SignUpBTN() { return $('button[type="submit"]'); }
    // get Country() { return $('#mui-component-select-country_code'); }
    
    open() {
        return super.open('register');
    }

    async inputUsername(username){
        await (await this.UsernameTXB).setValue(username);
        return this;
    }

    async inputPassword(password){

        await (await this.PasswordTXB).setValue(password);
        return this;
    }

    async inputTransactionPass(secondarypin){

        await (await this.TransactionPassTXB).setValue(secondarypin);
        return this;
    }

    async inputInvitationCode(inviteCode){

        await (await this.InvitationCodeTXB).setValue(inviteCode);
        return this;
    }

    async inputFirstName(firstName){

        await (await this.FirstNameTXB).setValue(firstName);
        return this;
    }

    async inputLastName(lastname){

        await (await this.LastNameTXB).setValue(lastname);
        return this;
    }

    async inputMobileNum(mobile){

        await (await this.MobileNum).setValue(mobile);
        return this;
    }

    async inputEmail(email){

        await (await this.Email).setValue(email);
        return this;
    }
    
    // async clickCountryList(country){
    //     await (await this.Country).click();

    //     //const countryChoose = (await $('ul')).$(..)）
    //     return this;
    // }

    async clickSignUpBTN(){
        await (await this.SignUpBTN).click();
        return this;
    }

    async verifyRegisterDisplay(){

        await (await this.UsernameTXB).isDisplayed();
        await (await this.PasswordTXB).isDisplayed();
        await (await this.TransactionPassTXB).isDisplayed();
        await (await this.InvitationCodeTXB).isDisplayed();
        await (await this.FirstNameTXB).isDisplayed();
        await (await this.PasswordTXB).isDisplayed();
        await (await this.LastNameTXB).isDisplayed();
        await (await this.MobileNum).isDisplayed();
        await (await this.SignUpBTN).isDisplayed();
        //await (await this.Country).isDisplayed();
       
        return this;
    }

 
}
export default new RegisterPage();