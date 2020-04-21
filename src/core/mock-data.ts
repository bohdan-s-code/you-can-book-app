import { v4 as uuidv4 } from 'uuid';
import {
  BusinessData,
  ServicesFormData,
  SocialNetwork,
  Specialists,
  Timeslot,
} from './types';
import { SocialNetworks } from './enums';
import placeOne from '../assets/place1.jpg';
import placeTwo from '../assets/place2.jpg';
import aboutUsImage1 from '../assets/aboutUsImage1.jpg';
import aboutUsImage2 from '../assets/aboutUsImage2.jpg';
import aboutUsImage3 from '../assets/aboutUsImage3.jpg';

export const BUSINESS_NAME = 'ALDOBARBERS';

export const SERVICES_HEADER_TITLE = 'Aldobarbers Barbershop';

export const STEPPER_STEPS: string[] = [
  'Вибір послуги',
  'Вибір спеціаліста',
  'Вибір дати та часу',
  'Підтвердження запису',
];

export const businessData: BusinessData[] = [
  {
    name: 'Aldobarbers Barbershop',
    location: 'Львів, Князя Романа, 28',
    mapParams: { lat: 49.8373993, lng: 24.0320917, zoom: 17 },
    workHours: '10:00 - 21:00',
    photo: placeOne,
    rating: '4.1',
    numberOfReviews: 323,
    reviewsLink:
      'https://www.google.com/maps/place/Aldobarbers+Barbershop+and+School/@50.4508064,30.5187324,17z/data=!3m1!4b1!4m14!1m6!3m5!1s0x40d4ce508efa6af3:0xe0293171a984479!2sAldobarbers+Barbershop+and+School!8m2!3d50.450803!4d30.5209211!3m6!1s0x40d4ce508efa6af3:0xe0293171a984479!8m2!3d50.450803!4d30.5209211!9m1!1b1',
  },
  {
    name: 'Aldobarbers Barbershop',
    location: 'Львів, вулиця Під Дубом 7',
    mapParams: { lat: 49.8502958, lng: 24.0201683, zoom: 17 },
    workHours: '10:00 - 21:00',
    photo: placeTwo,
    rating: '4.7',
    numberOfReviews: 437,
    reviewsLink:
      'https://www.google.com/maps/place/Aldobarbers+Barbershop+and+School/@50.4508064,30.5187324,17z/data=!3m1!4b1!4m14!1m6!3m5!1s0x40d4ce508efa6af3:0xe0293171a984479!2sAldobarbers+Barbershop+and+School!8m2!3d50.450803!4d30.5209211!3m6!1s0x40d4ce508efa6af3:0xe0293171a984479!8m2!3d50.450803!4d30.5209211!9m1!1b1',
  },
];

export const aboutUsContent = {
  photos: [aboutUsImage1, aboutUsImage2, aboutUsImage3],
};

export const aboutUsText = {
  title: 'Aldobarbers',
  content:
    'Барбершоп з якого 15 березня 2014 року почалася історія\nрозвитку культури стрижок в Україні.У січні 2015 року, ми відкрили наш перший Барбершоп\nALDOBARBERS в маленькому підвальчику в центрі Києва. Замість дорогих\nперукарень крісел, ми створили свої - автомобільні. У нас зовсім не\nбуло грошей але були великі амбіції і сильні майстри. У 2017 році ми\nпереїхали в двоповерхове приміщення в історичному центрі Києва, а в\n2019 році відкрили Арт-Барбершоп в центрі Одеси. Тепер у нас 36\nвипусків з 18 країн про кращих Барбера і барбершопах на YouTube.\n  Міжнародна школа Барбера, в якій щорічно навчаються 147 абітурієнтів з\n27 країн, дипломовані майстри міжнародного класу, і як на самому\nпочатку шляху великі амбіції.',
};

export const contactInfo = [
  {
    id: uuidv4(),
    location: {
      value: 'Львів, Князя Романа 28',
      mapParams: { lat: 49.8373993, lng: 24.0320917, zoom: 17 },
    },
    time: '10:00 - 21:00',
    phone: {
      value: '+380970300010',
      label: '+38 097 030 00 10',
    },
  },
  {
    id: uuidv4(),
    location: {
      value: 'Львів, вулиця Під Дубом 7',
      mapParams: { lat: 49.8502958, lng: 24.0201683, zoom: 17 },
    },
    time: '10:00 - 21:00',
    phone: {
      value: '+380970300010',
      label: '+38 097 030 00 10',
    },
  },
];

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    key: SocialNetworks.Facebook,
    link: 'https://www.facebook.com/aldobarberskiev/',
  },
  {
    key: SocialNetworks.Instagram,
    link: 'https://www.instagram.com/aldobarbers_kiev/',
  },
  {
    key: SocialNetworks.Youtube,
    link: 'https://www.youtube.com/channel/UC4qAj4YkE_oSZ6STk54r8Gw',
  },
];

export const servicesFormData: ServicesFormData[] = [
  {
    id: uuidv4(),
    label: 'Стрижка',
    items: [
      {
        id: uuidv4(),
        label: 'Чоловіча стрижка',
        price: 400,
        time: 60,
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Стрижка бороди та вус',
        price: 280,
        time: 30,
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Стрижка машинкою',
        price: 300,
        time: 30,
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Чоловіча стрижка + стрижка бороди',
        price: 300,
        time: 90,
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Стрижка під насадку + FADE',
        price: 250,
        time: 60,
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Дитяча стрижка',
        price: 300,
        time: 60,
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Стрижка вус',
        price: 60,
        time: 20,
        checked: false,
      },
    ],
  },
  {
    id: uuidv4(),
    label: 'Гоління',
    items: [
      {
        id: uuidv4(),
        label: 'Гоління електробритвою',
        price: 150,
        time: 30,
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Королівське гоління',
        price: 400,
        time: 60,
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Гоління голови',
        price: 200,
        time: 60,
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Королівське гоління у ТОП-майстра',
        price: 500,
        time: 60,
        checked: false,
      },
    ],
  },
];

export const specialists: Specialists[] = [
  {
    id: uuidv4(),
    name: 'Олександр М.',
    type: 'Топ-Барбер',
    rating: {
      value: 5,
      numberOfReviews: 102,
    },
    avatar:
      'https://images.yclients.com/masters/origin/1/1c/1ce7494a6d205bc_20191217153015.png',
    selected: false,
  },
  {
    id: uuidv4(),
    name: 'Тарас С.',
    type: 'Топ-Барбер',
    rating: {
      value: 5,
      numberOfReviews: 185,
    },
    avatar:
      'https://images.yclients.com/masters/sm/1/1a/1a1c61be6e84a8f_20191217153422.png',
    selected: false,
  },
  {
    id: uuidv4(),
    name: 'Тарас К.',
    type: 'Топ-Барбер',
    rating: {
      value: 4.5,
      numberOfReviews: 231,
    },
    avatar:
      'https://images.yclients.com/masters/sm/3/3a/3acfa99bf683a73_20180307155114.png',
    selected: false,
  },
  {
    id: uuidv4(),
    name: 'Іван Г.',
    type: 'Топ-Барбер',
    rating: {
      value: 5,
      numberOfReviews: 235,
    },
    avatar:
      'https://images.yclients.com/masters/sm/6/6b/6b4679d102fe0e4_20180621172745.png',
    selected: false,
  },
  {
    id: uuidv4(),
    name: 'Назар Х.',
    type: 'Топ-Барбер',
    rating: {
      value: 4,
      numberOfReviews: 201,
    },
    avatar:
      'https://images.yclients.com/masters/sm/3/36/369b7f11daa8485_20190401200057.png',
    selected: false,
  },
  {
    id: uuidv4(),
    name: 'Юрій К.',
    type: 'Барбер',
    rating: {
      value: 5,
      numberOfReviews: 179,
    },
    avatar:
      'https://images.yclients.com/masters/sm/2/23/23f02ee9058448d_20191017175839.png',
    selected: false,
  },
  {
    id: uuidv4(),
    name: 'Андрій Р.',
    type: 'Барбер',
    rating: {
      value: 4,
      numberOfReviews: 68,
    },
    selected: false,
  },
  {
    id: uuidv4(),
    name: 'Роман К.',
    type: 'Барбер',
    rating: {
      value: 5,
      numberOfReviews: 42,
    },
    avatar:
      'https://images.yclients.com/masters/sm/8/82/82e7c5c36898e51_20190611165449.png',
    selected: false,
  },
  {
    id: uuidv4(),
    name: 'Олег Л.',
    type: 'Барбер',
    rating: {
      value: 5,
      numberOfReviews: 64,
    },
    avatar:
      'https://images.yclients.com/masters/sm/7/77/77ef418de278f60_20181205004107.png',
    selected: false,
  },
  {
    id: uuidv4(),
    name: 'Влад Г.',
    type: 'Барбер',
    rating: {
      value: 4.5,
      numberOfReviews: 90,
    },
    selected: false,
  },
  {
    id: uuidv4(),
    name: 'Юрій Р.',
    type: 'Барбер-Стажер',
    rating: {
      value: 4,
      numberOfReviews: 14,
    },
    selected: false,
  },
];

export const timeSlots: Timeslot[] = [
  { id: uuidv4(), value: '10:00', selected: false },
  { id: uuidv4(), value: '10:30', selected: false },
  { id: uuidv4(), value: '11:00', selected: false },
  { id: uuidv4(), value: '11:30', selected: false },
  { id: uuidv4(), value: '12:00', selected: false },
  { id: uuidv4(), value: '12:30', selected: false },
  { id: uuidv4(), value: '13:00', selected: false },
  { id: uuidv4(), value: '13:30', selected: false },
  { id: uuidv4(), value: '14:00', selected: false },
  { id: uuidv4(), value: '14:30', selected: false },
  { id: uuidv4(), value: '15:00', selected: false },
  { id: uuidv4(), value: '15:30', selected: false },
  { id: uuidv4(), value: '16:00', selected: false },
  { id: uuidv4(), value: '16:30', selected: false },
  { id: uuidv4(), value: '17:00', selected: false },
  { id: uuidv4(), value: '17:30', selected: false },
  { id: uuidv4(), value: '18:00', selected: false },
  { id: uuidv4(), value: '18:30', selected: false },
  { id: uuidv4(), value: '19:00', selected: false },
];

export const userInfoInitialFormValues = {
  name: '',
  phoneNumber: '',
  callBack: false,
  email: '',
  comment: '',
};
