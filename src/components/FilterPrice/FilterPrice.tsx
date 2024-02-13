import { FC } from "react";
import CustomInput from "../CustomInput/CustomInput";
import { FilterPriceProps } from "./filterPrice.type";

import styles from "./Filter.module.css";
export const FilterPrice: FC<FilterPriceProps> = ({ handleFilter }) => {
  return (
    <div className={styles.filterPice}>
      <CustomInput
        label="Min"
        htmlFor="max"
        id="max"
        name="max"
        type="number"
        min={0}
        max={Infinity}
        handleFilter={handleFilter}
      />
      <CustomInput
        label="Max"
        htmlFor="min"
        id="min"
        name="min"
        type="number"
        min={0}
        max={Infinity}
        handleFilter={handleFilter}
      />
    </div>
  );
};

export default FilterPrice;
