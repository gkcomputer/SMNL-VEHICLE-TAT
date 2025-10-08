import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Box } from "@mui/material";

export default function CustomMuiDateRangePicker() {
  // MuiPickersSectionList-root MuiPickersInputBase-sectionsContainer css-1fb7els-MuiPickersSectionList-root-MuiPickersInputBase-sectionsContainer-MuiPickersOutlinedInput-sectionsContainer
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={styles.dp}>
        <DateRangePicker
          slotProps={{
            textField: {
              sx: {
                width: "300px",
              },
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}

const styles = {
  dp: {
    "& .MuiPickersInputBase-sectionsContainer": {
      padding: "0",
    },
  },
};
