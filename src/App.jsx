import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/loginPage/LoginPage";
import SectionCheckInOut from "./pages/sectionCheckInOut/SectionCheckInOut";

function App() {
  return <Routes>
    <Route path="/" element={<Navigate to="/login" replace/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/section-checkinout" element={<SectionCheckInOut/>}/>
  </Routes>
}

export default App;
