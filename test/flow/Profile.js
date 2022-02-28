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

    async ProfileDisplay(){

        await ProfilePage.clickProfileBTN();
        await ProfilePage.VerifyProfile();

    }

    async BlankUpdate(){

        await ProfilePage.clickProfileBTN();
        await (await ProfilePage.Mobile).click();
        await (await ProfilePage.Mobile).clearValue();
        await browser.pause(10000);
        await (await ProfilePage.UpdateBTN).click();
        await ProfilePage.inputTradingPass01();
        await ProfilePage.inputTradingPass02();
        await ProfilePage.inputTradingPass03();
        await ProfilePage.inputTradingPass04();
        await ProfilePage.inputTradingPass05();
        await ProfilePage.inputTradingPass06();

    }

    async UpdateSuccess(){

        await ProfilePage.clickProfileBTN();
        await (await ProfilePage.Mobile).click();
        await (await ProfilePage.Mobile).clearValue();
        await ProfilePage.inputMobile();
        await (await ProfilePage.UpdateBTN).click();
        await ProfilePage.inputTradingPass01();
        await ProfilePage.inputTradingPass02();
        await ProfilePage.inputTradingPass03();
        await ProfilePage.inputTradingPass04();
        await ProfilePage.inputTradingPass05();
        await ProfilePage.inputTradingPass06();

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
        
        await ProfilePage.blankChangeLoginPass();
        
    }
}