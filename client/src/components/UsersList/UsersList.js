import UserItem from "../UserItem/UserItem";
import { v4 as uuidv4 } from "uuid";

import "./users-list.css";

const UsersList = ({ users }) => {
  const renderUsers = (users) => {
    return users.map((user) => {
      return <UserItem name={user} key={uuidv4()} />;
    });
  };

  return (
    <ul className="users-list">
      <h4 className="users-list__title">Онлайн: ({users.length})</h4>
      {renderUsers(users)}
    </ul>
  );
};

export default UsersList;
