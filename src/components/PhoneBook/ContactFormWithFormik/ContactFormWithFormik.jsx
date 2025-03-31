import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { FaUserPlus } from "react-icons/fa";
import css from "./ContactFormWithFormik.module.css";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
});

const initialValues = { name: "", number: "" };

const ContactFormWithFormik = ({ onSubmit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.form_fieldWrapper}>
          <label htmlFor={nameFieldId} className={css.form__label}>
            Name
          </label>
          <div>
            <Field
              type="text"
              name="name"
              className={css.form__input}
              id={nameFieldId}
            ></Field>
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
        </div>

        <div className={css.form_fieldWrapper}>
          <label htmlFor={numberFieldId} className={css.form__label}>
            Number
          </label>
          <div>
            <Field
              type="tel"
              name="number"
              className={css.form__input}
              id={numberFieldId}
            ></Field>
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
        </div>

        <button type="submit" className={css.form__btn}>
          <FaUserPlus className={css.form__icon} />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactFormWithFormik;

ContactFormWithFormik.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
