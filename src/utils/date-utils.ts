import { MONTHS, WEEK_DAYS } from '../core/constants';

export const formatDate = (date: Date): string => {
  const monthName = MONTHS[date.getMonth()];
  const dayName = WEEK_DAYS[date.getDay()];
  return `${dayName} ${date.getDate()} ${monthName} ${date.getFullYear()}`;
};
