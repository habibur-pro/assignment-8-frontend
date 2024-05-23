import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import product from "@/assets/images/product.jpg";
import config from "@/config";

export type TProduct = {
  id: string;
  name: string;
  code: string;
  images: Array<string>;
  prevPrice: number;
  price: number;
  discount: number;
  category: string;
  isFlash: boolean;
  description: string;
  rating: number;
  reviews: number;
  quantity: number;
  sale: number;
};

export type TProductArray = Array<TProduct>;

const getProducts = async () => {
  try {
    const response = await fetch(`${config.api_base_url}/products`, {
      next: { revalidate: 30 },
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
const Dashboard = async () => {
  const products: TProductArray = await getProducts();
  return (
    <div>
      <h3 className="text-3xl mb-5">All Products</h3>
      <Table className=" border rounded-lg overflow-x-scroll">
        <TableHeader>
          <TableRow className="bg-primary">
            <TableHead className="">SL NO</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Product ID</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">2133</TableCell>
              <TableCell className="flex gap-3 items-center">
                <Image
                  className="h-20 w-16 rounded"
                  src={product.images[0]}
                  alt="product"
                  width={40}
                  height={50}
                />

                <span className=" lg:text-wrap w-1/2 text-lg md:w-1/6 ">
                  {product.name}
                </span>
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.code}</TableCell>
              <TableCell className="text-right">${product.price}.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Dashboard;
