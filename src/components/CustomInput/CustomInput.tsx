import { FC } from "react";
import {
  CustomInputDefaultProps,
  CustomInputPropTypes,
  CustomInputProps,
} from "./customInput.type";

import styles from "./CustomInput.module.css";

export const CustomInput: FC<CustomInputProps> = ({
  id,
  min,
  max,
  name,
  type,
  label,
  htmlFor,
  handleFilter,
}) => {
  return (
    <div className={styles.customInput}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        min={min}
        max={max}
        type={type}
        name={name}
        id={id}
        onChange={handleFilter}
      />
    </div>
  );
};

CustomInput.propTypes = CustomInputPropTypes;
CustomInput.propTypes = CustomInputDefaultProps;

export default CustomInput;
