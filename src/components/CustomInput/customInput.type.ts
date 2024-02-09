import propTypes from "prop-types";
export const CustomInputPropTypes = {
  label: propTypes.string.isRequired,
  htmlFor: propTypes.string.isRequired,

  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  state: propTypes.any.isRequired,

  setState: propTypes.func.isRequired,
};

export const CustomInputDefaultProps = {};

export type CustomInputProps = propTypes.InferProps<
  typeof CustomInputPropTypes
>;
