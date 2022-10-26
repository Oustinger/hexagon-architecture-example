import axios from 'axios';
import { TLoadUserData } from '../entities/userInterface';

const loadUserData: TLoadUserData = callback => {
    axios.get('https://randomuser.me/api/').then((res: any) => {
        const name = res.data.results[0].name;
        const fullName = `${name.title} ${name.first} ${name.last}`;

        return callback({ name: fullName });
    });
};

export default loadUserData;
