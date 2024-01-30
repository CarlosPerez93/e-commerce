import { FC } from "react";

import { SelectProps } from "./select.type";

import styles from "./Select.module.css";

export const Select: FC<SelectProps> = ({ data, filter, handleFilter }) => {
  const categories = Array.from(
    new Set(data?.map((item: any) => item.category))
  );
  return (
    <select className={styles.select} value={filter} onChange={handleFilter}>
      <option value="" />
      {categories?.map(
        (item): React.ReactNode => (
          <option key={item} value={item}>
            {item}
          </option>
        )
      )}
    </select>
  );
};
export default Select;
