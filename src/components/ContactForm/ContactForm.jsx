import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../../redux/contacts/operations.js";
import { selectedContacts } from "../../redux/contacts/selectors.js";

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectedContacts);
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;

    const exists = Array.isArray(contacts)
      ? contacts.some((c) => c.name.toLowerCase() === name.toLowerCase())
      : false;
    if (exists) {
      alert(`${name} zaten rehberde kayıtlı.`);
      return;
    }

    dispatch(addContacts({ name, number }));

    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).max(15).required(),
  });

  return (
    <div className="formDiv">
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className="form">
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />

          <label htmlFor={numberFieldId}>Number</label>
          <Field type="tel" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="span" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
