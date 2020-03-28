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

export const getStepContent = (step: number): string => {
  switch (step) {
    case 0:
      return 'Step 1: Select campaign settings...';
    case 1:
      return 'Step 2: What is an ad group anyways?';
    case 2:
      return 'Step 3: This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
};
