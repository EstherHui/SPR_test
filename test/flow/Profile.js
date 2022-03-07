import ProfilePage from '../pageobjects/profile.page';


export default class Profile{

    constructor(testdata){
        
        this._testdata = testdata;

    }

    async login () {

        await ProfilePage.open();
        await ProfilePage.inputUsername(this._testdata.username);
        await ProfilePage.inputPassword(this._testdata.password);
        await ProfilePage.clickLoginBtn();

        return this;
    }

    async logout(){

        // await (await ProfilePage.ProfileBTN).click();
        await (await ProfilePage.SignOutBtn).click();
        await (await ProfilePage.ConfirmBTN).click();

        return this;

    }

    async logout02(){

        await (await ProfilePage.ProfileBTN).click();
        await (await ProfilePage.SignOutBtn).click();
        await (await ProfilePage.ConfirmBTN).click();

        return this;

    }

    async ProfileDisplay(){

        await ProfilePage.clickProfileBTN();
        await ProfilePage.VerifyProfile();

        return this;

    }

    async BlankUpdate(){

        await ProfilePage.clickProfileBTN();
        await ProfilePage.clickMobile()
        await browser.keys("Delete");
        await ProfilePage.clickUpdateBTN();

        return this;

    }

    async UpdateSuccess(){

        await ProfilePage.clickProfileBTN();
        await ProfilePage.doubleClickMobile()
        //await (await ProfilePage.Mobile).clearValue();  clearValue() <= this method has been ignored
        await browser.keys("Delete");
        //await browser.keys("187754628");
        // await ProfilePage.clickMobile()
        // let value = await (await ProfilePage.Mobile).getValue();
        // await assert(value === '');
        await ProfilePage.inputMobile(this._testdata.newMobile);
        await (await ProfilePage.UpdateBTN).click();
        await ProfilePage.inputTradingPass01(this._testdata.secondary01);
        await ProfilePage.inputTradingPass02(this._testdata.secondary02);
        await ProfilePage.inputTradingPass03(this._testdata.secondary03);
        await ProfilePage.inputTradingPass04(this._testdata.secondary04);
        await ProfilePage.inputTradingPass05(this._testdata.secondary05);
        await ProfilePage.inputTradingPass06(this._testdata.secondary06);

        return this;

    }

    async ChangePassDisplay(){

        await ProfilePage.clickProfileBTN();
        await (await ProfilePage.ChangePasswordBTN).click();

        return this;

    }

    async ChangeLoginPassDisplay(){

        // await ProfilePage.clickProfileBTN();
        await ProfilePage.clickChangeLoginPass();
        await ProfilePage.VerifyChangeLoginPass();

        return this;

    }

    async blankChangeLoginPass(){
        
        await ProfilePage.clickProfileBTN();
        await ProfilePage.clickChangeLoginPass();
        await ProfilePage.clickChangeSubmitBTN();

        return this;
        
    }

    async ChangeLoginPassNoCurrent(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();
        await ProfilePage.inputNewPasswordTXB(this._testdata.newpassword);
        await ProfilePage.inputConfirmPass(this._testdata.confirmpassword);
        await ProfilePage.clickChangeSubmitBTN();
        await (await ProfilePage.NewPassTXB).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmPassword).doubleClick();
        await browser.keys('Delete');

        return this;

    }

    async ChangeLoginPassNoNew(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();        
        await ProfilePage.inputCurrentPass(this._testdata.currentpassword);
        await ProfilePage.inputConfirmPass(this._testdata.confirmpassword);
        await ProfilePage.clickChangeSubmitBTN();
        await (await ProfilePage.CurrentPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmPassword).doubleClick();
        await browser.keys('Delete');

        return this;     

    }

    async ChangeLoginPassNoConfirm(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();
        await ProfilePage.inputCurrentPass(this._testdata.currentpassword);
        await ProfilePage.inputNewPasswordTXB(this._testdata.newpassword);
        await ProfilePage.clickChangeSubmitBTN();
        await (await ProfilePage.CurrentPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.NewPassTXB).doubleClick();
        await browser.keys('Delete');

        return this;

    }

    async ChangeLoginPassInvalidNew(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();
        await ProfilePage.inputCurrentPass(this._testdata.invalidpassword);
        await ProfilePage.inputNewPasswordTXB(this._testdata.newpassword);
        await ProfilePage.inputConfirmPass(this._testdata.confirmpassword);
        await ProfilePage.clickChangeSubmitBTN();
        
        return this;
       
    }

    async ChangeLoginPassDiffCurrent(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();
        await (await ProfilePage.CurrentPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.NewPassTXB).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmPassword).doubleClick();
        await browser.keys('Delete');
        await ProfilePage.inputCurrentPass(this._testdata.diffcurrent);
        await ProfilePage.inputNewPasswordTXB(this._testdata.newpassword);
        await ProfilePage.inputConfirmPass(this._testdata.confirmpassword);
        await ProfilePage.clickChangeSubmitBTN();

        return this;
       
    }

    async ChangeLoginPassAllSame(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();
        await (await ProfilePage.CurrentPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.NewPassTXB).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmPassword).doubleClick();
        await browser.keys('Delete');
        await ProfilePage.inputCurrentPass(this._testdata.password);
        await ProfilePage.inputNewPasswordTXB(this._testdata.password);
        await ProfilePage.inputConfirmPass(this._testdata.password);
        await ProfilePage.clickChangeSubmitBTN();

        return this;
       
    }

    async ChangeLoginPassDiffNewConfirm(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();
        await (await ProfilePage.CurrentPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.NewPassTXB).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmPassword).doubleClick();
        await browser.keys('Delete');
        await ProfilePage.inputCurrentPass(this._testdata.password);
        await ProfilePage.inputNewPasswordTXB(this._testdata.newpassword);
        await ProfilePage.inputConfirmPass(this._testdata.password);
        await ProfilePage.clickChangeSubmitBTN();

        return this;
       
    }

    async ChangeLoginPassSuccess(){
        
        // await ProfilePage.open();
        await ProfilePage.clickProfileBTN();
        await ProfilePage.clickChangeLoginPass();
        await (await ProfilePage.CurrentPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.NewPassTXB).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmPassword).doubleClick();
        await browser.keys('Delete');
        await ProfilePage.inputCurrentPass(this._testdata.password);
        await ProfilePage.inputNewPasswordTXB(this._testdata.newpassword);
        await ProfilePage.inputConfirmPass(this._testdata.confirmpassword);
        await ProfilePage.clickChangeSubmitBTN();

        return this;
       
    }

    async loginNewPass(){

        await ProfilePage.open();
        await ProfilePage.inputUsername(this._testdata.username);
        await ProfilePage.inputPassword(this._testdata.newpassword);
        await ProfilePage.clickLoginBtn();

        return this;
    }

    async loginOldPass(){

        await ProfilePage.open();
        await ProfilePage.inputUsername(this._testdata.username);
        await ProfilePage.inputPassword(this._testdata.password);
        await ProfilePage.clickLoginBtn();

        return this;
    }

    async ChangeSecondaryPassDisplay(){

        await ProfilePage.clickProfileBTN();
        await ProfilePage.clickChangeNDPassBTN();

        return this;

    }

    async blankChangeSecondary(){

        await ProfilePage.clickProfileBTN();
        await ProfilePage.clickChangeNDPassBTN();
        await ProfilePage.clickChangeNDSubmitBTN

        return this;

    }

    async ChangeSecondaryPassNoCurrent(){

        // await ProfilePage.clickProfileBTN();
        // await ProfilePage.clickChangeNDPassBTN();
        await ProfilePage.inputNewNDPasswordTXB(this._testdata.newTpassword);
        await ProfilePage.inputConfirmNDPass(this._testdata.confirmTpassword);
        await ProfilePage.clickChangeNDSubmitBTN();
        await (await ProfilePage.NewNDPassTXB).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmNDPassword).doubleClick();
        await browser.keys('Delete');

        return this;

    }

    async ChangeSecondaryNoNew(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();        
        await ProfilePage.inputCurrentNDPass(this._testdata.currentTpassword);
        await ProfilePage.inputConfirmNDPass(this._testdata.confirmTpassword);
        await ProfilePage.clickChangeNDSubmitBTN();
        await (await ProfilePage.CurrentNDPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmNDPassword).doubleClick();
        await browser.keys('Delete');

        return this;     

    }

    async ChangeSecondaryNoConfirm(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();
        await ProfilePage.inputCurrentNDPass(this._testdata.currentpassword);
        await ProfilePage.inputNewNDPasswordTXB(this._testdata.newTpassword);
        await ProfilePage.clickChangeNDSubmitBTN();
        await (await ProfilePage.CurrentNDPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.NewNDPassTXB).doubleClick();
        await browser.keys('Delete');

        return this;

    }

    async ChangeSecondaryWithInvalid(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();
        await ProfilePage.inputCurrentNDPass(this._testdata.currentTpassword);
        await ProfilePage.inputNewNDPasswordTXB(this._testdata.invalidpassword);
        await ProfilePage.inputConfirmNDPass(this._testdata.invalidpassword);
        await ProfilePage.clickChangeNDSubmitBTN();

        return this;

    }

    async ChangeSecondaryWithWrongCurrent(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();
        await (await ProfilePage.CurrentNDPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.NewNDPassTXB).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmNDPassword).doubleClick();
        await browser.keys('Delete');
        await ProfilePage.inputCurrentNDPass(this._testdata.diffTcurrent);
        await ProfilePage.inputNewNDPasswordTXB(this._testdata.newTpassword);
        await ProfilePage.inputConfirmNDPass(this._testdata.confirmTpassword);
        await ProfilePage.clickChangeNDSubmitBTN();
        // await (await ProfilePage.CurrentNDPassword).doubleClick();
        // await browser.keys('Delete');
        // await (await ProfilePage.NewNDPassTXB).doubleClick();
        // await browser.keys('Delete');
        // await (await ProfilePage.ConfirmNDPassword).doubleClick();
        // await browser.keys('Delete');

        return this;

    }

    async ChangeSecondaryWithAllSame(){

        await (await ProfilePage.CurrentNDPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.NewNDPassTXB).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmNDPassword).doubleClick();
        await browser.keys('Delete');
        await ProfilePage.inputCurrentNDPass(this._testdata.currentTpassword);
        await ProfilePage.inputNewNDPasswordTXB(this._testdata.currentTpassword);
        await ProfilePage.inputConfirmNDPass(this._testdata.currentTpassword);
        await ProfilePage.clickChangeNDSubmitBTN();
        // await browser.pause(10000);

    }

    async ChangeSecondaryWithDiffNewConfirm(){

        await (await ProfilePage.CurrentNDPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.NewNDPassTXB).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmNDPassword).doubleClick();
        await browser.keys('Delete');
        await ProfilePage.inputCurrentNDPass(this._testdata.currentTpassword);
        await ProfilePage.inputNewNDPasswordTXB(this._testdata.newTpassword);
        await ProfilePage.inputConfirmNDPass(this._testdata.currentTpassword);
        await ProfilePage.clickChangeNDSubmitBTN();
        // await browser.pause(10000);

    }

    async ChangeSecondarySuccess(){

        await (await ProfilePage.CurrentNDPassword).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.NewNDPassTXB).doubleClick();
        await browser.keys('Delete');
        await (await ProfilePage.ConfirmNDPassword).doubleClick();
        await browser.keys('Delete');
        await ProfilePage.inputCurrentNDPass(this._testdata.currentTpassword);
        await ProfilePage.inputNewNDPasswordTXB(this._testdata.newTpassword);
        await ProfilePage.inputConfirmNDPass(this._testdata.confirmTpassword);
        await ProfilePage.clickChangeNDSubmitBTN();

    }

    


}