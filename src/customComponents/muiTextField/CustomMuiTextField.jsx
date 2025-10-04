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
  maxRows,
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
      variant={variant}
      maxRows={maxRows}
      onChange={onChange}
      multiline={multiline}
      fullWidth={fullWidth}
      placeholder={placeholder}
    />
  );
}
