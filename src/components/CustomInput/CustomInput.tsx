import { FC } from "react";
import {
  CustomInputDefaultProps,
  CustomInputPropTypes,
  CustomInputProps,
} from "./customInput.type";

import styles from "./CustomInput.module.css";

export const CustomInput: FC<CustomInputProps> = ({
  label,
  htmlFor,
  type,
  id,
  name,

  handleFilter,
}) => {
  return (
    <div className={styles.customInput}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} name={name} id={id} onChange={handleFilter} />
    </div>
  );
};

CustomInput.propTypes = CustomInputPropTypes;
CustomInput.propTypes = CustomInputDefaultProps;

export default CustomInput;
