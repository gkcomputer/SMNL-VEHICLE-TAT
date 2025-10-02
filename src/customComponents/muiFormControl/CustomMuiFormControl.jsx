import * as React from "react";
import { FormControl, useFormControlContext } from "@mui/base/FormControl";
import { Input } from "@mui/base/Input";
import { styled } from "@mui/system";
import clsx from "clsx";
import { Label } from "@mui/icons-material";

export default function CustomMuiFormControl() {
  return (
    <FormControl defaultValue="" required>
      <Label>Name</Label>
      <Input placeholder="Write your name here" />
    </FormControl>
  );
}
