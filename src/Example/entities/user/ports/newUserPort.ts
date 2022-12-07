import loadUserData from '../../../services/loadUserData';
import shownUsers from '../user';
import { TNewUserPortCallback, TOnLoadNewUser } from './INewUserPort';
import { IPortTemplate } from '../../../../Shared/interfaces/IPortTemplate';

export const newUserPort: IPortTemplate<unknown, TNewUserPortCallback> = (callback: TNewUserPortCallback) => {
    const onLoad: TOnLoadNewUser = userData => {
        shownUsers.push(userData);

        callback(userData);
    };

    loadUserData(onLoad);
};
