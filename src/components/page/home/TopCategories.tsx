import CategoryCard from "@/components/ui/CategoryCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export type TCategoryItem = { name: string; image: string; className: string };
const TopCategories = () => {
  const categories: Array<TCategoryItem> = [
    {
      name: "panjabi",
      image:
        "https://believerssign.com/_next/image?url=https%3A%2F%2Fapi.believerssign.com%2Fpublic%2Fproduct%2FUlH72cEvqB1s0I6qDY7.jpg&w=640&q=75",
      className: "col-span-4 row-span-2 border min-h-64",
    },
    {
      name: "tShirt",
      image:
        "https://believerssign.com/_next/image?url=https%3A%2F%2Fapi.believerssign.com%2Fpublic%2Fproduct%2FLqIvwR80Jf8jSalPOdk.jpg&w=640&q=75",
      className: "col-span-4 row-span-1 border min-h-64",
    },
    {
      name: "jrsey",
      image:
        "https://believerssign.com/_next/image?url=https%3A%2F%2Fapi.believerssign.com%2Fpublic%2Fproduct%2FUXlAHqyyQ2XqOSELMY-.jpg&w=640&q=75",
      className: "col-span-4 row-span-1 border min-h-64",
    },
    {
      name: "borkha",
      image:
        "https://believerssign.com/_next/image?url=https%3A%2F%2Fapi.believerssign.com%2Fpublic%2Fproduct%2FTusM49N3L69IbkZvk-H.jpg&w=640&q=75",
      className: "col-span-4 row-span-2 border min-h-64",
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

        {/* <Card className="col-span-4 row-span-2 border min-h-64">div1</Card>
        <Card className="col-span-4 row-span-1 border min-h-64">div1</Card>
        <Card className="col-span-4 row-span-2 border min-h-64">div1</Card>
        <Card className="col-span-4 row-span-1 border min-h-64">div1</Card> */}
      </div>
      <div className="flex justify-center mt-5">
        <Button>View All</Button>
      </div>
    </section>
  );
};

export default TopCategories;
