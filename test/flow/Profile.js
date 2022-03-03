import ProfilePage from '../pageobjects/profile.page';
import { strict as assert } from 'assert'

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

    async ProfileDisplay(){

        await ProfilePage.clickProfileBTN();
        await ProfilePage.VerifyProfile();

    }

    async BlankUpdate(){

        await ProfilePage.clickProfileBTN();
        await ProfilePage.clickMobile()
        await browser.keys("Delete");
        await ProfilePage.clickUpdateBTN();

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

    }

    async ChangePassDisplay(){

        await ProfilePage.clickProfileBTN();
        await (await ProfilePage.ChangePasswordBTN).click();



    }

    async ChangeLoginPassDisplay(){

        // await ProfilePage.clickProfileBTN();
        await ProfilePage.clickChangeLoginPass();
        await ProfilePage.VerifyChangeLoginPass();

    }

    async blankChangeLoginPass(){
        
        await ProfilePage.clickProfileBTN();
        await ProfilePage.clickChangeLoginPass();
        await ProfilePage.clickChangeSubmitBTN();
        
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

    }

    async ChangeLoginPassInvalidNew(){

        //await ProfilePage.clickProfileBTN();
        //await ProfilePage.clickChangeLoginPass();
        await ProfilePage.inputCurrentPass(this._testdata.invalidpassword);
        await ProfilePage.inputNewPasswordTXB(this._testdata.newpassword);
        await ProfilePage.inputConfirmPass(this._testdata.confirmpassword);
        await ProfilePage.clickChangeSubmitBTN();
       
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
       
    }

    async ChangeLoginPassSuccess(){

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
        await ProfilePage.inputConfirmPass(this._testdata.confirmpassword);
        await ProfilePage.clickChangeSubmitBTN();
       
    }



}