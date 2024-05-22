import * as React from "react";
import product from "@/assets/images/product.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const HeroCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="border-0 overflow-hidden cursor-pointer hover:outline hover:outline-1 hover:outline-slate-300 hove:shadow relative">
                <Badge className="absolute top-2 left-2">-10%</Badge>
                <Image
                  className="h-64 rounded-lg"
                  src={product}
                  alt="product"
                />

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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default HeroCarousel;
