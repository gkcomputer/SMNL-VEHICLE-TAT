import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function CustomMuiDateRangePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        slotProps={{
          textField: {
            sx: {
              width: "300px",
              "& .MuiPickersOutlinedInput-sectionsContainer": {
                padding: 0, // remove padding here
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
