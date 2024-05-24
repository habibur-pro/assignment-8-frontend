import product from "@/assets/images/product.jpg";
import Image from "next/image";
import { Card } from "./card";
import { CirclePlus } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import Link from "next/link";
export type TProductCard = {
  name: string;
  image: string;
  prevPrice: number;
  price: number;
  discount: number;
  id: string;
};
const ProductCard = ({
  name,
  image,
  prevPrice,
  price,
  id,
  discount,
}: TProductCard) => {
  return (
    <div className="">
      <Link href={`/products/${id}`}>
        <Card className="border-0 overflow-hidden  relative  cursor-pointer hover:outline hover:outline-1 hover:outline-slate-300 hove:shadow ">
          <Badge className="absolute top-2 left-2">-{discount || 0}%</Badge>
          <div className="relative">
            <Image
              className="h-80 rounded-lg"
              src={image}
              alt="product"
              width={300}
              height={320}
            />
          </div>

          <div className="p-3 mt-3">
            <p>{name}</p>
            <div className="flex justify-between">
              <div className="inline-flex space-x-2">
                <p className="line-through text-slate-400">${prevPrice}.00</p>
                <p>${price}.00</p>
              </div>

              <span>
                <CirclePlus className="hover:text-orange-500" />
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
