import Credential from '../entity/credentialProfile';

const credential = new Credential();
credential.username = 'candy03';
credential.password = 'As!23123';
credential.currentTpassword = '123123' ;
credential.newTpassword = '123456';
credential.confirmTpassword =credential.newTpassword;
credential.invalidTpassword = '123Abc';
credential.diffTcurrent = '147852';


const data= {
    
    credential : credential
}

export default data;