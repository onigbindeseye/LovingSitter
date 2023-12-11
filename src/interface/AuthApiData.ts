import { User } from './User';
import { ProfileDetails } from './Profile';

export interface AuthApiDataSuccess {
  message: string;
  user: User;
  token: string;
}

export interface AuthApiData {
  error?: { message: string };
  success?: AuthApiDataSuccess;
}

export interface ProfileDetailApiDataSuccess {
  message: string;
  profile: ProfileDetails;
}

export interface ProfileDetailApiData {
  error?: { message: string };
  success?: ProfileDetailApiDataSuccess;
}
