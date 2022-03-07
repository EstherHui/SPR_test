import Credential from '../entity/credentialProfile';

const credential = new Credential();
credential.username = 'candy03';
credential.password = 'Qwerty!23';
credential.currentTpassword = '123321' ;
credential.newTpassword = '123123';
credential.confirmTpassword =credential.newTpassword;
credential.invalidTpassword = '123Abc';
credential.diffTcurrent = '654321';


const data= {
    
    credential : credential
}

export default data;