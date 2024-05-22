import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";

const PopularProduct = () => {
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
        <Button>View all</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default PopularProduct;
