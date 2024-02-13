import propTypes from "prop-types";
export const CustomInputPropTypes = {
  label: propTypes.string.isRequired,
  htmlFor: propTypes.string.isRequired,

  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  min: propTypes.number.isRequired,
  max: propTypes.number.isRequired,

  handleFilter: propTypes.func.isRequired,
};

export const CustomInputDefaultProps = {};

export type CustomInputProps = propTypes.InferProps<
  typeof CustomInputPropTypes
>;
