import axios from 'axios';

import { APP_API_LEGO_URL, APP_API_KEY_LEGO } from '@/config/env';

export const apiLegoClient = axios.create({
  baseURL: APP_API_LEGO_URL,
  responseType: 'json',
  headers: {
    Authorization: `key ${APP_API_KEY_LEGO}`,
  },
});
