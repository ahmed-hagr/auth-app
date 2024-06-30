import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  Container,
  Typography,
  TextField as MuiTextField,
} from "@mui/material";
import Cookies from "js-cookie";

import { useRouter } from "next/router";
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
});

const Login = () => {
  const router = useRouter();
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      //   await localStorage.setItem("token", true);
      await Cookies.set("token", true, { expires: 1 }); // Expires in 1 day

      router.push("/");
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <Form>
            <MuiTextField
              name="email"
              type="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
              margin="normal"
            />
            <MuiTextField
              name="password"
              type="password"
              label="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
