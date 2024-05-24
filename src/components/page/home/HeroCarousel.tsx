import * as React from "react";
import shirt from "@/assets/images/shirt.jpg";
import jersey from "@/assets/images/jersey.jpg";
import jacket from "@/assets/images/jacket.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CirclePlus } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { ProductArray } from "@/types";
export type Product = {
  id: string;
  name: string;
  code: string;
  images: StaticImageData;
  prevPrice: number;
  price: number;
  discount: number;
  category: string;
  isFlash: boolean;
  isFeatured: boolean;
  description: string;
  rating: number;
  reviews: number;
  quantity: number;
};

const HeroCarousel = () => {
  const products: Array<Product> = [
    {
      id: "0df5d04733",
      name: "Premium shirt",
      code: "KJTO2JAF",
      images: shirt,
      prevPrice: 120,
      price: 100,
      discount: 10,
      isFlash: false,
      isFeatured: false,
      category: "tshirt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio fugit hic repudiandae, similique soluta officiis ipsam dicta dolor illum nobis veritatis distinctio alias sit sint explicabo fugiat porro voluptates",
      rating: 5,
      reviews: 20,
      quantity: 500,
    },
    {
      id: "95c30e42e7",
      name: "Jersey",
      code: "RDN1CECG",
      images: jersey,
      prevPrice: 500,
      price: 400,
      discount: 50,
      category: "tshirt",
      isFlash: true,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio fugit hic repudiandae, similique soluta officiis ipsam dicta dolor illum nobis veritatis distinctio alias sit sint explicabo fugiat porro voluptates",
      rating: 4,
      reviews: 30,
      quantity: 500,
      isFeatured: false,
    },
    {
      id: "801e1109bb",
      name: "Jacket",
      code: "KOQG8PP0",
      images: jacket,
      prevPrice: 450,
      price: 400,
      discount: 10,
      category: "tshirt",
      isFlash: true,
      isFeatured: true,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio fugit hic repudiandae, similique soluta officiis ipsam dicta dolor illum nobis veritatis distinctio alias sit sint explicabo fugiat porro voluptates",
      rating: 1,
      reviews: 30,
      quantity: 500,
    },
    {
      id: "349b58b931",
      name: "Shirt",
      code: "NH1VHGWD",
      images: shirt,
      prevPrice: 400,
      price: 350,
      discount: 10,
      category: "shirt",
      isFlash: false,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio fugit hic repudiandae, similique soluta officiis ipsam dicta dolor illum nobis veritatis distinctio alias sit sint explicabo fugiat porro voluptates",
      rating: 3,
      reviews: 30,
      quantity: 500,
      isFeatured: false,
    },
    {
      id: "9b5e227b27",
      name: "Grameenphone Premium",
      code: "5GRCFBBJ",
      images: shirt,
      prevPrice: 500,
      price: 400,
      discount: 10,
      category: "jersey",
      isFlash: false,
      isFeatured: false,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio fugit hic repudiandae, similique soluta officiis ipsam dicta dolor illum nobis veritatis distinctio alias sit sint explicabo fugiat porro voluptates",
      rating: 4,
      reviews: 30,
      quantity: 500,
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="border-0 overflow-hidden cursor-pointer hover:outline hover:outline-1 hover:outline-slate-300 hove:shadow relative">
                <Badge className="absolute top-2 left-2">-10%</Badge>
                <Image
                  className="h-64 rounded-lg"
                  src={product.images}
                  alt="product"
                />

                <div className="p-3 mt-3">
                  <p>{product.name}</p>
                  <div className="flex justify-between">
                    <div className="inline-flex space-x-2">
                      <p className="line-through text-slate-400">
                        ${product.prevPrice}.00
                      </p>
                      <p>${product.price}.00</p>
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
