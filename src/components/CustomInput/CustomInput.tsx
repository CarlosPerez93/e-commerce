import { FC } from "react";
import {
  CustomInputDefaultProps,
  CustomInputPropTypes,
  CustomInputProps,
} from "./customInput.type";
import { useHandleChange } from "../../hooks/useHandleChange";

import styles from "./CustomInput.module.css";

export const CustomInput: FC<CustomInputProps> = ({
  label,
  htmlFor,
  type,
  id,
  name,
  state,
  setState,
}) => {
  const handleChange = useHandleChange({ state, setState });

  return (
    <div className={styles.customInput}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} name={name} id={id} onChange={handleChange} />
    </div>
  );
};

CustomInput.propTypes = CustomInputPropTypes;
CustomInput.propTypes = CustomInputDefaultProps;

export default CustomInput;
