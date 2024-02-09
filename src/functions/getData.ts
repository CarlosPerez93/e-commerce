import Api from "../common/Api";
import { patchEnum } from "../common/api.type";

export const getData = async (setData: Function, params: string) => {
  const { get } = patchEnum;
  const data = await Api({ patch: get, params });
  const json = await data?.json();
  setData(json);
};
