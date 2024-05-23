import Container from "@/components/layout/Contaienr";
import FlashSale from "@/components/page/home/FlashSale";
import HeroSection from "@/components/page/home/HeroSection";
import PopularProduct from "@/components/page/home/PopularProduct";
import TopCategories from "@/components/page/home/TopCategories";
import Loader from "@/components/ui/Loader";
import config from "@/config";
import { Suspense } from "react";
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
};

export type TProductArray = Array<TProduct>;

const getProducts = async () => {
  try {
    const response = await fetch(`${config.api_base_url}/products`, {
      next: { revalidate: 30 },
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const page = async () => {
  const products: Array<TProduct> = await getProducts();
  console.log(products);
  const flashProducts = products.filter(
    (products) => products.isFlash === true
  );

  console.log({ flashProducts });

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <Container>
          <FlashSale products={flashProducts} />
          <TopCategories />
          <PopularProduct products={products} />
        </Container>
      </Suspense>
    </div>
  );
};

export default page;
