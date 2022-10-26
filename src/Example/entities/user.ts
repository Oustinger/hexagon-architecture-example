import loadUserData from '../services/loadUserData';
import { TGetNewUserCallbackFunction, TOnLoadNewUser, TShownUsers } from './userInterface';

const shownUsers: TShownUsers = [];

export const shownUsersPort = (): TShownUsers => shownUsers;

export const newUserPort = (callback: TGetNewUserCallbackFunction): void => {
    const onLoad: TOnLoadNewUser = userData => {
        shownUsers.push(userData);

        callback(userData);

        // вопрос в зал: как это типизировать?
        // return 123;
    };

    loadUserData(onLoad);
};
