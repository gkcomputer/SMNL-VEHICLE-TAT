import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/loginPage/LoginPage";
import SectionCheckInOut from "./pages/sectionCheckInOut/SectionCheckInOut";
import EntriesTable from "./pages/entriesTable/EntriesTable";
import AdminAddUser from "./pages/adminAddUser/AdminAdduser";

function App() {
  return <Routes>
    <Route path="/" element={<Navigate to="/login" replace/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/section-checkinout" element={<SectionCheckInOut/>}/>
    <Route path="/entries-table" element={<EntriesTable/>}/>
    <Route path="/admin-adduser" element={<AdminAddUser/>}/>
  </Routes>
}

export default App;
