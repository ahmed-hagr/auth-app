import React, { useState, useEffect } from "react";
import axios from "axios";

const CachedData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem("apiData");
      if (cachedData) {
        setData(JSON.parse(cachedData));
      } else {
        const response = await axios.get("https://dummyapi.online/api/movies");
        localStorage.setItem("apiData", JSON.stringify(response.data));
        setData(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 pt-10 mt-10 mb-5">
      <h2 className="text-2xl font-semibold mb-4 text-center ">Movies Data</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data
          ? data.map((movie) => (
              <div className="p-4 border rounded shadow-sm flex flex-col" key={movie.id}>
                <div className="flex-grow">
                  <h5 className="text-lg truncate max-w-xs font-medium">
                    {movie.movie}
                  </h5>
                  <p className="text-gray-600 mt-1">
                    Rating: {movie.rating}
                  </p>
                  <a
                    href={movie.imdb_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition duration-300"
                  >
                    View on IMDb
                  </a>
                </div>
              </div>
            ))
          : Array.from(new Array(6)).map((_, index) => (
              <div className="p-4 border rounded shadow-sm flex flex-col" key={index}>
                <div className="animate-pulse flex flex-col space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CachedData;
