import UserItem from "../UserItem/UserItem";

import "./users-list.css";

const UsersList = () => {
  return (
    <ul className="users-list">
      <h4 className="users-list__title">Users:</h4>
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </ul>
  );
};

export default UsersList;
