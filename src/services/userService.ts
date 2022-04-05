import httpClient from 'httpClient';
import { ENDPOINTS } from 'httpClient/constants';
import { SignUpFields } from 'types/forms';

class UserService {
  static login(user: any) {
    return httpClient.post(ENDPOINTS.login, user);
  }

  static logout() {
    return httpClient.delete(ENDPOINTS.logout);
  }

  static signUp(user: SignUpFields) {
    return httpClient.post(ENDPOINTS.signup, { user });
  }
}

export default UserService;
