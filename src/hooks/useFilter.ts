import { useFilter } from "./hooks.type";

export const categoryFilter = ({ data, stateFilter, key }: useFilter) => {
  if (key === "categories") {
    return data.filter((item: any) => {
      return stateFilter.toString().toLowerCase() == ""
        ? item
        : item.category.toLowerCase().includes(stateFilter);
    });
  } else
    return data.filter((item: any) => {
      return stateFilter == 0
        ? item
        : item.price.toString().includes(stateFilter);
    });
};
