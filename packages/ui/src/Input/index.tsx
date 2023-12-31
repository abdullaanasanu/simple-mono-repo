import React from "react";
import styles from "./styles.module.scss";

const Input = ({ value, onChange, props }) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
