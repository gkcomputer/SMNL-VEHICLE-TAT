import { InputLabel, MenuItem, Select } from "@mui/material";
import CustomMuiModel from "../../customComponents/muiModel/CustomMuiModel";
import CustomMuiPaper from "../../customComponents/muiPaper/CustomMuiPaper";
import CustomMuiTypoGraphy from "../../customComponents/muiTypography/CustomMuiTypoGraphy";
import CustomMuiButton from "../../customComponents/muiButton/CustomMuiButton";
import CustomMuiTextField from "../../customComponents/muiTextField/CustomMuiTextField";

const UserModel = ({
  user,
  error,
  onClose,
  errorMsg,
  onSubmit,
  modelOpen,
  handleChange,
}) => {
  return (
    <CustomMuiModel open={modelOpen} onClose={onClose}>
      <CustomMuiPaper
        sx={{
          padding: "15px",
          gap: "10px",
          width: "800px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="adduser-Model-header">
          <CustomMuiTypoGraphy variant="h4">Add User</CustomMuiTypoGraphy>
        </div>
        <div>
          <CustomMuiTypoGraphy variant="h6">{errorMsg}</CustomMuiTypoGraphy>
        </div>
        <div className="adduser-Model-row1">
          <CustomMuiTextField
            variant="outlined"
            label="Emp ID"
            name="empid"
            value={user.empid}
            onChange={(e) => handleChange(e)}
            fullWidth={true}
            required={true}
            error={error.empid}
          />
          <CustomMuiTextField
            variant="outlined"
            label="Emp Name"
            name="empname"
            value={user.empname}
            onChange={(e) => handleChange(e)}
            fullWidth={true}
            required={true}
            error={error.empname}
          />
        </div>
        <div className="adduser-Model-row2">
          <CustomMuiTextField
            variant="outlined"
            label="section"
            name="section"
            value={user.section}
            onChange={(e) => handleChange(e)}
            fullWidth={true}
            required={true}
            error={error.section}
          />

          <CustomMuiTextField
            variant="outlined"
            label="password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            fullWidth={true}
            required={true}
            error={error.password}
          />
        </div>
        <div>
          <InputLabel id="demo-simple-select-label">User Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="User Role"
            fullWidth
            name="userrole"
            value={user.userrole}
            required
            error={error.userrole}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Admin"}>Admin</MenuItem>
            <MenuItem value={"User"}>User</MenuItem>
          </Select>
        </div>
        <div className="adduser-Model-buttons">
          <CustomMuiButton type="submit" variant="contained" onClick={onSubmit}>
            Submit
          </CustomMuiButton>
          <CustomMuiButton variant="contained" onClick={onClose}>
            Cancel
          </CustomMuiButton>
        </div>
      </CustomMuiPaper>
    </CustomMuiModel>
  );
};

export default UserModel;
