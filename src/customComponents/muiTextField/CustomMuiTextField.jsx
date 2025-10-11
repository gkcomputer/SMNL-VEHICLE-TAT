import TextField from "@mui/material/TextField";

export default function CustomMuiTextField({
  variant,
  sx,
  id,
  rows,
  name,
  size,
  label,
  value,
  error,
  maxRows,
  required,
  onChange,
  multiline,
  fullWidth,
  placeholder,
}) {
  return (
    <TextField
      sx={sx}
      id={id}
      rows={rows}
      name={name}
      size={size}
      label={label}
      value={value}
      error={error}
      variant={variant}
      maxRows={maxRows}
      required={required}
      onChange={onChange}
      multiline={multiline}
      fullWidth={fullWidth}
      placeholder={placeholder}
    />
  );
}
