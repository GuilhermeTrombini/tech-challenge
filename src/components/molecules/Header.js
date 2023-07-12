import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { STypography } from "../atoms/Typography";

const Header = () => {
  const navItems = [
    { name: "Table", path: "/table" },
    { name: "Profile", path: "/user" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <STypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tech Challenge
        </STypography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item.name} sx={{ color: "#fff" }} href={item.path}>
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
