import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import config from "@/config";
import { ProductArray } from "@/types";
import Link from "next/link";

const getFlashProducts = async () => {
  try {
    const url = `${config.api_base_url}/products/flash-sale`;
    console.log(url);
    const response = await fetch(
      `${config.api_base_url}/products/flash-sale?limit=8`,
      {
        next: { revalidate: 30 },
      }
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const FlashSale = async () => {
  const products: ProductArray = await getFlashProducts();
  return (
    <section className="my-20">
      <div className="flex justify-between">
        <h1 className="text-3xl mb-10">Flash Sale</h1>
        <Link href="/flash-sale">
          <Button>See All</Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {/* <ProductCard /> */}
        {products?.map((product) => (
          <ProductCard
            key={`${product.id}`}
            name={product.name}
            price={product.price}
            prevPrice={product.prevPrice}
            discount={product.discount}
            image={product.images[0]}
            id={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
