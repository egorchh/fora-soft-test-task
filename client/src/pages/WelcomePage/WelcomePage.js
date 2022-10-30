import JoinForm from "../../components/JoinForm/JoinForm";

import "./welcome-page.css";

const WelcomePage = ({ onLogin }) => {
  return (
    <article className="welcome-page">
      <div className="welcome-page__wrapper">
        <h1 className="welcome-page__title">Welcome to JunoChat</h1>
        <p className="welcome-page__description">
          Here you can chat with people in real time
        </p>
        <JoinForm onLogin={onLogin} />
      </div>
    </article>
  );
};

export default WelcomePage;
