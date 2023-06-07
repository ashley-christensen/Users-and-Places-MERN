import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'ul',
            image: "https://dummyimage.com/",
            name: 'Ashley Christensen',
            places: 3
        }
    ];
    return <UsersList items={USERS} />
        ;
};

export default Users;