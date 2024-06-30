import React from "react";
import Head from "next/head";
import { getCachedData, setCachedData } from "../hocks/usecache";
import PostsComponent from "../components/postsComponent";

const CACHE_KEY = "apiData";
const CACHE_TTL = 60 * 1000; // 1 minute

const Posts = ({ data, error }) => {
  return (
    <>
      <Head>
        <title>About Posts</title>
        <meta name="description" content="Explore ssr ,  detailed posts and comments fetched directly from an API. " />
        <meta name="keywords" content="posts, comments, real-time, social data, user interactions" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="About Posts" />
        <meta property="og:description" content="Detailed insight into user comments and interactions on our platform." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="url_to_an_image_that_represents_the_page" />
      </Head>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <PostsComponent data={data} />
      )}
    </>
  );
};

export async function getServerSideProps() {
  // Try to get data from cache
  const cachedData = getCachedData(CACHE_KEY);
  if (cachedData) {
    return { props: { data: cachedData } };
  }

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=1"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    // Cache the data
    setCachedData(CACHE_KEY, data, CACHE_TTL);

    return { props: { data } };
  } catch (error) {
    return { props: { error: error.message } };
  }
}

export default Posts;
