import Credential from "../entity/credentialRegister";

const credentialR = new Credential();
credentialR.username = 'hawaii';
credentialR.password = 'As123!23';
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
credentialR.Password2 = 'as123!23' ;
credentialR.Password3 = 'As123123' ;
credentialR.Password4 = 'as123123' ;
credentialR.Password5 = '123!23123' ;
credentialR.Password6 = '123123' ;
credentialR.Password7 = '123123123' ;

const data= {
    
    credential : credentialR
}

export default data;
