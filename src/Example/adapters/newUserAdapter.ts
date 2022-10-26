import { newUserPort } from '../entities/user';
import { TGetNewUserCallbackFunction } from "../entities/userInterface";

function newUserAdapter(callback: TGetNewUserCallbackFunction) {
    newUserPort(callback);
}

export default newUserAdapter;
