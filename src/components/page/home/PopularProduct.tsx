import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import config from "@/config";
import { ProductArray } from "@/types";
import Link from "next/link";

const getTopRatedProducts = async () => {
  try {
    const response = await fetch(
      `${config.api_base_url}/products?rating=5&limit=8`,
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

const PopularProduct = async () => {
  const topRatedProducts: ProductArray = await getTopRatedProducts();
  return (
    <section className="my-20">
      <div className="flex justify-between">
        <div className="mb-10">
          <h1 className="text-3xl">Most Popular Products</h1>
          <p className="full md:w-1/2  mt-3  text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            ducimus voluptates rem dolorum veniam, omnis et
          </p>
        </div>
        <Link href="products">
          <Button>View all</Button>
        </Link>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {topRatedProducts?.map((product) => (
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

export default PopularProduct;
