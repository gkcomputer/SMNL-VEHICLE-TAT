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
import UserModel from "./userModel";

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

  const handleClose = () => {
    setUser({
      empid: "",
      empname: "",
      section: "",
      password: "",
      userrole: "",
    });
    setModelOPen(!modelOpen);
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
          return (
            <BorderColorIcon
              onClick={() => {
                setSelectedRow(params.row);
                setModelOPen(!modelOpen);
              }}
            />
          );
        },
      },
      {
        field: "delete",
        headerName: "Delete",
        width: 70,
        renderCell: (params) => {
          return <DeleteIcon />;
        },
      },
    ],
    []
  );

  return (
    <div>
      {/* Add New user Button */}
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

      {/*login users table*/}
      <CustomMuiTable columns={columns} rows={rows} />

      {/* User Model to add and Edit user details */}
      <UserModel
        modelOpen={modelOpen}
        user={selectedRow || user}
        handleChange={handleChange}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AdminAddUser;
