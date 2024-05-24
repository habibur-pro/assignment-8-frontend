"use client";
import Image from "next/image";
import { Card } from "./card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setCategory } from "@/redux/features/querySlice";
import { useRouter } from "next/navigation";
import { useGetAllProductsQuery } from "@/redux/api";
import { queryGenerator } from "@/lib/utils";
export type TCategoryCard = { className: string; name: string; image: string };
const CategoryCard = ({ className, name, image }: TCategoryCard) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.query);
  const router = useRouter();
  const handleClick = () => {
    dispatch(setCategory(name));
    router.push("/products");
  };
  return (
    <div onClick={handleClick} className={`${className} relative`}>
      {/* <Card className="relative"> */}
      <Image
        src={image}
        width={0}
        height={0}
        sizes="50vh"
        alt={name}
        style={{ width: "100%", height: "100%" }}
      />
      <div className="bg-black w-full h-full absolute top-0 left-0 bg-opacity-40 flex items-center justify-center">
        <span className="text-3xl text-yellow-100 font-bold capitalize">
          {name}
        </span>
      </div>
      {/* </Card> */}
    </div>
  );
};

export default CategoryCard;
