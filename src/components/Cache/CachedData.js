import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Skeleton,
} from "@mui/material";

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
    <div>
   
      <h2>Cached Data</h2>
      <Grid container spacing={2}>
        {data
          ? data.map((movie) => (
              <Grid item xs={12} sm={6} md={4} key={movie.id}>
                <Box height={100} display="flex" flexDirection="column">
                  <Card
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent style={{ flexGrow: 1 }}>
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "300px",
                        }}
                        variant="h5"
                        component="div"
                      >
                        {movie.movie}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Rating: {movie.rating}
                      </Typography>
                      <a
                        href={movie.imdb_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on IMDb
                      </a>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))
          : Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box height={100} display="flex" flexDirection="column">
                  <Card style={{ flex: 1 }}>
                    <CardContent>
                      <Skeleton width={"100px"} variant="text" />
                      <Skeleton width={"100px"} variant="text" />
                      <Skeleton width={"100px"} variant="text" />
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default CachedData;
