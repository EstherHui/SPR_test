import Profile from '../flow/Profile';
import Pofile from '../flow/Profile';
import testdata from '../test_data/Profile001';

describe( 'Profile001 - ', () => {
    // it("T001 - Profile Display", async() => {
       
        // const validacc= testdata.credential;
        // const profileflow = new Profile(validacc);
        // await profileflow.login();
        // await profileflow.ProfileDisplay()
        
    //  });

    it("T002 -  cannot update information when leave the required field blank", async() =>{

        const blankupdate= testdata.credential;
        const profileflow = new Profile(blankupdate);
        await profileflow.login();
        await profileflow.BlankUpdate();

    });


});