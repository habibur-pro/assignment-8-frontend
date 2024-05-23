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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Dashboard = () => {
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
          <TableRow>
            <TableCell className="font-medium">2133</TableCell>
            <TableCell className="flex gap-3 items-center">
              <Image
                className="h-20 w-16 rounded"
                src={product}
                alt="product"
              />

              <span className=" lg:text-wrap w-1/2 text-lg md:w-1/6 ">
                Double Bed & Dressing
              </span>
            </TableCell>
            <TableCell>Panjabi</TableCell>
            <TableCell>1561651561</TableCell>
            <TableCell className="text-right">$200.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default Dashboard;
