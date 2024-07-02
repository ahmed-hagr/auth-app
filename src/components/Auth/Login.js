import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
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
      await Cookies.set("token", true, { expires: 1 }); // Expires in 1 day
      router.push("/");
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting, errors, touched }) => (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-2xl font-bold-800 mb-6 text-center">Sign in to your account</h1>
          <Form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-900">
                Email address
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                required
                className={`block w-full pl-3 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-100 sm:text-sm sm:leading-6 ${
                  errors.email && touched.email ? "ring-red-500" : "ring-gray-300"
                }`}
              />
              {errors.email && touched.email ? (
                <span className="text-red-500 text-left text-sm mt-1">{errors.email}</span>
              ) : null}
            </div>

            <div>
              <label htmlFor="password" className="block text-left text-sm font-medium text-gray-900">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                required
                className={`block w-full pl-3 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-100 sm:text-sm sm:leading-6 ${
                  errors.password && touched.password ? "ring-red-500" : "ring-gray-300"
                }`}
              />
              {errors.password && touched.password ? (
                <span className="text-red-500 text-left text-sm mt-1">{errors.password}</span>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full justify-center rounded-md bg-custom-bg  px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Login;
