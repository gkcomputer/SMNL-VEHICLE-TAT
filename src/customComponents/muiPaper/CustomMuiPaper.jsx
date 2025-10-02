import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function CustomMuiPaper({
  children,
  elevation,
  variant,
  square,
  sx,
}) {
  return (
    <Paper elevation={elevation} variant={variant} square={square} sx={sx}>
      {children}
    </Paper>
  );
}
