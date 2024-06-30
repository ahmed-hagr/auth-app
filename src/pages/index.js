import React from "react";
import CachedData from "../components/Cache/CachedData";
import { parse } from "cookie";
import Head from "next/head"; // Import the Head component

export const getServerSideProps = async (context) => {
  const { req } = context;
  const cookies = parse(req.headers.cookie || "");
  const token = cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Will be passed to the page component as props
  };
};

const Main = () => {
  return (
    <>
      <Head>
        <title>Main Page</title>
        <meta
          name="description"
          content="Overview of the cached data provided by our service."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="caching, data insights, movies , " />

        <meta property="og:title" content="Main Page" />
        <meta
          property="og:description"
          content="Learn more about our caching capabilities and data insights."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="url_to_an_image_that_represents_the_page"
        />
      </Head>
      <main>
        <CachedData />
      </main>
    </>
  );
};

export default Main;
