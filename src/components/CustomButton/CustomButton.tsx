import { FC } from "react";
import {
  CustomButtonPropTypes,
  CustomButtonProps,
  CustomButtonDefaultProps,
} from "./customInput";

export const CustomButton: FC<CustomButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick!}>{text} </button>;
};

CustomButton.propTypes = CustomButtonPropTypes;
CustomButton.defaultProps = CustomButtonDefaultProps;

export default CustomButton;
