import CategoryCard from "@/components/ui/CategoryCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export type TCategoryItem = { name: string; image: string; className: string };
const TopCategories = () => {
  const categories: Array<TCategoryItem> = [
    {
      name: "tshirt",
      image: "https://fabrilife.com/products/6496b99a140f4-square.jpg?v=20",
      className: "col-span-4 row-span-2 border min-h-32 max-h-52 max-h-[435px]",
    },
    {
      name: "shirt",
      image: "https://fabrilife.com/products/64b2437cb436e-square.jpg?v=20",
      className: "col-span-4 row-span-1 border min-h-32 max-h-52",
    },
    {
      name: "jersey",
      image: "https://fabrilife.com/products/6347e814261be-square.jpg?v=20",
      className: "col-span-4 row-span-2 border min-h-32 max-h-52 max-h-[435px]",
    },
    {
      name: "jacket",
      image: "https://fabrilife.com/products/6580330f90068-square.jpg?v=20",
      className: "col-span-4 row-span-1 border min-h-32 max-h-52 ",
    },
  ];

  return (
    <section className="my-20">
      <div className="mb-10">
        <h1 className="text-3xl text-center">Top Categories</h1>
        <p className="full md:w-1/2 mx-auto mt-3 text-center text-slate-700">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-10">
        {categories.map((category) => (
          <CategoryCard
            name={category.name}
            image={category.image}
            key={category.name}
            className={category.className}
          />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Button>View All</Button>
      </div>
    </section>
  );
};

export default TopCategories;
