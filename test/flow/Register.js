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

    async RegisterSuccess(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
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

    async RegisterLessUsername(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.lessUsername);
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

    async RegisterExistingUsername(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.existingusername);
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

    async RegisterSpecialUsername(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.specialUsername);
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

    async RegisterNoPassword(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
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

    async RegisterLessPassword(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.Password6);
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

    async RegisterPasswordNum(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.Password7);
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

    async RegisterPassNoUpperSpecial(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.Password4);
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

    async RegisterPassNoUpper(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.Password2);
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

    async RegisterPassNoSpecial(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.Password3);
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

    async RegisterPassNoLetter(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.Password5);
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

    async RegisterNoTransactionPass(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputInvitationCode(this._testdata.invitationCode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputMobileNum(this._testdata.mobile);
        await RegisterPage.inputEmail(this._testdata.email);
        await RegisterPage.clickSignUpBTN();

        return this;

    }

    async RegisterLessTransactionPass(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputTransactionPass(this._testdata.SecondaryPin1);
        await RegisterPage.inputInvitationCode(this._testdata.invitationCode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputMobileNum(this._testdata.mobile);
        await RegisterPage.inputEmail(this._testdata.email);
        await RegisterPage.clickSignUpBTN();

        return this;

    }

    async RegisterSpecialTransactionPass(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputTransactionPass(this._testdata.SecondaryPin2);
        await RegisterPage.inputInvitationCode(this._testdata.invitationCode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputMobileNum(this._testdata.mobile);
        await RegisterPage.inputEmail(this._testdata.email);
        await RegisterPage.clickSignUpBTN();

        return this;

    }

    async RegisterAlphabetTransactionPass(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputTransactionPass(this._testdata.SecondaryPin3);
        await RegisterPage.inputInvitationCode(this._testdata.invitationCode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputMobileNum(this._testdata.mobile);
        await RegisterPage.inputEmail(this._testdata.email);
        await RegisterPage.clickSignUpBTN();

        return this;

    }

    async RegisterNoEmail(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputTransactionPass(this._testdata.secondarypin);
        await RegisterPage.inputInvitationCode(this._testdata.invitationCode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputMobileNum(this._testdata.mobile);
        await RegisterPage.clickSignUpBTN();

        return this;

    }

    async RegisterWrongEmailFormat(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputTransactionPass(this._testdata.secondarypin);
        await RegisterPage.inputInvitationCode(this._testdata.invitationCode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputMobileNum(this._testdata.mobile);
        await RegisterPage.inputEmail(this._testdata.emailWrong);
        await RegisterPage.clickSignUpBTN();

        return this;

    }

    async RegisterExistingEmail(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputTransactionPass(this._testdata.secondarypin);
        await RegisterPage.inputInvitationCode(this._testdata.invitationCode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputMobileNum(this._testdata.mobile);
        await RegisterPage.inputEmail(this._testdata.emailExisting);
        await RegisterPage.clickSignUpBTN();

        return this;

    }

    async RegisterInvalidCode(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputTransactionPass(this._testdata.secondarypin);
        await RegisterPage.inputInvitationCode(this._testdata.invalidcode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputMobileNum(this._testdata.mobile);
        await RegisterPage.inputEmail(this._testdata.email);
        await RegisterPage.clickSignUpBTN();

        return this;

    }

    async RegisterNoMobile(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputTransactionPass(this._testdata.secondarypin);
        await RegisterPage.inputInvitationCode(this._testdata.invitationCode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputEmail(this._testdata.email);
        await RegisterPage.clickSignUpBTN();

        return this;

    }

    async RegisterLessMobile(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputTransactionPass(this._testdata.secondarypin);
        await RegisterPage.inputInvitationCode(this._testdata.invitationCode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputMobileNum(this._testdata.lessmobile);
        await RegisterPage.inputEmail(this._testdata.email);
        await RegisterPage.clickSignUpBTN();

        return this;

    }

    async RegisterMoreMobile(){

        await RegisterPage.open();
        await RegisterPage.inputUsername(this._testdata.username);
        await RegisterPage.inputPassword(this._testdata.password);
        await RegisterPage.inputTransactionPass(this._testdata.secondarypin);
        await RegisterPage.inputInvitationCode(this._testdata.invitationCode);
        await RegisterPage.inputFirstName(this._testdata.firstName);
        await RegisterPage.inputLastName(this._testdata.lastName);
        //await RegisterPagw.inputCountry(this._testdate.country);
        await RegisterPage.inputMobileNum(this._testdata.moremobile);
        await RegisterPage.inputEmail(this._testdata.email);
        await RegisterPage.clickSignUpBTN();

        return this;

    }


}