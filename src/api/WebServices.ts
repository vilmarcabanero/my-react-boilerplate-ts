import createApi from '../createApi';
import { API } from '../config';
import { ApiCall } from './ApiCall';
import { Mapping } from './Mapping';

const WebServices: any = (options = API.SERVER.WEBSERVICES.OPTIONS) => {
  const api = createApi(options);

  const mapping = {
    login: {
      path: '/auth/login',
      method: 'post',
    },
    register: {
      path: '/auth/register',
      method: 'post',
    },
    someAction: {
      path: '',
      method: 'get',
    },
    getUser: {
      path: '/auth/user',
      method: 'getNoParam',
    },
  };

  const call = (type: ApiCall, params: any = {}, customPath: string = '') => {
    const { method, path, headers }: Mapping = mapping[type];
    switch (method) {
      case 'update':
        return api.put(`${path}/${params.id}`, params.data);
      case 'patch':
        return api.patch(`${path}/${params.id}`, params.data);
      case 'patchNoParam':
        return api.patch(`${path}`, params);
      case 'delete':
        return api.delete(`${path}/${params}`);
      case 'get':
        return api.get(`${path}/${params}`);
      case 'getNoParam':
        return api.get(path);
      case 'post':
        return api.post(customPath === '' ? path : customPath, params, headers);
      case 'getSearch':
        return api.get(customPath, params, headers);
      case 'put':
        return api.put(`${path}/${params.id}`, params.data);
      default:
        break;
    }
    return false;
  };

  const setHeader = (key: string, value: string) => {
    api.setHeader(key, value);
    console.log('key', key);
    console.log('value', value);
  };

  return {
    call,
    setHeader,
  };
};

export default WebServices;
