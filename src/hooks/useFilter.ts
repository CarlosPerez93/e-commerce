type useFilter = {
  data: any;
  filterState: string;
};
export const categoryFilter = ({ data, filterState }: useFilter) => {
  return data.filter((item: any) => {
    return filterState.toLowerCase() == ""
      ? item
      : item.category.toLowerCase().includes(filterState);
  });
};
