import React, { useEffect, useState } from 'react';
import newUserAdapter from '../../adapters/user/newUserAdapter';
import shownUsersAdapter from '../../adapters/user/shownUsersAdapter';
import { IUserData, TShownUsers } from '../../entities/user/user';

const Example = (): JSX.Element => {
    const [isPreloading, setIsPreloading] = useState(false);
    const [userData, setUserData] = useState<IUserData>();
    const [shownUsers, setShownUsers] = useState<TShownUsers>(shownUsersAdapter());

    const changeUser = () => {
        setIsPreloading(true);

        newUserAdapter(newUser => {
            setUserData(newUser);

            const newShownUsers = shownUsersAdapter();
            setShownUsers(newShownUsers);

            setIsPreloading(false);
        });
    };

    useEffect(changeUser, []);

    return (
        <div style={{ margin: '20px' }}>
            {isPreloading ? (
                <span>Загрузка...</span>
            ) : (
                <>
                    <span>Текущий: {userData?.name}</span>
                    <button onClick={changeUser} style={{ marginLeft: '20px' }} type="button">
                        Следующий
                    </button>
                </>
            )}
            <br />
            <br />
            <ol reversed>{shownUsers.map(user => <li key={user.name}>{user.name}</li>).reverse()}</ol>
        </div>
    );
};

export default Example;
