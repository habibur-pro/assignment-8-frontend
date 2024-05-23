import { TProductArray } from "@/app/(home)/page";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
export type TFlashSale = {
  products: TProductArray;
};
const FlashSale = ({ products }: TFlashSale) => {
  return (
    <section className="my-20">
      <div className="flex justify-between">
        <h1 className="text-3xl mb-10">Flash Sale</h1>
        <Button>See All</Button>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-7">
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
