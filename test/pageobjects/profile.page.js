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