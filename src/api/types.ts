import { Users } from "../store/types/users";
// result codes
export enum ResultCodes {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}

export interface ApiTypes {
  resultCode: ResultCodes | ResultCodeForCaptcha;
  messages?: string[];
}

// auth types

export interface AuthMe extends ApiTypes {
  data: {
    id: number;
    email: string;
    login: string;
  };
}

export interface CaptchaResponseType {
  url: string;
}

// usersApi

export interface getUserData {
  items: Users[];
  totalCount: number;
  error: string;
}
