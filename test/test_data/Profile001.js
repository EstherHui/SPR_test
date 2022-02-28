import Credential from '../entity/credentialProfile';

const credentialP = new Credential();
credentialP.username = 'candy02';
credentialP.password = 'Qwerty!23';
credentialP.secondary01 = '1';
credentialP.secondary02 = '2';
credentialP.secondary03 = '3';
credentialP.secondary04 = '1';
credentialP.secondary05 = '2';
credentialP.secondary06 = '3';
credentialP.newMobile = '185547254';

const data= {
    
    credential : credentialP
}

export default data;
