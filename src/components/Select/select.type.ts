import propTypes from "prop-types";

export const selectPropTypes = {
  filter: propTypes.string.isRequired,
  data: propTypes.arrayOf(propTypes.any.isRequired).isRequired,
  typeFilter: propTypes.string.isRequired,
  handleFilter: propTypes.func.isRequired,
};

export type SelectProps = propTypes.InferProps<typeof selectPropTypes>;
