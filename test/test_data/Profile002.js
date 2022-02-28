import Credential from '../entity/credentialProfile';

const credentialPro = new Credential();
credentialPro.username = 'candy';
credentialPro.password = 'Qwerty!23';
credentialPro.currentpassword = credentialPro.password;
credentialPro.newpassword = 'As!23123';
credentialPro.confirmpassword = credentialPro.newpassword;


const data= {
    
    credential : credentialPro
}

export default data;