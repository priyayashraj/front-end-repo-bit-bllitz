import React from "react";
import styles from "./CustomInput.module.scss";
import { Input } from "@mui/material";
const CustomInput = ({
  placeholder,
  value,
  endAdornment,
  startAdornment,
  onChange,
  inputName
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Input
        placeholder={placeholder}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
        value={value}
        onChange={onChange}
        fullWidth
        disableUnderline
        className={styles.customInput}
        name={inputName}
      />
    </div>
  );
};

export default CustomInput;
