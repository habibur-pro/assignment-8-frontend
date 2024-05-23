import product from "@/assets/images/product.jpg";
import Image from "next/image";
import { Card } from "./card";
import { CirclePlus } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
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
      <Card className="border-0 overflow-hidden cursor-pointer hover:outline hover:outline-1 hover:outline-slate-300 hove:shadow relative">
        <Badge className="absolute top-2 left-2">-{discount || 0}%</Badge>
        <Image
          className="h-80 rounded-lg"
          src={image}
          alt="product"
          width={300}
          height={320}
        />

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
    </div>
  );
};

export default ProductCard;
