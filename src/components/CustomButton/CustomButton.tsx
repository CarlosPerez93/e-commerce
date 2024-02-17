import { FC } from "react";

import {
  CustomButtonPropTypes,
  CustomButtonProps,
  CustomButtonDefaultProps,
} from "./customInput";

import styles from "./CustomButton.module.css";

export const CustomButton: FC<CustomButtonProps> = ({
  text,
  width,
  margin,
  borderRadius,
  backGroundColor,
  onClick,
}) => {
  return (
    <button
      style={{
        width: `${width}`,
        backgroundColor: `${backGroundColor}`,
        margin: `${margin}`,
        borderRadius: `${borderRadius}`,
      }}
      className={styles.mainCustomButton}
      onClick={onClick!}
    >
      {text}
    </button>
  );
};

CustomButton.propTypes = CustomButtonPropTypes;
CustomButton.defaultProps = CustomButtonDefaultProps;

export default CustomButton;
