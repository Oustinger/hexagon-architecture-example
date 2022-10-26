import { newUserPort, TGetNewUserCallbackFunction } from '../entities/user';

function newUserAdapter(callback: TGetNewUserCallbackFunction) {
    newUserPort(callback);
}

export default newUserAdapter;
