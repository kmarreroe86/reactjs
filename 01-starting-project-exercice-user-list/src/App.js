import React, { useState } from 'react';
import AddUser from './components/AddUserForm/AddUser';
import UserList from './components/UserList/UserList';


function App() {
  const [userList, setUserList] = useState([]);
  
  const userListHandler = (user) => {
    user.id = Math.random().toString();
    setUserList((prevUsers) => {
      return [...prevUsers, user]
    });
  };

  return (
    <div>
      <AddUser onUserAdded={userListHandler} />

      <UserList users={userList} />
    </div>
  );
}

export default App;
