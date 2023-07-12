import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: "0 auto",
  },
  searchInput: {
    marginBottom: 16,
  },
});

const SearchInput = ({ searchTerm, handleSearchChange }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.searchInput}
      label="Search"
      variant="outlined"
      size="small"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchInput;
