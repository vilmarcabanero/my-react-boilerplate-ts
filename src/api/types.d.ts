export interface Mapping {
  path: string;
  method: string;
  headers?: AxiosRequestConfig | undefined;
}

export interface IParams {
  id?: string;
  data?: any;
}
