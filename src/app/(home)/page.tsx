import Container from "@/components/layout/Contaienr";
import FlashSale from "@/components/page/home/FlashSale";
import HeroSection from "@/components/page/home/HeroSection";
import PopularProduct from "@/components/page/home/PopularProduct";
import TopCategories from "@/components/page/home/TopCategories";
import Loader from "@/components/ui/Loader";
import config from "@/config";
import { Suspense } from "react";

const getProducts = async () => {
  try {
    const response = await fetch(`${config.api_base_url}/products`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const page = async () => {
  const orders = await getProducts();

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <Container>
          <FlashSale />
          <TopCategories />
          <PopularProduct />
        </Container>
      </Suspense>
    </div>
  );
};

export default page;
