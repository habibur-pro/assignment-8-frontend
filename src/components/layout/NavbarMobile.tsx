import { ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import NavLink from "../ui/Navlink";
export type TLink = {
  id: number;
  label: string;
  href: string;
};
export type TMobileNavProps = { children: ReactNode; navLinks: Array<TLink> };

export default function NavbarMobile({ children, navLinks }: TMobileNavProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent side="left" className="mt-14 z-50 ">
          <div className="w-full">
            <ul className="flex flex-col justify-center items-center gap-3 w-full">
              {navLinks.map((link) => (
                <NavLink key={link.id} label={link.label} href={link.href} />
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
