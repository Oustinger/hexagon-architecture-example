import axios, { AxiosResponse } from 'axios';
import { TLoadUserData } from '../entities/user/ports/INewUserPort';

interface IResult {
    name: {
        title: string;
        first: string;
        last: string;
    };
}

interface IResponse {
    results: Array<IResult>;
}

const loadUserData: TLoadUserData = callback => {
    axios.get('https://randomuser.me/api/').then(({ data }: AxiosResponse<IResponse>): void => {
        const { name } = data.results[0];
        const fullName = `${name.title} ${name.first} ${name.last}`;

        callback({ name: fullName });
    });
};

export default loadUserData;
