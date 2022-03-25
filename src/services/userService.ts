import httpClient from 'httpClient';
import { ENDPOINTS } from 'httpClient/constants';
import User from 'types/user';

class UserService {
  static login(user: User) {
    return httpClient.post(ENDPOINTS.login, user);
  }

  static logout() {
    return httpClient.delete(ENDPOINTS.logout);
  }

  static signUp(user: User) {
    return httpClient.post(ENDPOINTS.signup, user);
  }
}

export default UserService;
