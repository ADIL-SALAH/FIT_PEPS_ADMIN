import * as Yup from 'yup';

export const SignUpSchema = Yup.object({

    name: Yup.string().required("name required"),
    tagline: Yup.string().required("tagline required"),
    address: Yup.string().required("address required"),
    mobile: Yup.string().required('mobile number required').matches(/^[6-9]\d{9}$/, { message: "Please enter valid number.", excludeEmptyString: false }),
    email: Yup.string().required("email required").email(),
    tax_type: Yup.string().required('product code required').min(2, 'code minimum 2 letters').max(7, 'code minimum 7 letters'),
    tax_no: Yup.string().required("taxnumber required").min(4, 'minimum 4 letters required').max(7, 'maximum 7 letters required'),
    username: Yup.string().required('username required'),
    password: Yup.string().required('password required')

})