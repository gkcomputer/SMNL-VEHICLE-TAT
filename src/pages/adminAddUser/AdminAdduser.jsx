import CustomMuiTable from "../../customComponents/muiTable/CustomMuiTable";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminAddUser = () => {
  const columns = [
    { field: "id", headerName: "ID", width:150 },
    { field: "empid", headerName: "EMP ID", width:150 },
    { field: "empname", headerName: "EMP Name", width:150 },
    { field: "section", headerName: "Section", width:150 },
    { field: "status", headerName: "Status", width:150 },
    { field: "password", headerName: "Password", width:150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 70,
      renderCell: () => <BorderColorIcon />,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 70,
      renderCell: () => <DeleteIcon />,
    },
  ];

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

  return <CustomMuiTable columns={columns} rows={rows} />;
};

export default AdminAddUser;
