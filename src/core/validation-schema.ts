import * as Yup from 'yup';

const phoneRegExp = new RegExp(
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
);

export const userInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Введіть ім'я")
    .min(1)
    .max(25),
  lastName: Yup.string(),
  phoneNumber: Yup.string()
    .required('Введіть номер телефону')
    .matches(
      phoneRegExp,
      'Введіть номер телефону у форматі +38 (###) ### ####'
    ),
  email: Yup.string().email(),
});
