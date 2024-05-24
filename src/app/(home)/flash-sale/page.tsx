import Container from "@/components/layout/Contaienr";
import ProductCard from "@/components/ui/ProductCard";
import Countdown from "@/components/ui/Timmer";
import { Button } from "@/components/ui/button";
import config from "@/config";
import { ProductArray } from "@/types";
const getFlashProducts = async () => {
  try {
    const response = await fetch(`${config.api_base_url}/products/flash-sale`, {
      next: { revalidate: 30 },
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const page = async () => {
  const products: ProductArray = await getFlashProducts();
  return (
    <div className="pt-10">
      <Container>
        <div>
          <h1 className="text-3xl mb-5">Flash Sale</h1>
          <Countdown />
          <p className="font-semibold">
            Showing 1–{products.length} of {products.length} item(s)
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 my-10">
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
        <div className="flex justify-center mb-10">
          <Button>Load More</Button>
        </div>
      </Container>
    </div>
  );
};

export default page;
