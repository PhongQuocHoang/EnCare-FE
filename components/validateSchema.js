import * as Yup from 'yup';
export const validateSchema = Yup.object().shape({
    name: Yup.string().min(5, 'Too short').max(50, 'Too long').required('Required'),
    phone: Yup.string()
        .required('Required')
        .max(10, 'Your phone can only have up to 10 digits')
        .min(10, 'Your phone has at least 10 digits'),
    pass: Yup.string().required('Required').min(6, 'Your password has at least 6 characters'),
    repass: Yup.string().min(6).required('Required'),
});
