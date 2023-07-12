import { Typography } from "@mui/material";

export const STypography = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};
