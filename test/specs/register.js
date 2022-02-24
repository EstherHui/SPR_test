import Register from '../flow/Register';
import testdataR from '../test_data/Register001';

describe('Register001', () => {

    it( 'T001 - Register Display', async() =>{

        const registerFlow = new Register();
        await registerFlow.RegisterDisplay();

    });

    it( 'T002 - Register with blank all field', async() => {

        const registerFlow = new Register();
        await registerFlow.blank();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        await expect(message).toHaveTextContaining('Is Required');

    });

    it( 'T003 - Register with blank username', async() => {

        const blankusername = testdataR.credential;
        const registerFlow = new Register(blankusername);
        await registerFlow.RegisterNoUsername();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        await expect(message).toHaveText('Username Is Required');

    });

    it( 'T004 - Register with username less than 4 characters', async() => {

        const lessUsername = testdataR.credential;
        const registerFlow = new Register(lessUsername);
        await registerFlow.RegisterLessUsername();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
        await expect(message).toHaveTextContaining('Min 4');

    });

    it( 'T005 - Register with existing username', async() => {

        const existingusername = testdataR.credential;
        const registerFlow = new Register(existingusername);
        await registerFlow.RegisterExistingUsername();
        let message = await $('[class="MuiAlert-message css-1w0ym84"]');
        await expect(message).toHaveTextContaining('Username Already Taken');

    });

    it( 'T006 - Register with username contain special character', async() => {

        const specialUsername = testdataR.credential;
        const registerFlow = new Register(specialUsername);
        await registerFlow.RegisterSpecialUsername();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
        await expect(message).toHaveTextContaining('No Special Characters');

    });

    it( 'T007 - Register with blank password', async() => {

        const blankpass = testdataR.credential;
        const registerFlow = new Register(blankpass);
        await registerFlow.RegisterNoPassword();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        await expect(message).toHaveText('Password Is Required');

    });

    it( 'T015 - Register with blank transaction password', async() => {

        const blanksecpass = testdataR.credential;
        const registerFlow = new Register(blanksecpass);
        await registerFlow.RegisterNoTransactionPass();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        await expect(message).toHaveText('Transaction Password Is Required');

    });



});
