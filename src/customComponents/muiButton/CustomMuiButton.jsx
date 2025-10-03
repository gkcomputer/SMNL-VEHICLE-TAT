import Button from "@mui/material/Button";

export default function CustomMuiButton({ children, variant, disabled, type, onClick }) {
  return (
    <Button variant={variant} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </Button>
  );
}
