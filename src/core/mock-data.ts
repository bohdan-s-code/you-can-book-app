import { v4 as uuidv4 } from 'uuid';
import { BusinessData, ServicesFormData, Specialists, Timeslot } from './types';
import placeOne from '../assets/place1.jpg';

export const BUSINESS_NAME = 'ALDOBARBERS';

export const STEPPER_STEPS = [
  'Вибір послуги',
  'Вибір спеціаліста',
  'Вибір дати та часу',
  'Підтвердження запису',
];

export const businessData: BusinessData[] = [
  {
    name: 'Назва Закладу #1',
    location: 'Львів, Князя Романа, 28',
    mapParams: { lat: 49.8373993, lng: 24.0320917, zoom: 17 },
    workHours: '9:00 - 20:00',
    photo: placeOne,
    rating: '4.5',
    numberOfReviews: 400,
    reviewsLink:
      'https://www.google.com/maps/place/Solidol+Barbershop/@49.8503658,24.0201567,17z/data=!4m15!1m7!3m6!1s0x473add0a524a99a7:0x4f6e3e2da2da2f66!2z0LLRg9C70LjRhtGPINCf0ZbQtCDQlNGD0LHQvtC8LCA3LCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!3b1!8m2!3d49.8502958!4d24.022357!3m6!1s0x473add0a51ff8a77:0xea42fcc139efdbb7!8m2!3d49.8503624!4d24.0223454!9m1!1b1',
  },
  {
    name: 'Назва Закладу #2',
    location: 'Львів, вулиця Під Дубом 7',
    mapParams: { lat: 49.8502958, lng: 24.0201683, zoom: 17 },
    workHours: '10:00 - 21:00',
    photo: placeOne,
    rating: '4.7',
    numberOfReviews: 437,
    reviewsLink:
      'https://www.google.com/maps/place/%D0%A1%D0%BE%D0%BB%D1%96%D0%B4%D0%BE%D0%BB/@49.8375477,24.0307645,17z/data=!3m1!4b1!4m15!1m7!3m6!1s0x473add6ecd2f1443:0x8337e384b330c196!2z0LLRg9C70LjRhtGPINCa0L3Rj9C30Y8g0KDQvtC80LDQvdCwLCAyOCwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!3b1!8m2!3d49.8374885!4d24.0325972!3m6!1s0x473add693369dbef:0x960cb6353857edf0!8m2!3d49.8375443!4d24.0329532!9m1!1b1',
  },
];

export const adverts: string[] = ['Акції %', 'Акції %'];

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
