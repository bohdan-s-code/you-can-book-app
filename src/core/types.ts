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
  price: string;
  time: string;
  checked: boolean;
}

export interface ServicesFormData {
  id: string;
  label: string;
  items: ServiceItem[];
}

export interface FormState {
  services: ServicesFormData[];
}

export interface Specialists {
  name: string;
  type: string;
  rating: {
    value: number;
    numberOfReviews: number;
  };
  avatar?: string;
}
