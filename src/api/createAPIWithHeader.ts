import { API } from '../config';

import WebServices from './WebServices';

export default function createAPIWithHeader() {
  const api = WebServices(API.SERVER.WEBSERVICES.OPTIONS);
  const token = localStorage.getItem('authToken');
  api.setHeader('Authorization', `Bearer ${token}`);
  return api;
}
