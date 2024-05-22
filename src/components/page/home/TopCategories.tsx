import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TopCategories = () => {
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
        <Card className="col-span-4 row-span-2 border min-h-64">div1</Card>
        <Card className="col-span-4 row-span-1 border min-h-64">div1</Card>
        <Card className="col-span-4 row-span-2 border min-h-64">div1</Card>
        <Card className="col-span-4 row-span-1 border min-h-64">div1</Card>
      </div>
      <div className="flex justify-center mt-5">
        <Button>View All</Button>
      </div>
    </section>
  );
};

export default TopCategories;
