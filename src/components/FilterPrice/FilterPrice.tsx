import { FC } from "react";

import CustomInput from "../CustomInput/CustomInput";

import { FilterPriceProps } from "./filterPrice.type";

import styles from "./Filter.module.css";

export const FilterPrice: FC<FilterPriceProps> = ({ handleFilter }) => {
  return (
    <div className={styles.filterPice}>
      <CustomInput
        label="or by Prices"
        htmlFor="max"
        id="max"
        name="max"
        type="number"
        min={0}
        max={Infinity}
        handleFilter={handleFilter}
      />
    </div>
  );
};

export default FilterPrice;
