import Page from './page';

class ProfilePage extends Page{

    get Username(){ return $('.MuiTypography-root MuiTypography-body1 css-yn1ps6');   }
    get FirstName(){ return $('input[name="first_name"]');  }
    get LastName(){ return $('input[name="last_name"]');  }
    get Email(){ return $('input[name="email"]'); }
    get Country(){ return $('#mui-component-select-country_code'); }
    get Mobile(){ return $('input[name="mobile_no"]'); }
    get ReferralID(){ return $('input[name="referral_code"]'); }
    get ReferralTree(){ return $('class="MuiTreeItem-label"'); }
    get UpdateBTN(){ return $('button[type="submit"]'); }
    get ChangePasswordBTN(){ return $('.MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1kx2vbf = Change Login Password'); }
    get ChangeSecondaryPassBTN(){ return $('.MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1kx2vbf = Change Transaction Password'); }
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
    
    async VerifyProfile(){

        await expect (await (await (this.Username)).isDisplayed()).toBeDisplayed();
        await expect (await (await (this.FirstName)).isDisplayed()).toBeDisplayed();
        await expect (await (await (this.LastName)).isDisplayed()).toBeDisplayed();
        await expect (await (await (this.Email)).isDisplayed()).toBeDisplayed();
        await expect (await (await (this.Country)).isDisplayed()).toBeDisplayed();
        await expect (await (await (this.Mobile)).isDisplayed()).toBeDisplayed();
        await expect (await (await (this.ReferralID)).isDisplayed()).toBeDisplayed();
        await expect (await (await (this.ReferralTree)).isDisplayed()).toBeDisplayed();
        await expect (await (await (this.UpdateBTN)).isDisplayed()).toBeDisplayed();
        await expect (await (await (this.ChangePasswordBTN)).isDisplayed()).toBeDisplayed();
        await expect (await (await (this.ChangeSecondaryPassBTN)).isDisplayed()).toBeDisplayed();
        await expect (await (await (this.SignOutBtn)).isDisplayed()).toBeDisplayed();

        return this;
    }

    


    open() {
        return super.open('login');
    }
}

export default new ProfilePage();