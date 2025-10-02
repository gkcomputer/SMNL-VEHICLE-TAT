import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function CustomMuiPaper({ children , elevation ,sx }) {
  return <Paper elevation={elevation} sx={sx} >{children}</Paper>;
}
