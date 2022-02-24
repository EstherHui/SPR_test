import Register from '../flow/Register';
import testdataR from '../test_data/Register001';

describe('Register001', () => {

    // it( 'T001 - Register Display', async() =>{

    //     const registerFlow = new Register();
    //     await registerFlow.RegisterDisplay();

    // });

    // it( 'T002 - Register with blank all field', async() => {

    //     const registerFlow = new Register();
    //     await registerFlow.blank();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
    //     await expect(message).toHaveTextContaining('Is Required');

    // });

    // it( 'T003 - Register with blank username', async() => {

    //     const blankusername = testdataR.credential;
    //     const registerFlow = new Register(blankusername);
    //     await registerFlow.RegisterNoUsername();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
    //     await expect(message).toHaveText('Username Is Required');

    // });

    // it( 'T004 - Register with username less than 4 characters', async() => {

    //     const lessUsername = testdataR.credential;
    //     const registerFlow = new Register(lessUsername);
    //     await registerFlow.RegisterLessUsername();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
    //     await expect(message).toHaveTextContaining('Min 4');

    // });

    // it( 'T005 - Register with existing username', async() => {

    //     const existingusername = testdataR.credential;
    //     const registerFlow = new Register(existingusername);
    //     await registerFlow.RegisterExistingUsername();
    //     let message = await $('[class="MuiAlert-message css-1w0ym84"]');
    //     await expect(message).toHaveTextContaining('Username Already Taken');

    // });

    // it( 'T006 - Register with username contain special character', async() => {

    //     const specialUsername = testdataR.credential;
    //     const registerFlow = new Register(specialUsername);
    //     await registerFlow.RegisterSpecialUsername();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
    //     await expect(message).toHaveTextContaining('No Special Characters');

    // });

    // it( 'T007 - Register with blank password', async() => {

    //     const blankpass = testdataR.credential;
    //     const registerFlow = new Register(blankpass);
    //     await registerFlow.RegisterNoPassword();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
    //     await expect(message).toHaveText('Password Is Required');

    // });

    // it( 'T008 - Register with password less than 8 characters', async() => {

    //     const lessPass = testdataR.credential;
    //     const registerFlow = new Register(lessPass);
    //     await registerFlow.RegisterLessPassword();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
    //     await expect(message).toHaveText('Min 8 Char');

    // });

    // it( 'T009 - Register with password without alphabet and special character ', async() => {

    //     const passNum = testdataR.credential;
    //     const registerFlow = new Register(passNum);
    //     await registerFlow.RegisterPasswordNum();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
    //     await expect(message).toHaveText('Contain Letter');

    // });


    // it( 'T010 - Register with password without uppercase and special character', async() => {

    //     const lowerpass = testdataR.credential;
    //     const registerFlow = new Register(lowerpass);
    //     await registerFlow.RegisterPassNoUpperSpecial();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
    //     await expect(message).toHaveTextContaining('Special Character');

    // });

    // // it( 'T011 - Register with password without uppercase', async() => {

    // //     const passNoUp = testdataR.credential;
    // //     const registerFlow = new Register(passNoUp);
    // //     await registerFlow.RegisterPassNoUpper();
    // //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
    // //     await expect(message).toHaveTextContaining('Uppercase');

    // // });

    // it( 'T012 - Register with password without special character ', async() => {

    //     const passNoSpecial = testdataR.credential;
    //     const registerFlow = new Register(passNoSpecial);
    //     await registerFlow.RegisterPassNoSpecial();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
    //     await expect(message).toHaveTextContaining('Special Character');

    // });

    // it( 'T013 - Register with password without alpahbet ', async() => {

    //     const passNoLetter = testdataR.credential;
    //     const registerFlow = new Register(passNoLetter);
    //     await registerFlow.RegisterPassNoLetter();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
    //     await expect(message).toHaveText('Contain Letter');

    // });


    it( 'T014 - Register with blank transaction password', async() => {

        const blanksecpass = testdataR.credential;
        const registerFlow = new Register(blanksecpass);
        await registerFlow.RegisterNoTransactionPass();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        await expect(message).toHaveText('Transaction Password Is Required');

    });

    it( 'T015 - Register with less than 6 char transaction password', async() => {

        const lesssecpass = testdataR.credential;
        const registerFlow = new Register(lesssecpass);
        await registerFlow.RegisterLessTransactionPass();
        let message = await $('[class="MuiAlert-message css-1w0ym84"]');
        await expect(message).toHaveTextContaining('6 Digits Number');

    });

    it( 'T016 - Register with transaction password contain special character', async() => {

        const specialsecpass = testdataR.credential;
        const registerFlow = new Register(specialsecpass);
        await registerFlow.RegisterSpecialTransactionPass();
        let message = await $('[class="MuiAlert-message css-1w0ym84"]');
        await expect(message).toHaveTextContaining('6 Digits Number');

    });

    it( 'T017 - Register with transaction password with alphabet', async() => {

        const alphabetsecpass = testdataR.credential;
        const registerFlow = new Register(alphabetsecpass);
        await registerFlow.RegisterAlphabetTransactionPass();
        let message = await $('[class="MuiAlert-message css-1w0ym84"]');
        await expect(message).toHaveTextContaining('6 Digits Number');


    });

    // it( 'T018 - Register with blank email', async() => {

    //     const blankemail = testdataR.credential;
    //     const registerFlow = new Register(blankemail);
    //     await registerFlow.RegisterNoEmail();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
    //     await expect(message).toHaveText('Transaction Password Is Required');

    // });

    // it( 'T019 - Register with blank transaction password', async() => {

    //     const blanksecpass = testdataR.credential;
    //     const registerFlow = new Register(blanksecpass);
    //     await registerFlow.RegisterNoTransactionPass();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
    //     await expect(message).toHaveText('Transaction Password Is Required');

    // });

    // it( 'T020 - Register with blank transaction password', async() => {

    //     const blanksecpass = testdataR.credential;
    //     const registerFlow = new Register(blanksecpass);
    //     await registerFlow.RegisterNoTransactionPass();
    //     let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
    //     await expect(message).toHaveText('Transaction Password Is Required');

    // });



});
