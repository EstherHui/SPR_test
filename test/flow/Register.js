import RegisterPage from '../pageobjects/register.page';

export default class Register {

    constructor(testdata){
        
        this._testdata = testdata;

    }

    async RegisterDisplay(){

        await RegisterPage.open();
        await RegisterPage.verifyRegisterDisplay();

    }

    async blank(){

        await RegisterPage.open();
        await RegisterPage.clickSignUpBTN();
        
    }

    async RegisterNoUsername(){

        await RegisterPage.open();
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputTransactionPass(this._testdata.secondarypin);
        await RegisterPage.inputInvitationCode(this._testdata.invitationCode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputMobileNum(this._testdata.mobile);
        await RegisterPage.inputEmail(this._testdata.email);
        await RegisterPage.clickSignUpBTN();

        return this;

    }

}