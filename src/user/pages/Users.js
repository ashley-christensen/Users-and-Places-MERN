import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Ashley Christensen',
      image:
        'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
