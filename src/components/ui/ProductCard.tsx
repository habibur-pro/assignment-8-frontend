import product from "@/assets/images/product.jpg";
import Image from "next/image";
import { Card } from "./card";
import { CirclePlus } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
const ProductCard = () => {
  return (
    <div className="">
      <Card className="border-0 overflow-hidden cursor-pointer hover:outline hover:outline-1 hover:outline-slate-300 hove:shadow relative">
        <Badge className="absolute top-2 left-2">-10%</Badge>
        <Image className="h-80 rounded-lg" src={product} alt="product" />

        <div className="p-3 mt-3">
          <p>Tencel Panjabi</p>
          <div className="flex justify-between">
            <div className="inline-flex space-x-2">
              <p className="line-through text-slate-400">$300.00</p>
              <p>$200.00</p>
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
