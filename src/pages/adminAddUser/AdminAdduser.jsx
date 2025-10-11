import CustomMuiTable from "../../customComponents/muiTable/CustomMuiTable";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomMuiButton from "../../customComponents/muiButton/CustomMuiButton";
import CustomMuiModel from "../../customComponents/muiModel/CustomMuiModel";
import CustomMuiTypoGraphy from "../../customComponents/muiTypography/CustomMuiTypoGraphy";
import { useCallback, useEffect, useMemo, useState } from "react";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import CustomMuiTextField from "../../customComponents/muiTextField/CustomMuiTextField";
import CustomMuiPaper from "../../customComponents/muiPaper/CustomMuiPaper";
import { addUser } from "../../features/users/UsersSlice";

import "./AdminAddUser.css";
import { useDispatch } from "react-redux";
import UserModel from "./userModel";
import CustomFormValidation from "../../customComponents/customFormValidataion/CustomFormValidaton";

const rowsData = [
  {
    id: 1,
    empid: "123",
    empname: "GK",
    section: "IT",
    userrole: "Admin",
    password: "123456",
  },
  {
    id: 2,
    empid: "456",
    empname: "sravanth",
    section: "Electrical",
    userrole: "User",
    password: "123456",
  },
  {
    id: 3,
    empid: "789",
    empname: "Rajesh",
    section: "volvo",
    userrole: "User",
    password: "123456",
  },
];

const AdminAddUser = () => {
  const dispatch = useDispatch();

  const [rows, setRows] = useState(rowsData);
  const [user, setUser] = useState({
    empid: "",
    empname: "",
    section: "",
    password: "",
    userrole: "",
  });
  const [modelOpen, setModelOPen] = useState(false);
  const [modelType, setModelType] = useState({
    add: false,
    edit: false,
    delete: false,
  });

  const [deleteModel, setDeleteModel] = useState(false);

  // console.log({ user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setUser({
      empid: "",
      empname: "",
      section: "",
      password: "",
      userrole: "",
    });
    setModelOPen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CustomFormValidation(user);
    console.log("user edit", user);
    if (modelType.add) {
      setRows((prevRows) => [
        ...prevRows,
        { ...user, id: prevRows.length + 1 },
      ]);
      setModelType({ add: false });
    }
    if (modelType.edit) {
      setRows((prev) => prev.map((u) => (u.id === user.id ? user : u)));
      setModelType({ edit: false });
    }
    setUser({
      empid: "",
      empname: "",
      section: "",
      password: "",
      userrole: "",
    });
    setModelOPen(false);
  };

  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 150 },
      { field: "empid", headerName: "EMP ID", width: 150 },
      { field: "empname", headerName: "EMP Name", width: 150 },
      { field: "section", headerName: "Section", width: 150 },
      { field: "userrole", headerName: "Role", width: 150 },
      { field: "password", headerName: "Password", width: 150 },
      {
        field: "edit",
        headerName: "Edit",
        width: 70,
        renderCell: (params) => {
          return (
            <BorderColorIcon
              onClick={() => {
                setUser(params.row);
                setModelType({ edit: true });
                setModelOPen(true);
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
          return (
            <DeleteIcon
              onClick={() => {
                setUser(params.row);
                setDeleteModel(true);
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
            setModelType({ add: true });
          }}
        >
          Add New User
        </CustomMuiButton>
      </div>

      {/*login users table*/}
      <CustomMuiTable columns={columns} rows={rows} />

      {/* User Model to add user details */}
      <UserModel
        modelOpen={modelOpen}
        user={user}
        handleChange={handleChange}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />

      {/* Delete user model*/}
      <CustomMuiModel open={deleteModel}>
        <CustomMuiPaper>
          <p>Are you sure to delete user?</p>
          <p>{user.empid}</p>
          <p>{user.empname}</p>
          <CustomMuiButton
            variant="contained"
            onClick={() => {
              console.log("delete Confirmed");
            }}
          >
            Confirm
          </CustomMuiButton>
          <CustomMuiButton
            variant="contained"
            onClick={() => {
              setDeleteModel(false);
            }}
          >
            Cancel
          </CustomMuiButton>
        </CustomMuiPaper>
      </CustomMuiModel>
    </div>
  );
};

export default AdminAddUser;
