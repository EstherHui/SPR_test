import Credential from '../entity/credentialProfile';

const credential = new Credential();
credential.username = 'candy';
credential.password = 'Qwerty!23' ;
credential.currentpassword = credential.password ;
credential.newpassword = 'As!23123';
credential.confirmpassword =credential.newpassword;


const data= {
    
    credential : credential
}

export default data;