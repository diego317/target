export enum GenderEnum {
  female = "female",
  male = "male",
  other = "other"
}

export interface SignUpFields {
  username: string;
  email: string;
  gender: GenderEnum;
  password: string;
  confirmPassword: string;
};

export interface LoginFields {
  email: string;
  password: string;
}
