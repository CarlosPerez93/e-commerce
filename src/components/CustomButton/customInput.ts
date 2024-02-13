import propTypes from "prop-types";

export const CustomButtonPropTypes = {
  text: propTypes.string.isRequired,
  width: propTypes.string,
  backGroundColor: propTypes.string.isRequired,
  margin: propTypes.string.isRequired,
  borderRadius: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export const CustomButtonDefaultProps = {};

export type CustomButtonProps = propTypes.InferProps<
  typeof CustomButtonPropTypes
>;
