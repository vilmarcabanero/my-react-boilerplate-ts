import { ThemeState } from 'styles/theme/slice/types';
import { AuthState } from 'containers/Auth/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] <

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  theme?: ThemeState;
  auth?: AuthState;
  // [INSERT NEW REDUCER KEY ABOVE] <
}
