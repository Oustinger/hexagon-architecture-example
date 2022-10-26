export interface IUserData {
    name: string;
}
export type TShownUsers = Array<IUserData>;
export type TNewUserPortCallback = (userData: IUserData) => void;
export type TOnLoadNewUser = (userData: IUserData) => void;
export type TLoadUserData = (onLoad: TOnLoadNewUser) => void;
