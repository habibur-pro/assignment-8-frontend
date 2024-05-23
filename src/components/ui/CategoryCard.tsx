import Image from "next/image";
import { Card } from "./card";
export type TCategoryCard = { className: string; name: string; image: string };
const CategoryCard = ({ className, name, image }: TCategoryCard) => {
  return (
    <Card className={className}>
      <Image
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        alt={name}
        style={{ width: "100%", height: "auto" }}
      />
    </Card>
  );
};

export default CategoryCard;
