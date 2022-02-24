import Credential from "../entity/credentialRegister";

const credentialR = new Credential();
credentialR.username = 'hawaii';
credentialR.password = 'Qwerty!23';
credentialR.secondarypin = '123123';
credentialR.invitationCode = 'candy03';
credentialR.firstName = 'hawaii';
credentialR.lastName = 'chicken';
// credentialR.country = 'Malaysia';
credentialR.mobile = '0175524897';
credentialR.email = 'hawaii@chicken.com';
credentialR.lessUsername = 'pie' ;
credentialR.existingusername = 'candy02';
credentialR.specialUsername = 'hawaii*10#';

const data= {
    
    credential : credentialR
}

export default data;
