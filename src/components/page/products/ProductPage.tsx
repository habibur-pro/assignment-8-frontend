"use client";
import Container from "@/components/layout/Contaienr";
import CategoryCheckbox from "@/components/ui/CategoryCheckbox";
import Loader from "@/components/ui/Loader";
import PriceRangeCheckbox from "@/components/ui/PriceRangeCheckbox";
import ProductCard from "@/components/ui/ProductCard";
import RatingCheckbox from "@/components/ui/RatingCheckbox";
import { Card, CardHeader } from "@/components/ui/card";
import { queryGenerator } from "@/lib/utils";
import { useGetAllProductsQuery } from "@/redux/api";
import { useAppSelector } from "@/redux/hook";
import { ProductArray, TProduct } from "@/types";

const Products = () => {
  const selector = useAppSelector((state) => state.query);
  const queryStr = queryGenerator(selector);
  const { data: products, isLoading, error } = useGetAllProductsQuery(queryStr);
  // if (isLoading) {
  //   return <Loader />;
  // }
  const priceOptions = [
    { label: "$20.00 - $ 50.00", minPrice: 20, maxPrice: 50 },
    { label: "$50.00 - $ 100.00", minPrice: 50, maxPrice: 100 },
    { label: "$100.00 - $ 200.00", minPrice: 100, maxPrice: 200 },
    { label: "$200.00 - $ 400.00", minPrice: 200, maxPrice: 400 },
    { label: "$400.00 - $ 600.00", minPrice: 400, maxPrice: 600 },
  ];
  const categoryOptions = [
    { label: "shirt", value: "shirt" },
    { label: "tshirt", value: "tshirt" },
    { label: "jersey", value: "jersey" },
    { label: "jacket", value: "jacket" },
  ];
  const ratingOptions = [
    { label: "1 Star", value: 1 },
    { label: "2 Star", value: 2 },
    { label: "3 Star", value: 3 },
    { label: "4 Star", value: 4 },
    { label: "5 Star", value: 5 },
  ];
  return (
    <div className="pt-10">
      <Container className="relative">
        <div className="grid grid-cols-12 gap-10 ">
          <div className="col-span-3 p-5 rounded  ">
            <Card className=" ">
              <CardHeader>
                <span>Price Range</span>
              </CardHeader>
              <div className="p-5 space-y-3">
                {priceOptions.map((item) => (
                  <PriceRangeCheckbox
                    key={item.label}
                    minPrice={item.minPrice}
                    maxPrice={item.maxPrice}
                    label={item.label}
                  />
                ))}
              </div>
            </Card>
            <Card className="mt-10">
              <CardHeader>
                <span>Categories</span>
              </CardHeader>
              <div className="p-5 space-y-3">
                {categoryOptions.map((category) => (
                  <CategoryCheckbox
                    key={category.label}
                    value={category.value}
                    label={category.label}
                  />
                ))}
              </div>
            </Card>
            <Card className="mt-10">
              <CardHeader>
                <span>Ratings</span>
              </CardHeader>
              <div className="p-5 space-y-3">
                {ratingOptions.map((rating) => (
                  <RatingCheckbox
                    key={rating.label}
                    label={rating.label}
                    value={`${rating.value}`}
                  />
                ))}
              </div>
            </Card>
          </div>
          <div className="col-span-9 overflow-scroll">
            <div>
              <h1 className=" text-3xl mb-5 font-semibold">
                Our Collection Of Products
              </h1>
              <p>Showing {products?.data?.length} item(s)</p>
              <p className="w-full md:w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
              {isLoading && (
                <div className="flex items-center justify-center h-screen">
                  <div>
                    <Loader />
                  </div>
                </div>
              )}
              {products?.data?.length > 1 ? (
                products?.data.map((product: TProduct) => (
                  <ProductCard
                    key={`${product.id}`}
                    name={product.name}
                    price={product.price}
                    prevPrice={product.prevPrice}
                    discount={product.discount}
                    image={product.images[0]}
                    id={product.id}
                  />
                ))
              ) : (
                <div className=" mt-10">
                  <p className="text-red-500">No Product Match</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
