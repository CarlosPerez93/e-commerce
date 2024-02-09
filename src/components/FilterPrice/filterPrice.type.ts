import propTypes from "prop-types";

export const FilterPricePropTypes = {
  max: propTypes.number.isRequired,
  min: propTypes.number.isRequired,

  setMax: propTypes.func.isRequired,
  setMin: propTypes.func.isRequired,
};

export const FilterPriceDefaultProps = {};

export type FilterPriceProps = propTypes.InferProps<
  typeof FilterPricePropTypes
>;
