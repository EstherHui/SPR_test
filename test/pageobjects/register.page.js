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

    get Country() { return $('#mui-component-select-country_code'); }    
    get CountryParent() { return $('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"]');  }
    get CountrySelect() { return $("//div[@id='menu-country_code']//ul[@role='listbox']/li[3]//span[.='China']"); }
    //get CountrySelect() { return $('#menu-country_code > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation0.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-gc7yjw > ul > li:nth-child(3)')}
    get MobileCode(){ return $('#root > div > div.MuiBox-root.css-oa138a > div > div > div > form > div > div:nth-child(9) > div > div > div > div')}

    // get CountryChild() {

    //     return this.CountryParent.$$('li');
    // }


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

    async selectCountry(){

        await (await this.Country).click();
        await (await this.CountrySelect).click();
        //const select = await this.CountryParent;
        // await (await this.CountryParent).selectByVisibleText('China');
        return this;

    }

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