import Register from '../flow/Register';

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

});
