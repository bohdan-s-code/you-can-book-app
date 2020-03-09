export interface GoogleMapsSearchParams {
  lat: number;
  lng: number;
  zoom: number;
}

export interface ServiceData {
  name: string;
  location: string;
  mapParams: GoogleMapsSearchParams;
  workHours: string;
  photo: string;
  rating: string;
  numberOfReviews: number;
}
