import ButtonComponent from "../../components/ui/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/ui/InputComponent/InputComponent";

import socket from "../../socket";

import "./welcome-page.css";

const WelcomePage = () => {
  return (
    <article className="welcome-page">
      <div className="welcome-page__wrapper">
        <h1 className="welcome-page__title">Welcome to JunoChat</h1>
        <p className="welcome-page__description">
          Here you can chat with people in real time
        </p>
        <InputComponent placeholder={"Room ID"} />
        <InputComponent placeholder={"Your name"} />
        <ButtonComponent text={"Start chatting"} />
      </div>
    </article>
  );
};

export default WelcomePage;
