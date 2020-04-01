import { GoogleMapsSearchParams } from '../core/types';

export const generateMapsLink = (
  data: GoogleMapsSearchParams,
  address: string
): string => {
  const { lat, lng, zoom } = data;
  return `https://www.google.com/maps/place/${address
    .split(' ')
    .join(',+')}/@${lat},${lng},${zoom}z`;
};
