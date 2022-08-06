import { object, string } from 'yup';

export const GOOGLE_LOGO_URL =
  'https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.346/static/media/google-logo.e086107b.svg';

export const MICROSOFT_LOGO_URL =
  'https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.346/static/media/microsoft-logo.42b61fa1.svg';

export const FIRST_NAME_REQUIRED = "First name can't be empty.";
export const LAST_NAME_REQUIRED = "Last name can't be empty.";
export const EMAIL_REQUIRED = "Email can't be empty.";
export const VALID_EMAIL_REQUIRED = 'Valid email is required.';
export const PASSWORD_REQUIRED = "Password can't be empty.";
export const CONFIRM_PASSWORD_REQUIRED = "Confirm password can't be empty.";
export const PASSWORDS_DONOT_MATCH = 'Passwords do not match.';
export const EMAIL_NOT_REGISTERED = 'Email is not yet registered.';
export const PASSWORD_INCORRECT = 'Password is incorrect.';
export const EMAIL_ALREADY_REGISTERED = 'Email is already registered.';
export const PASSWORD_TOO_SHORT =
  'Password should be at least 8 characters long.';

export const validationSchema = object({
  email: string().required(EMAIL_REQUIRED).email(VALID_EMAIL_REQUIRED),
  password: string().required(PASSWORD_REQUIRED).min(8, PASSWORD_TOO_SHORT),
});
