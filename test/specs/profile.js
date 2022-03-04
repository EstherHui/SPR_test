import Profile from '../flow/Profile';
import testdata from '../test_data/Profile001';
import testdata_CL from '../test_data/Profile002';

describe( 'Profile001 - ', () => {
    // it("T001 - Profile Display", async() => {
       
    //     const validacc= testdata.credential;
    //     const profileflow = new Profile(validacc);
    //     await profileflow.login();
    //     await profileflow.ProfileDisplay()
        
    //  });

    // it("T002 -  cannot update information when leave the required field blank", async() =>{

    //     const blankupdate= testdata.credential;
    //     const profileflow = new Profile(blankupdate);
    //     await profileflow.login();
    //     await profileflow.BlankUpdate();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
    //     await expect(message).toHaveText('Mobile No Is Required');

    // });

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

   //   it("T005 - blank Change Login Password ", async() => {
       
   //      const blank= testdata_CL.credential;
   //      const profileflow = new Profile(blank);
   //      await profileflow.login();
   //      await profileflow.blankChangeLoginPass();
   //      let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
   //      await expect(message).toHaveTextContaining('Is Required');
   //   });

   //   it("T006 - Change Login Password with blank current password ", async() => {
       
   //      const blankCurrent= testdata_CL.credential;
   //      const profileflow = new Profile(blankCurrent);
   //      //await profileflow.login();
   //      await profileflow.ChangeLoginPassNoCurrent();
   //      let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
   //      await expect(message).toHaveText('Current Password Is Required');

   //   });

   //   it("T007 - Change Login Password with blank new password ", async() => {

   //      const blankNew= testdata_CL.credential;
   //      const profileflow = new Profile(blankNew);
   //      //await profileflow.login();
   //      await profileflow.ChangeLoginPassNoNew();
   //      let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
   //      await expect(message).toHaveText('Password Is Required');

   //   });

   //   it("T008 - Change Login Password with blank confirm password ", async() => {

   //      const blankConfirm = testdata_CL.credential;
   //      const profileflow = new Profile(blankConfirm);
   //      await profileflow.ChangeLoginPassNoConfirm();
   //      let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
   //      await expect(message).toHaveText('Confirm Password Is Required');

   //   });

   //   it("T009 - CHange Login Password with invalid format new password", async() => {

   //    const invalidnew = testdata_CL.credential;
   //    const profileflow = new Profile(invalidnew);
   //    await profileflow.ChangeLoginPassInvalidNew();
   //    let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
   //    await expect(message).toBeDisplayed();

   //   });

   //   it("T010 - CHange Login Password with wrong current password", async() => {

   //    const diffcurrent = testdata_CL.credential;
   //    const profileflow = new Profile(diffcurrent);
   //    await profileflow.ChangeLoginPassDiffCurrent();
   //    let error = await $('[class = "MuiAlert-message css-1w0ym84"]');
   //    await expect(error).toHaveTextContaining('Invalid');

   //   });

   //   it("T011 - CHange Login Password with all input same value", async() => {

   //    const allsame = testdata_CL.credential;
   //    const profileflow = new Profile(allsame);
   //    await profileflow.ChangeLoginPassAllSame();
   //    let error = await $('[class = "MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
   //    await expect(error).toHaveText('Password Not Equal To Current Login Password');

   //   });

   //   it("T012 - Change Login Password with diffent new password and confirm password", async() => {

   //    const disffnewconf = testdata_CL.credential;
   //    const profileflow = new Profile(disffnewconf);
   //    await profileflow.ChangeLoginPassDiffNewConfirm();
   //    let error = await $('[class = "MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
   //    await expect(error).toHaveText('Confirm Passsword Must Equal To New Login Password');

   //   });

   //   it("T013 - Change Login Password successful", async() => {

   //    const loginChange = testdata_CL.credential;
   //    const profileflow = new Profile(loginChange);
   //    await profileflow.login();
   //    await profileflow.ChangeLoginPassSuccess();
   //    let error = await $('[class = "MuiAlert-message css-1w0ym84"]');
   //    await expect(error).toHaveTextContaining('Successfully');
   //    await profileflow.logout();

   //   });

     it("T014 - log into system with the new password", async() => {

      const login = testdata_CL.credential;
      const profileflow = new Profile(login);
      await profileflow.loginNewPass();
      await expect(browser).toHaveUrlContaining('home'); 
      await profileflow.logout02();

     });

     it("T015 - log into system with old password", async() => {

      const loginFail = testdata_CL.credential;
      const profileflow = new Profile(loginFail);
      await profileflow.loginOldPass();
      let error = await $('[class= "MuiAlert-message css-1w0ym84"]');
      await expect(error).toHaveText('Invalid Username or Password');

     });



 });