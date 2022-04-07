import httpClient from 'httpClient';
import { ENDPOINTS } from 'httpClient/constants';
import { ContactFields } from 'types/forms';

class ContactService {
  static questions(question: ContactFields) {
    return httpClient.post(ENDPOINTS.contact, question);
  }
}

export default ContactService;
