export interface RegisterSuccess {
  accessToken: string;
  message: string;
}

export interface RegisterError {
  statusCode: string;
  message: string;
  error: string;
}
