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

}