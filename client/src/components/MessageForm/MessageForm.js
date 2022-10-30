import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import sendSVG from "../../assets/send.svg";

import "./message-form.css";

const MessageForm = () => {
  return (
    <Formik
      initialValues={{ message: "" }}
      validationSchema={Yup.object({
        roomId: Yup.string().required("Обязательное поле"),
      })}
      onSubmit={(values, { resetForm }) => {
        resetForm({ values: "" });
      }}
    >
      {({ isValid }) => (
        <Form className="message-form">
          <Field
            as="textarea"
            type="text"
            name="message"
            className="message-form__input"
            placeholder="Enter your message"
            rows="3"
          />
          <button
            type="submit"
            disabled={!isValid}
            className="message-form__button"
          >
            <img
              className="message-form__button-img"
              src={sendSVG}
              alt="Кнопка отправки сообщения"
            />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MessageForm;
