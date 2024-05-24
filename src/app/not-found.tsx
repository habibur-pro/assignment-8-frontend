import Image from "next/image";
import notFoundImage from "@/assets/images/not-found.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="relative">
      <Image
        src={notFoundImage}
        alt="not found"
        className="h-screen w-screen object-contain"
      />
      <div className="absolute bottom-20 left-1/2">
        <Link href="/">
          <Button size="default" className="">
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
