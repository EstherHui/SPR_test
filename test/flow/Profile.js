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

         //temporary solution
        await ProfilePage.clickProfileBTN();
        await ProfilePage.doubleClickMobile()
        //await (await ProfilePage.Mobile).clearValue();  clearValue() <= this method has been ignored
        await browser.keys("Delete");
        await browser.keys("187754628");
        // await ProfilePage.clickMobile()
        // let value = await (await ProfilePage.Mobile).getValue();
        // await assert(value === '');
        //await ProfilePage.inputMobile();
        await (await ProfilePage.UpdateBTN).click();
        await ProfilePage.inputTradingPass01();
        await browser.keys('1');
        await ProfilePage.inputTradingPass02();
        await browser.keys('2');
        await ProfilePage.inputTradingPass03();
        await browser.keys('3');
        await ProfilePage.inputTradingPass04();
        await browser.keys('4');
        await ProfilePage.inputTradingPass05();
        await browser.keys('5');
        await ProfilePage.inputTradingPass06();
        await browser.keys('6');

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

        await ProfilePage.clickProfileBTN();
        await ProfilePage.clickChangeLoginPass();
        await ProfilePage.inputNewPassTXB();
        await ProfilePage.inputConfirmPass();
        await ProfilePage.clickChangeSubmitBTN();

    }
}