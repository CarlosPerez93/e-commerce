export enum patchEnum {
  post = "post",
  get = "get",
  put = "put",
  delete = "delete",
}

type Api = {
  data?: object | object[];
  patch?: string;
  params?: string;
  token?: any;
};

type Product = {
  id?: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: Rating;
};

type Rating = {
  rate: number;
  count: number;
};

export type { Api, Product };
