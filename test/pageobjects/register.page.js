import Page from './page';

class Register extends Page {

    get UsernameTXB(){ return $('input[name = "username"]'); }
    get PasswordTXB(){ return $('input[name = "password"]'); }
    get TransactionPassTXB() { return $('input[name = "secondary_pin"]'); }
    get InvitationCodeTXB() { return $('input[name="referral_code"]'); }
    get FirstNameTXB() { return $('input["name="first_name"]'); }
    get LastNameTXB() { return $('input[name = "last_name"]'); }
    get Country() { return $('#mui-component-select-country_code'); }
    get MobileNumb(){return $('input[name="mobile_no"]'); }
    get Email(){ return $(''); }

    open() {
        return super.open('register');
    }
}