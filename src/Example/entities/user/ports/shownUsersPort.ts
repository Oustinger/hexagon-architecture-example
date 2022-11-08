import shownUsers, { TShownUsers } from '../user';
import { IPortTemplate } from '../../../../Shared/interfaces/IPortTemplate';

export const shownUsersPort: IPortTemplate<unknown, unknown, TShownUsers> = () => shownUsers;
