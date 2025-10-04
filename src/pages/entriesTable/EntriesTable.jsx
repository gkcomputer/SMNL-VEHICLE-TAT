import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info"; // example icon
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // another icon
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomMuiPaper from "../../customComponents/muiPaper/CustomMuiPaper";
import CustomMuiModel from "../../customComponents/muiModel/CustomMuiModel";
import CustomMuiTextField from '../../customComponents/muiTextField/CustomMuiTextField'
import CustomMuiDateRangePicker from "../../customComponents/muiDatePicker/CustomMuiDateRangePicker";

export default function EntriesTable() {
  const paginationModel = { page: 0, pageSize: 10 };
  const [openModel, setOpenModel] = React.useState(false);

  const columns = [
    {
      field: "icons",
      headerName: "",
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: () => (
        <>
          <AddCircleOutlineIcon
            onClick={() => {
              setOpenModel(true);
            }}
          />
        </>
      ),
    },
    { field: "id", headerName: "ID", width: 70 },
    { field: "jobcardno", headerName: "Job Card No", width: 100 },
    { field: "doorno", headerName: "Door No", width: 130 },
    { field: "section", headerName: "Section", width: 130 },
    {
      field: "date",
      headerName: "Date",
      type: "Date",
      width: 120,
    },
    { field: "checkin", headerName: "Check-In", width: 130 },
    { field: "checkout", headerName: "Check-Out", width: 130 },
    { field: "duration", headerName: "Duration", width: 130 },
  ];

  const rows = [
    {
      id: 1,
      jobcardno: "JC001",
      doorno: "D101",
      section: "A1",
      date: "2025-09-01",
      checkin: "08:30 AM",
      checkout: "05:00 PM",
      duration: "8h 30m",
    },
    {
      id: 2,
      jobcardno: "JC002",
      doorno: "D102",
      section: "A2",
      date: "2025-09-01",
      checkin: "08:45 AM",
      checkout: "05:15 PM",
      duration: "8h 30m",
    },
    {
      id: 3,
      jobcardno: "JC003",
      doorno: "D103",
      section: "A1",
      date: "2025-09-02",
      checkin: "09:00 AM",
      checkout: "05:30 PM",
      duration: "8h 30m",
    },
    {
      id: 4,
      jobcardno: "JC004",
      doorno: "D104",
      section: "B1",
      date: "2025-09-02",
      checkin: "09:15 AM",
      checkout: "05:45 PM",
      duration: "8h 30m",
    },
    {
      id: 5,
      jobcardno: "JC005",
      doorno: "D105",
      section: "B2",
      date: "2025-09-03",
      checkin: "09:30 AM",
      checkout: "06:00 PM",
      duration: "8h 30m",
    },
    {
      id: 6,
      jobcardno: "JC006",
      doorno: "D106",
      section: "C1",
      date: "2025-09-03",
      checkin: "09:45 AM",
      checkout: "06:15 PM",
      duration: "8h 30m",
    },
    {
      id: 7,
      jobcardno: "JC007",
      doorno: "D107",
      section: "C2",
      date: "2025-09-04",
      checkin: "10:00 AM",
      checkout: "06:30 PM",
      duration: "8h 30m",
    },
    {
      id: 8,
      jobcardno: "JC008",
      doorno: "D108",
      section: "A1",
      date: "2025-09-04",
      checkin: "10:15 AM",
      checkout: "06:45 PM",
      duration: "8h 30m",
    },
    {
      id: 9,
      jobcardno: "JC009",
      doorno: "D109",
      section: "B1",
      date: "2025-09-05",
      checkin: "10:30 AM",
      checkout: "07:00 PM",
      duration: "8h 30m",
    },
    {
      id: 10,
      jobcardno: "JC010",
      doorno: "D110",
      section: "C1",
      date: "2025-09-05",
      checkin: "10:45 AM",
      checkout: "07:15 PM",
      duration: "8h 30m",
    },
    {
      id: 11,
      jobcardno: "JC011",
      doorno: "D111",
      section: "A2",
      date: "2025-09-06",
      checkin: "11:00 AM",
      checkout: "07:30 PM",
      duration: "8h 30m",
    },
    {
      id: 12,
      jobcardno: "JC012",
      doorno: "D112",
      section: "B2",
      date: "2025-09-06",
      checkin: "11:15 AM",
      checkout: "07:45 PM",
      duration: "8h 30m",
    },
    {
      id: 13,
      jobcardno: "JC013",
      doorno: "D113",
      section: "C2",
      date: "2025-09-07",
      checkin: "11:30 AM",
      checkout: "08:00 PM",
      duration: "8h 30m",
    },
    {
      id: 14,
      jobcardno: "JC014",
      doorno: "D114",
      section: "A1",
      date: "2025-09-07",
      checkin: "11:45 AM",
      checkout: "08:15 PM",
      duration: "8h 30m",
    },
    {
      id: 15,
      jobcardno: "JC015",
      doorno: "D115",
      section: "B1",
      date: "2025-09-08",
      checkin: "12:00 PM",
      checkout: "08:30 PM",
      duration: "8h 30m",
    },
  ];

  const jobDetailsColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "section", headerName: "Section", width: 70 },
    { field: "remarks", headerName: "Remarks", width: 70 },
    { field: "checkin", headerName: "Check-In", width: 70 },
    { field: "checkout", headerName: "Check-Out", width: 70 },
    { field: "duration", headerName: "Duration", width: 70 },
    { field: "status", headerName: "Status", width: 70 },
  ];

  const jobDetailsRows = [
    {
      id: "1",
      jobcardno: "JC101",
      section: "Electrical",
      remarks: "Headlight wiring issue",
      doorno: "D201",
      checkin: "09:00 AM",
      checkout: "10:30 AM",
      duration: "1h 30m",
      status: ["open", "close"],
    },
    {
      id: "2",
      jobcardno: "JC101",
      section: "Mechanical",
      remarks: "Clutch plate replacement",
      doorno: "D201",
      checkin: "11:00 AM",
      checkout: "02:00 PM",
      duration: "3h",
      status: ["open", "in-progress", "close"],
    },
    {
      id: "3",
      jobcardno: "JC102",
      section: "Body Work",
      remarks: "Door dent removal",
      doorno: "D202",
      checkin: "10:00 AM",
      checkout: "01:00 PM",
      duration: "3h",
      status: ["open", "pending", "close"],
    },
    {
      id: "4",
      jobcardno: "JC103",
      section: "AC Service",
      remarks: "Gas refill & filter cleaning",
      doorno: "D203",
      checkin: "09:30 AM",
      checkout: "11:00 AM",
      duration: "1h 30m",
      status: ["open", "close"],
    },
    {
      id: "5",
      jobcardno: "JC104",
      section: "Tyre Service",
      remarks: "Wheel alignment & balancing",
      doorno: "D204",
      checkin: "02:00 PM",
      checkout: "04:00 PM",
      duration: "2h",
      status: ["open", "in-progress", "close"],
    },
    {
      id: "6",
      jobcardno: "JC105",
      section: "Final QC",
      remarks: "Inspection before delivery",
      doorno: "D205",
      checkin: "04:15 PM",
      checkout: "05:00 PM",
      duration: "45m",
      status: ["open", "pending", "close"],
    },
  ];

  console.log("openmodel", openModel);

  return (
    <Paper sx={{ height: 600, width: "100%" }}>
      <div>

      <CustomMuiTextField placeholder="Search by door no" size="small" sx={{margin:"10px"}}/>
      <CustomMuiDateRangePicker/>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
        disableRowSelectionOnClick
      />
      <div>
        <CustomMuiModel open={openModel} onClose={()=>setOpenModel(!openModel)}>
          <CustomMuiPaper>
            <div>
              <div  
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                  alignItems: "center",
                }}
              >
                <div>
                  <div>logo</div>
                </div>
                <div>
                  <div>Vehicle TAT</div>
                  <div>JOB Card No</div>
                  <div>Door No</div>
                </div>
              </div>
              <DataGrid
                rows={jobDetailsRows}
                columns={jobDetailsColumns}
                initialState={{ pagination: { paginationModel } }}
                sx={{ border: 0 }}
                disableRowSelectionOnClick
              />
            </div>
          </CustomMuiPaper>
        </CustomMuiModel>
      </div>
    </Paper>
  );
}
