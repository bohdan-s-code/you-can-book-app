import { ServiceData } from './types';

export const SERVICE_NAME = '[Назва закладу]';

export const servicesData: ServiceData[] = [
  {
    name: 'Назва Закладу #1',
    location: 'Львів, вулиця Григоровича 6',
    mapParams: { lat: 49.8358817, lng: 24.0279784, zoom: 17 },
    workHours: '9:00 - 21:00',
    photo: '',
    rating: '8.9',
    numberOfReviews: 73,
  },
  {
    name: 'Назва Закладу #2',
    location: 'Львів, вулиця Чайковського 21',
    mapParams: { lat: 49.8368579, lng: 24.0262801, zoom: 17 },
    workHours: '9:00 - 21:00',
    photo: '',
    rating: '7.8',
    numberOfReviews: 56,
  },
];

export const adverts: string[] = ['Акції %', 'Акції %'];
