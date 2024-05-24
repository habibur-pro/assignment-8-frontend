import Container from "@/components/layout/Contaienr";
import config from "@/config";
import { TProduct } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

const getProduct = async (id: string) => {
  try {
    const response = await fetch(`${config.api_base_url}/products/${id}`, {
      next: { revalidate: 30 },
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export type TParams = { params: { id: string } };
const page = async ({ params }: TParams) => {
  const id = params.id;
  const product: TProduct = await getProduct(id);
  console.log(product);
  return (
    <div className="full-screen pt-10">
      <div>
        <Container className="lg:flex gap-5">
          <div>
            <Image
              src={product.images[0]}
              alt={product.code}
              width={500}
              height={530}
              className="border"
            />
          </div>
          <div>
            <div>
              <h3 className="text-3xl ">{product.name}</h3>
              <h3 className="text-2xl my-3">${product.price}.00</h3>
              <div className="my-3 flex gap-5">
                <p className="flex text-sm">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} />
                  ))}
                </p>
                <p>{product.reviews} reviews</p>
              </div>
            </div>
            <div>{product.description}</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default page;
