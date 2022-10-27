import "./input-component.css";

const InputComponent = ({ placeholder }) => {
  return (
    <input type="text" placeholder={placeholder} className="input-component" />
  );
};

export default InputComponent;
