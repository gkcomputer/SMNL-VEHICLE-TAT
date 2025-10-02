import landingPageImg from "../../assets/landing-page-img.jpg";
import CustomMuiPaper from "../../customComponents/muiPaper/CustomMuiPaper";
import smnlLogo from "../../assets/smnl-logo.png";
import "./LoginPage.css";
import CustomMuiTypoGraphy from "../../customComponents/muiTypography/CustomMuiTypoGraphy";
import LoginForm from "./LoginForm";
import { Margin } from "@mui/icons-material";

const LoginPage = () => {
  return (
    <div className="landing-container">
      <img
        src={landingPageImg}
        alt="landing-page-img"
        className="landingPage_img"
      />
      <div className="user_login_form">
        <CustomMuiPaper
          elevation={6}
          variant="outlined"
          square={false}
          sx={{ width: "500px", height: "450px" }}
        >
          <div className="user_login_form_header">
            <img
              src={smnlLogo}
              alt="smnl_logo"
              style={{ width: "100%", padding: "20px" }}
            />
            <CustomMuiTypoGraphy variant="h6">
              Please login to continue
            </CustomMuiTypoGraphy>

            {/* user Login Form*/}
            <LoginForm
              sx={{
                width: "80%",
                gap: "20px",
                margin: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            />
          </div>
        </CustomMuiPaper>
      </div>
    </div>
  );
};

export default LoginPage;
