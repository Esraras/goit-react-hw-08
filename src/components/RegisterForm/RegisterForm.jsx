import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { name, email, password } = values;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
  };
 const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    password: Yup.string().min(3).max(15).required(),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form autoComplete="off">
        <label>Name</label>
        <Field name="name" type="text" />
        <label>email</label>
        <Field name="email" type="email" />
        <label>password</label>
        <Field name="password" type="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
