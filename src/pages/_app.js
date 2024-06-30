/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  const getInitialProps =
    Component.getInitialProps || (() => Promise.resolve({}));

  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
