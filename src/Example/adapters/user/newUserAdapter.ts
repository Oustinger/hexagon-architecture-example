import { newUserPort } from '../../entities/user/ports/newUserPort';
import { TNewUserPortCallback } from '../../entities/user/ports/INewUserPort';

function newUserAdapter(callback: TNewUserPortCallback): void {
    newUserPort(callback);
}

export default newUserAdapter;
