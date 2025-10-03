import TextField from "@mui/material/TextField";

export default function CustomMuiTextField({
  variant,
  id,
  rows,
  name,
  label,
  maxRows,
  onChange,
  multiline,
  fullWidth,
  sx,
}) {
  return (
    <TextField
      id={id}
      rows={rows}
      name={name}
      label={label}
      variant={variant}
      maxRows={maxRows}
      onChange={onChange}
      multiline={multiline}
      fullWidth={fullWidth}
      sx={sx}
    />
  );
}
