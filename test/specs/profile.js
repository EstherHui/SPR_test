import Profile from '../flow/Profile';
import testdata from '../test_data/Profile001';
//import testdata_CL from '../test_data/Profile002';

describe( 'Profile001 - ', () => {
    // it("T001 - Profile Display", async() => {
       
    //     const validacc= testdata.credential;
    //     const profileflow = new Profile(validacc);
    //     await profileflow.login();
    //     await profileflow.ProfileDisplay()
        
    //  });

    it("T002 -  cannot update information when leave the required field blank", async() =>{

        const blankupdate= testdata.credential;
        const profileflow = new Profile(blankupdate);
        await profileflow.login();
        await profileflow.BlankUpdate();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        await expect(message).toHaveText('Mobile No Is Required');

    });

    // it("T003 -  update information success", async() =>{

    //     const update= testdata.credential;
    //     const profileflow = new Profile(update);
    //     await profileflow.login();
    //     await profileflow.UpdateSuccess();
    //     let message = await $('[class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAlert-root MuiAlert-standardSuccess MuiAlert-standard css-1rc8o7p"]');
    //     await expect(message).toHaveTextContaining('Successfully');

    // });

});

describe( 'Profile002 - ', () => {
    // it("T004 - Change Login Password Display", async() => {
       
    //     const validacc= testdata_CL.credential;
    //     const profileflow = new Profile(validacc);
    //     // await profileflow.login();
    //     await profileflow.ChangeLoginPassDisplay();
        
    //  });

    //  it("T005 - blank Change Login Password ", async() => {
       
    //     //const blankPass= testdata.credential;
    //     const profileflow = new Profile();
    //     //await profileflow.login();
    //     await profileflow.blankChangeLoginPass();
        
    //  });
          



});