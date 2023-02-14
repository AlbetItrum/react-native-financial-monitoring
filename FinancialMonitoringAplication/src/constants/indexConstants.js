export const CALENDAR = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

// adding a unique ID for each task
export const TASK_ID = 'id' + new Date().getDate() + new Date().getTime();

export const NEW_DATE = new Date();

export const SYNC_TIME_IS_NOW = NEW_DATE.toLocaleTimeString();

// getting month and year to filter tasks
export const DATE_STATE = new Date()
  .toLocaleDateString()
  .slice(3, new Date().toLocaleDateString().length);

export const URL_CURRNT_BALANCE =
  'https://sheets.googleapis.com/v4/spreadsheets/1g9jSfA4q4igLQShiEgcrJv_JyNrBUMANeYKBBpWFR7U/values/CURRENT_BALANCE!';

export const URL_FILTER_POSTS =
  'https://script.google.com/macros/s/AKfycbxn6aoY4M8RnC57ebsjNZRO9yr2WOjagKJwucc4HhY3g_SfZ3Np8BXY3iEPJHKlUYsR/';

export const URL_GET_CATEGORIES =
  'https://sheets.googleapis.com/v4/spreadsheets/1g9jSfA4q4igLQShiEgcrJv_JyNrBUMANeYKBBpWFR7U/values/CATEGORIES!';

export const URL_FILTER_CATEGORY =
  'https://script.google.com/macros/s/AKfycbwORmfrrjVt54qLfxF-Sj7p2261E406nHvb6JTsf8SbM4-L5FDd6FAqFIAsUgSYedxM/';

export const URL_FINANCIAL =
  'https://sheets.googleapis.com/v4/spreadsheets/1g9jSfA4q4igLQShiEgcrJv_JyNrBUMANeYKBBpWFR7U/values/Financial!';

export const URL_DELETE_POST =
  'https://script.google.com/macros/s/AKfycbzizxnaze4ei0hmOTOKIvHXaKl1j_qI-Zct3U1YF24oaQehKk4zI-n3hzdwHtoNN7wV/';

export const GOOGLE_SHEET_URL = 'https://sheets.googleapis.com/v4/spreadsheets';

export const GOOGLE_DRIVE_URL = 'https://www.googleapis.com/drive/v3/files?';
