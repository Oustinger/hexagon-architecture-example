import { newUserPort } from '../entities/user';
import { TNewUserPortCallback } from '../entities/userInterface';

function newUserAdapter(callback: TNewUserPortCallback) {
    newUserPort(callback);
}

export default newUserAdapter;
