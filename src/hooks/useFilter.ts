type useFilter = {
  data: any;
  stateFilter: string;
};
export const categoryFilter = ({ data, stateFilter }: useFilter) => {
  return data.filter((item: any) => {
    return stateFilter.toLowerCase() == ""
      ? item
      : item.category.toLowerCase().includes(stateFilter);
  });
};
