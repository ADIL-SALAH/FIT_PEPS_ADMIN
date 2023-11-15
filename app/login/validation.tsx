import * as Yup from 'yup';

export const logInSchema = Yup.object({

    username: Yup.string().min(2).max(14).required("ENTER USERNAME"),
    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')

})