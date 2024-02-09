import propTypes from "prop-types";

export const FilterPricePropTypes = {
  handleFilter: propTypes.func.isRequired,
};

export const FilterPriceDefaultProps = {};

export type FilterPriceProps = propTypes.InferProps<
  typeof FilterPricePropTypes
>;
