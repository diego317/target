export interface loginResponse {
  data: {
    id: number;
    email: string;
    provider: string;
    uid: string;
    username: string;
  }
}