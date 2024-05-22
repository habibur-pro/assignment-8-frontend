import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";

const FlashSale = () => {
  return (
    <section className="my-20">
      <div className="flex justify-between">
        <h1 className="text-3xl mb-10">Flash Sale</h1>
        <Button>See All</Button>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-7">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default FlashSale;
