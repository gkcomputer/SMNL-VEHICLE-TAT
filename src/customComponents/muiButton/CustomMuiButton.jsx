import Button from "@mui/material/Button";

const CustomMuiButton = ({ children, variant, disabled, type, onClick }) => {
  return (
    <Button variant={variant} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomMuiButton;
