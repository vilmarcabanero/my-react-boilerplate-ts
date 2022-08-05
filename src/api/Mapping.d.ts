export interface Mapping {
  path: string;
  method: string;
  headers?: AxiosRequestConfig | undefined;
}
