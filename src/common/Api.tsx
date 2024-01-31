import { Api, patchEnum } from "./api.type";

const url = "https://fakestoreapi.com";

const Api = async ({ patch, params }: Api) => {
  if (patch === patchEnum.get) {
    return await fetch(`${url}${params}`);
  }
};

export default Api;
