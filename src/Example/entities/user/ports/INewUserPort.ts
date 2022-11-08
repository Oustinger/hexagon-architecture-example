import { IUserData } from '../user';

export type TNewUserPortCallback = (userData: IUserData) => void;
export type TOnLoadNewUser = (userData: IUserData) => void;

export type TLoadUserData = (onLoad: TOnLoadNewUser) => void;
