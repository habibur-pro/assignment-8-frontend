import Container from "@/components/layout/Contaienr";
import CheckboxItem from "@/components/ui/CheckboxItem";
import ProductCard from "@/components/ui/ProductCard";
import { Card, CardHeader } from "@/components/ui/card";

const page = () => {
  const selectOptions = [{ label: "$20.00 - $ 50.00", value: "" }];
  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3 p-5 rounded">
            <Card className=" ">
              <CardHeader>
                <span>Price Range</span>
              </CardHeader>
              <div className="p-5 space-y-3">
                <CheckboxItem label="$20.00 - $ 50.00" />
                <CheckboxItem label="$20.00 - $ 50.00" />
                <CheckboxItem label="$20.00 - $ 50.00" />
                <CheckboxItem label="$20.00 - $ 50.00" />
              </div>
            </Card>
            <Card className="mt-10">
              <CardHeader>
                <span>Categories</span>
              </CardHeader>
              <div className="p-5 space-y-3">
                <CheckboxItem label="$20.00 - $ 50.00" />
                <CheckboxItem label="$20.00 - $ 50.00" />
                <CheckboxItem label="$20.00 - $ 50.00" />
                <CheckboxItem label="$20.00 - $ 50.00" />
              </div>
            </Card>
            <Card className="mt-10">
              <CardHeader>
                <span>Ratings</span>
              </CardHeader>
              <div className="p-5 space-y-3">
                <CheckboxItem label="$20.00 - $ 50.00" />
                <CheckboxItem label="$20.00 - $ 50.00" />
                <CheckboxItem label="$20.00 - $ 50.00" />
                <CheckboxItem label="$20.00 - $ 50.00" />
              </div>
            </Card>
          </div>
          <div className="col-span-9">
            <div>
              <h1 className=" text-3xl mb-5 font-semibold">
                Our Collection Of Products
              </h1>
              <p>Showing 1–12 of 24 item(s)</p>
              <p className="w-full md:w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
