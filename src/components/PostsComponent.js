import React from 'react'
import { Card,  Typography, Grid, Container } from "@mui/material";

const PostsComponent = ({data}) => {
  return (
    <Container>
    <h1>Server-Side Rendered Page</h1>
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card
            sx={{
              height: "200px",
              overflowY: "auto",
              padding:"15px"
            }}
          >
            <Typography variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.email}
            </Typography>
            <Typography variant="body1" component="p">
              {item.body}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  )
}

export default PostsComponent