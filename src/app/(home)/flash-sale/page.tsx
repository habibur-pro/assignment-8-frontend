import Container from "@/components/layout/Contaienr";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <Container>
        <div>
          <h1 className="text-3xl mb-10">Flash Sale</h1>
          <p className="font-semibold">Showing 1–12 of 24 item(s)</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 my-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-center mb-10">
          <Button>Load More</Button>
        </div>
      </Container>
    </div>
  );
};

export default page;
