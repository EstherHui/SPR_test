import Credential from '../entity/credentialProfile';

const credential = new Credential();
credential.username = 'candy02';
credential.password = 'Qwerty!23';
credential.secondary01 = '1';
credential.secondary02 = '2';
credential.secondary03 = '3';
credential.secondary04 = '4';
credential.secondary05 = '5';
credential.secondary06 = '6';
credential.newMobile = '0187754882';

const data= {
    
    credential : credential
}

export default data;
