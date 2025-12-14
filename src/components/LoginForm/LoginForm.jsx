import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Field, Form } from "formik";

function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {

    const { email, password } = values;
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>email</label>
        <Field name="email" type="email" />
        <label>password</label>
        <Field name="password" type="password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
