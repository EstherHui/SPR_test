import Page from './page';

class ProfilePage extends Page{

    get UsernamePro(){ return $('[class="MuiTypography-root MuiTypography-body1 css-yn1ps6"]');   }
    get FirstName(){ return $('input[name="first_name"]');  }
    get LastName(){ return $('input[name="last_name"]');  }
    get Email(){ return $('input[name="email"]'); }
    get Country(){ return $('#mui-component-select-country_code'); }
    get Mobile(){ return $('input[name="mobile_no"]'); }
    get ReferralID(){ return $('input[name="referral_code"]'); }
    get ReferralTree(){ return $('[class="MuiTreeItem-label"]'); }
    get UpdateBTN(){ return $('button[type="submit"]'); }
    get ChangePasswordBTN(){ return $('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1kx2vbf"]'); }
    get ChangeSecondaryPassBTN(){ return $('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1kx2vbf"]'); }
    get SignOutBtn(){ return $('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1qqmpvb"]');   }
    get ProfileBTN(){ return $('[class="MuiBox-root css-34k09d"]');    }
    get TradingPass01(){ return $('input[aria-label="Please enter verification code. Digit 1"]'); }
    get TradingPass02(){ return $('input[aria-label="Digit 2"]'); }
    get TradingPass03(){ return $('input[aria-label="Digit 3"]'); }
    get TradingPass04(){ return $('input[aria-label="Digit 4"]'); }
    get TradingPass05(){ return $('input[aria-label="Digit 5"]'); }
    get TradingPass06(){ return $('input[aria-label="Digit 6"]'); }


    get UsernameTXB() {
        return $('input[name="username"]');
    }

    get PasswordTXB() {
        return $('input[name="password"]');
    }

    get LoginBTN() {
        return $('button[type="submit"]');
    }
   
    async inputUsername(username){
        await (await this.UsernameTXB).setValue(username);
        return this;
    }

    async inputPassword(password){

        await (await this.PasswordTXB).setValue(password);
        return this;
    }

    async clickLoginBtn(){
        await (await this.LoginBTN).click();
        return this;
    }

    async clickProfileBTN(){
        await(await (this.ProfileBTN)).click();
        return this;
    }

    async inputTradingPass01(secondary01){
        await (await (this.TradingPass01)).setValue(secondary01);
        return this;
    }

    async inputTradingPass02(secondary02){
        await (await (this.TradingPass02)).setValue(secondary02);
        return this;
    }

    async inputTradingPass03(secondary03){
        await (await (this.TradingPass03)).setValue(secondary03);
        return this;
    }

    async inputTradingPass04(secondary04){
        await (await (this.TradingPass04)).setValue(secondary04);
        return this;
    }

    async inputTradingPass05(secondary05){
        await (await (this.TradingPass05)).setValue(secondary05);
        return this;
    }

    async inputTradingPass06(secondary06){
        await (await (this.TradingPass06)).setValue(secondary06);
        return this;
    }

    async inputMobile(newMobile){
        await(await (this.Mobile)).setValue(newMobile);
        return this;
    }

    async clickMobile(){
        await (await this.Mobile).click();
        return this;
    }

    async doubleClickMobile(){
        await (await this.Mobile).doubleClick();
        return this;
    }

    async clickUpdateBTN(){
        await (await this.UpdateBTN).click();
        return this;
    }
    
    async VerifyProfile(){

        await expect (await (this.UsernamePro)).toBeDisplayed();
        await expect (await (this.FirstName)).toBeDisplayed();
        await expect (await (this.LastName)).toBeDisplayed();
        await expect (await (this.Email)).toBeDisplayed();
        await expect (await (this.Country)).toBeDisplayed();
        await expect (await (this.Mobile)).toBeDisplayed();
        await expect (await (this.ReferralID)).toBeDisplayed();
        await expect (await (this.ReferralTree)).toBeDisplayed();
        await expect (await (this.UpdateBTN)).toBeDisplayed();
        await expect (await (this.ChangePasswordBTN)).toBeDisplayed();
        await expect (await (this.ChangeSecondaryPassBTN)).toBeDisplayed();
        await expect (await (this.SignOutBtn)).toBeDisplayed();

        return this;
    }

    get CurrentPassword(){ return $('input[name="current_password"]'); }
    get NewPassTXB(){ return $('input[name="password"]');  }
    get ConfirmPassword(){ return $('input[name="confirm_password"]'); }
    get ChangeSubmitBTN(){ return $('[class="MuiButtonBase-root css-j6xqws"]');  }

    async clickChangeLoginPass(){
        await(await (this.ChangePasswordBTN)).click();
        return this;
    }

    async clickChangeSubmitBTN(){
        await (await this.ChangeSubmitBTN).click();
        return this;
    }

    async inputCurrentPass(currentpassword){
        await (await this.CurrentPassword).setValue(currentpassword);
        return this;
    }

    async inputNewPasswordTXB(password){

        await (await this.NewPassTXB).setValue(password);
        return this;
    }

    async inputConfirmPass(confirmpassword){
        await (await this.ConfirmPassword).setValue(confirmpassword);
        return this;
    }

    async VerifyChangeLoginPass(){
       
        await expect (await (this.CurrentPassword)).toBeDisplayed();
        await expect  (await (this.NewPassTXB)).toBeDisplayed();
        await expect (await (this.ConfirmPassword)).toBeDisplayed();
        await expect (await (this.ChangeSubmitBTN)).toBeDisplayed();

        return this;

    }
    


    open() {
        return super.open('login');
    }
}

export default new ProfilePage();