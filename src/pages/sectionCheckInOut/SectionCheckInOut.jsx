import CustomMuiPaper from "../../customComponents/muiPaper/CustomMuiPaper";
import smnllogo from "../../assets/smnl-logo.png";

import "./SectionCheckInOut.css";
import CustomMuiTypoGraphy from "../../customComponents/muiTypography/CustomMuiTypoGraphy";
import CustomMuiTextField from "../../customComponents/muiTextField/CustomMuiTextField";
import { InputLabel, MenuItem, Select } from "@mui/material";
import CustomMuiButton from "../../customComponents/muiButton/CustomMuiButton";
import { useState } from "react";

const SectionCheckInOut = () => {
  const [vehicleData, setVehicleData] = useState({
    enterdoorno: "",
    remarks: "",
    entrytype: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sectioncheckinout-container">
      <CustomMuiPaper elevation={8} sx={{ width: "500px", height: "600px" }}>
        <div className="section-form-header">
          <div className="section-form-logo">
            <img src={smnllogo} alt="smnllogo" />
          </div>
          <div className="section-form-userdetails">
            <CustomMuiTypoGraphy>Emp ID</CustomMuiTypoGraphy>
            <CustomMuiTypoGraphy>EMP name</CustomMuiTypoGraphy>
            <CustomMuiTypoGraphy>Section</CustomMuiTypoGraphy>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="section-form-checkinout">
            <CustomMuiTextField
              variant="outlined"
              label="Enter Door No"
              fullWidth={true}
              name="enterdoorno"
              value={vehicleData.enterdoorno}
              onChange={(e) => handleChange(e)}
            />
            <CustomMuiTextField
              variant="outlined"
              label="Remarks"
              multiline={true}
              rows={4}
              fullWidth={true}
              name="remarks"
              value={vehicleData.remarks}
              onChange={(e) => handleChange(e)}
            />
            <div>
              <InputLabel id="demo-simple-select-label">Entry Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Entrytype"
                fullWidth
                name="entrytype"
                value={vehicleData.entrytype}
                onChange={(e) => handleChange(e)}
              >
                <MenuItem value={"checkIn"}>Check-In</MenuItem>
                <MenuItem value={"checkOut"}>Check-Out</MenuItem>
              </Select>
            </div>
            <div className="section-form-buttons">
              <CustomMuiButton variant="contained" type="submit">
                Submit
              </CustomMuiButton>
              <CustomMuiButton
                variant="contained"
                onClick={() =>
                  setVehicleData({
                    enterdoorno: "",
                    remarks: "",
                    entrytype: "",
                  })
                }
              >
                Cancel
              </CustomMuiButton>
            </div>
          </div>
        </form>
      </CustomMuiPaper>
    </div>
  );
};

export default SectionCheckInOut;
