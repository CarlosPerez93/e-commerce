import { FC } from "react";
import CustomInput from "../CustomInput/CustomInput";
import { FilterPriceProps } from "./filterPrice.type";

import styles from "./Filter.module.css";
export const FilterPrice: FC<FilterPriceProps> = ({
  setMax,
  setMin,
  max,
  min,
}) => {
  return (
    <div className={styles.filterPice}>
      <CustomInput
        label="Min"
        htmlFor="max"
        id="max"
        name="max"
        type="number"
        setState={setMax}
        state={max}
      />
      <CustomInput
        label="Max"
        htmlFor="min"
        id="min"
        name="min"
        type="number"
        setState={setMin}
        state={min}
      />
    </div>
  );
};

export default FilterPrice;
