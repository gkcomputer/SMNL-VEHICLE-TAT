import CustomMuiTable from "../../customComponents/muiTable/CustomMuiTable";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomMuiButton from "../../customComponents/muiButton/CustomMuiButton";
import CustomMuiModel from "../../customComponents/muiModel/CustomMuiModel";
import CustomMuiTypoGraphy from "../../customComponents/muiTypography/CustomMuiTypoGraphy";
import { useCallback, useMemo, useState } from "react";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import CustomMuiTextField from "../../customComponents/muiTextField/CustomMuiTextField";
import CustomMuiPaper from "../../customComponents/muiPaper/CustomMuiPaper";
import { addUser } from "../../features/users/UsersSlice";

import "./AdminAddUser.css";
import { useDispatch } from "react-redux";

const rows = [
  {
    id: 1,
    empid: "123",
    empname: "GK",
    section: "IT",
    status: "Active",
    password: "123456",
  },
  {
    id: 2,
    empid: "456",
    empname: "sravanth",
    section: "Electrical",
    status: "Active",
    password: "123456",
  },
  {
    id: 3,
    empid: "789",
    empname: "Rajesh",
    section: "volvo",
    status: "Active",
    password: "123456",
  },
];

const AdminAddUser = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    empid: "",
    empname: "",
    section: "",
    password: "",
    userrole: "",
  });

  const [selectedRow, setSelectedRow] = useState({
    empid: "",
    empname: "",
    section: "",
    password: "",
    userrole: "",
  });

  const [modelOpen, setModelOPen] = useState(false);

  // console.log({ user });

  const handleChange = (e) => {
    performance.now();
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    performance.now();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
  };

  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 150 },
      { field: "empid", headerName: "EMP ID", width: 150 },
      { field: "empname", headerName: "EMP Name", width: 150 },
      { field: "section", headerName: "Section", width: 150 },
      { field: "status", headerName: "Status", width: 150 },
      { field: "password", headerName: "Password", width: 150 },
      {
        field: "edit",
        headerName: "Edit",
        width: 70,
        renderCell: (params) => {
          return <BorderColorIcon />;
        },
      },
      {
        field: "delete",
        headerName: "Delete",
        width: 70,
        renderCell: (params) => {
          return (
            <DeleteIcon
              onClick={() => {
                console.log("delete user", params.row);
              }}
            />
          );
        },
      },
    ],
    []
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          margin: "20px",
        }}
      >
        <CustomMuiButton
          variant="contained"
          onClick={() => {
            setModelOPen(true);
          }}
        >
          Add New User
        </CustomMuiButton>
      </div>
      <CustomMuiTable columns={columns} rows={rows} />

      <form>
        {/* Add User Model*/}

        <CustomMuiModel
          open={modelOpen}
          onClose={() => {
            setModelOPen(!modelOpen);
          }}
        >
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
              <CustomMuiTypoGraphy variant="h6">Add User</CustomMuiTypoGraphy>
            </div>
            <div className="adduser-Model-row1">
              <CustomMuiTextField
                variant="outlined"
                label="Emp ID"
                name="empid"
                value={user.empid}
                onChange={handleChange}
                fullWidth={true}
              />
              <CustomMuiTextField
                variant="outlined"
                label="Emp Name"
                name="empname"
                value={user.empname}
                onChange={(e) => {
                  handleChange(e);
                }}
                fullWidth={true}
              />
            </div>
            <div className="adduser-Model-row2">
              <CustomMuiTextField
                variant="outlined"
                label="section"
                name="section"
                value={user.section}
                onChange={(e) => {
                  handleChange(e);
                }}
                fullWidth={true}
              />

              <CustomMuiTextField
                variant="outlined"
                label="password"
                name="password"
                value={user.password}
                onChange={(e) => {
                  handleChange(e);
                }}
                fullWidth={true}
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
                onChange={(e) => handleChange(e)}
              >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"User"}>User</MenuItem>
              </Select>
            </div>
            <div className="adduser-Model-buttons">
              <CustomMuiButton variant="contained" onClick={handleSubmit}>
                Submitt
              </CustomMuiButton>
              <CustomMuiButton
                variant="contained"
                onClick={() => {
                  setUser({
                    empid: "",
                    empname: "",
                    section: "",
                    password: "",
                    userrole: "",
                  });
                  setModelOPen(!modelOpen);
                }}
              >
                Cancel
              </CustomMuiButton>
            </div>
          </CustomMuiPaper>
        </CustomMuiModel>
      </form>
    </div>
  );
};

export default AdminAddUser;
