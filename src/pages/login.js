import React from "react";
import Login from "../components/Auth/Login";
import { parse } from "cookie"; // Make sure to import the parseCookies method

export const getServerSideProps = async (context) => {
  const { req } = context;
  const cookies = parse(req.headers.cookie || "");

  const token = cookies.token;

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Will be passed to the page component as props
  };
};
const LoginPage = () => {
  return (
    <main className="text-center h-screen flex justify-center items-center">
      <Login />
    </main>
  );
};

export default LoginPage;
