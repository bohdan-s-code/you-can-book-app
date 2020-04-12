export interface GoogleMapsSearchParams {
  lat: number;
  lng: number;
  zoom: number;
}

export interface BusinessData {
  name: string;
  location: string;
  mapParams: GoogleMapsSearchParams;
  workHours: string;
  photo: string;
  rating: string;
  numberOfReviews: number;
}

export interface ServiceItem {
  id: string;
  label: string;
  price: number;
  time: number;
  checked: boolean;
}

export interface ServicesFormData {
  id: string;
  label: string;
  items: ServiceItem[];
}

export interface FormState {
  services: ServicesFormData[];
  specialists: Specialists[];
  selectedDate: Date;
  timeSlots: TimeSlots[];
}

export interface StepperState {
  step: number;
}

export interface Specialists {
  id: string;
  name: string;
  type: string;
  rating: {
    value: number;
    numberOfReviews: number;
  };
  avatar?: string;
  selected: boolean;
}

export type TimeSlots = {
  id: string;
  value: string;
  selected: boolean;
};
