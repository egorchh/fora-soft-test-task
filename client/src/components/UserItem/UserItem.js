import "./user-item.css";

const UserItem = ({ name }) => {
  return (
    <li className="user-item">
      <p className="user-item__name">{name}</p>
    </li>
  );
};

export default UserItem;
