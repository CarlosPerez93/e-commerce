type product = {
  id?: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: rating;
  inCart?: any;
  amount?: number;
};

type rating = {
  rate: number;
  count: number;
};

type card = {
  product: product;
  onClick?: () => void;
};
export default card;
