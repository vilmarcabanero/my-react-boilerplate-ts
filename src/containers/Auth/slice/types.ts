/* --- STATE --- */
export interface AuthState {
  loginPayload: LoginPayload;
}
export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginResponse {
  message?: string;
  accessToken?: string;
  statusCode?: string;
  error?: string;
}
export interface RegisterResponse {
  message?: string;
  accessToken?: string;
  statusCode?: string;
  error?: string;
}
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarColor: number;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
