import "./message-item.css";

const MessageItem = () => {
  return (
    <li className="message-item">
      <div className="message-item__body">
        <p className="message-item__body-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
          reprehenderit veniam nam ut voluptas molestias minus! Vitae delectus,
          deserunt atque adipisci, quas assumenda, illo cum nobis veritatis
          corporis fugiat! Perspiciatis!
        </p>
      </div>
      <p className="message-item__author">Egor</p>
    </li>
  );
};

export default MessageItem;
