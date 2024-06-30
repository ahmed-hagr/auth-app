// components/Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Button from "@mui/material/Button";
import Cookie from "js-cookie";

const Navbar = () => {
  const token = Cookie.get("token"); 

  const isAuth = token;
  const style = {
    color: "#f1f1f1",
    textDecoration: " none",
  };
  return (
    <AppBar sx={{ marginBottom: "30px !important" }} position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        {isAuth ? (
          <React.Fragment>
            <Button className="btn-min" color="secondary">
              <Link style={style} href="/" passHref>
                <Typography variant="button" color="inherit">
                  Main
                </Typography>
              </Link>
            </Button>
            <Button className="btn-min" color="inherit">
              <Link style={style} href="/Posts" passHref>
                <Typography variant="button" color="success">
                Posts
                </Typography>
              </Link>
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button className="btn-min" color="inherit">
              <Link style={style} href="/Posts" passHref>
                <Typography variant="button" color="success">
                Posts
                </Typography>
              </Link>
            </Button>
            <Button className="btn-min" color="inherit">
              <Link style={style} href="/login" passHref>
                <Typography variant="button" color="success">
                  Login
                </Typography>
              </Link>
            </Button>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
