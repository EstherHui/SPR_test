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
        await (await ProfilePage.UpdateBTN).click();
        
    }
}