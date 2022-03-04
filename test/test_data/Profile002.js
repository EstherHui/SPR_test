import Credential from '../entity/credentialProfile';

const credential = new Credential();
credential.username = 'candy03';
credential.password = 'As!23123';
credential.currentpassword = credential.password ;
credential.newpassword = 'Qwerty!23';
credential.confirmpassword =credential.newpassword;
credential.invalidpassword = '12356';
credential.diffcurrent = 'Zxc!15678';


const data= {
    
    credential : credential
}

export default data;