import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";

import "./join-form.css";

const JoinForm = () => {
  const submitHandler = (values) => {
    axios.post("/rooms", {
      roomId: values.roomId,
      userName: values.name,
    });
  };

  return (
    <Formik
      initialValues={{ roomId: "", name: "" }}
      validationSchema={Yup.object({
        roomId: Yup.string().required("Обязательное поле"),
        name: Yup.string()
          .required("Обязательное поле")
          .min(3, "Не менее трёх символов"),
      })}
      onSubmit={(values, { resetForm }) => {
        submitHandler(values);
        resetForm({ values: "" });
      }}
    >
      {({ isValid }) => (
        <Form className="join-form">
          <ErrorMessage
            name="roomId"
            component="div"
            className="join-form__error"
          />
          <Field
            type="number"
            name="roomId"
            className="join-form__input"
            placeholder="Room ID"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="join-form__error"
          />
          <Field
            type="text"
            name="name"
            className="join-form__input"
            placeholder="Your name"
          />
          <button
            type="submit"
            disabled={!isValid}
            className="join-form__button"
          >
            Start chatting
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default JoinForm;
