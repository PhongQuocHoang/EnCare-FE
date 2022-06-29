import * as Yup from 'yup';
export const validateSchema = Yup.object().shape({
    name: Yup.string().min(5, 'Too short').max(50, 'Too long').required('Required'),
    phone: Yup.string().min(10).max(10).required('Required'),
    pass: Yup.string().min(6).required('Required'),
    repass: Yup.string().min(6).required('Required'),
});
