import "./button-component.css";

const ButtonComponent = ({ text, onClick }) => {
  return <button className="button-component">{text}</button>;
};

export default ButtonComponent;
