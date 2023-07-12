import React from "react";
import { makeStyles } from "@mui/styles";
import { STypography } from "../components/atoms/Typography";
import { Button, Link } from "@mui/material";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  },
  heading: {
    fontSize: "4rem",
    marginBottom: "2rem",
  },
  button: {
    marginTop: "20px",
  },
});

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <STypography variant="h1" className={classes.heading}>
        404
      </STypography>
      <STypography variant="h5" align="center">
        Oops! Page not found.
      </STypography>
      <Button
        component={Link}
        href="/table"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Go To Table
      </Button>
    </div>
  );
};

export default NotFound;
