export interface IUserData {
    name: string;
}
export type TShownUsers = Array<IUserData>;

const shownUsers: TShownUsers = [];

export default shownUsers;
