/* --- STATE --- */
export interface AuthState {
  loginPayload: LoginPayload;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export const initialLoginPayload = {
  email: '',
  password: '',
};
