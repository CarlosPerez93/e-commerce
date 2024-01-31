import { FC } from "react";

import { SelectProps } from "./select.type";

import styles from "./Select.module.css";

export const Select: FC<SelectProps> = ({
  data,
  filter,
  handleFilter,
  typeFilter,
}) => {
  const categories = Array.from(
    new Set(data?.map((item: any) => item.category))
  );
  return (
    <div className={styles.main}>
      <label htmlFor="category">{typeFilter}</label>
      <select
        name="category"
        className={styles.select}
        value={filter}
        onChange={handleFilter}
      >
        <option value="" />
        {categories?.map(
          (item): React.ReactNode => (
            <option key={item} value={item}>
              {item}
            </option>
          )
        )}
      </select>
    </div>
  );
};
export default Select;
