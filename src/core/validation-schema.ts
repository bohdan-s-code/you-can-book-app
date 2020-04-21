import * as Yup from 'yup';

const phoneRegExp = new RegExp(
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
);

export const userInfoSchema = Yup.object().shape({
  name: Yup.string()
    .required("Введіть ім'я")
    .min(1)
    .max(25),
  phoneNumber: Yup.string()
    .required('Введіть номер телефону')
    .matches(
      phoneRegExp,
      'Введіть номер телефону у форматі +38 (###) ### ####'
    ),
  callBack: Yup.boolean(),
  email: Yup.string().email('Введіть правильну адресу електронної пошти'),
  comment: Yup.string(),
});
