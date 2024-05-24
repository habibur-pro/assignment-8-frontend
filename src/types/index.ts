export type TProduct = {
  id: string;
  name: string;
  code: string;
  images: Array<string>;
  prevPrice: number;
  price: number;
  discount: number;
  category: string;
  isFlash: boolean;
  description: string;
  rating: number;
  reviews: number;
  quantity: number;
  sale: number;
  isFeature: boolean;
};

export type ProductArray = Array<TProduct>;
