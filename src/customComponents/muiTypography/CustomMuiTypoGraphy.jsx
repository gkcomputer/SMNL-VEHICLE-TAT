import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CustomMuiTypoGraphy({ children, variant, gutterBottom, sx }) {
  return (
    <Typography variant={variant} gutterBottom={gutterBottom} sx={sx}>
      {children}
    </Typography>
  );
}
