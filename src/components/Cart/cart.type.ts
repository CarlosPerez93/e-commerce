import propTypes from "prop-types";

const CartPropTypes = {
  open: propTypes.bool.isRequired,

  setOpen: propTypes.func.isRequired,
};

export const CartDefaultProps = {};

export type CartProps = propTypes.InferProps<typeof CartPropTypes>;
