import dayjs from 'dayjs';

export function yearMonthDayFormat(date: string | null): string | null {
  if (typeof date !== 'string' || !date) {
    return null;
  }

  return dayjs(date).format('YYYY-MM-DD');
}
