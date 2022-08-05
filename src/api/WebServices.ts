import createApi from '../createApi';
import { API } from '../config';
import { ApiCall } from './ApiCall';
import { IParams, Mapping } from './types';

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
      path: '',
      method: 'get',
    },
    // [INPUT NEW MAPPING METHOD HERE] <
  };

  const call = (type: ApiCall, params: IParams, customPath: string = '') => {
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
        if (!params) return api.get(path);
        else return api.get(`${path}/${params}`);
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
  };

  return {
    call,
    setHeader,
  };
};

export default WebServices;
