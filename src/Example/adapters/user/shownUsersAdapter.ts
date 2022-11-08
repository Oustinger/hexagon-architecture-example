import { shownUsersPort } from '../../entities/user/ports/shownUsersPort';

function shownUsersAdapter(): ReturnType<typeof shownUsersPort> {
    return shownUsersPort();
}

export default shownUsersAdapter;
