import { Label } from "@radix-ui/react-menubar";
import NavLink from "../ui/Navlink";
import { Menubar } from "../ui/menubar";
import Container from "./Contaienr";
import NavbarMobile from "./NavbarMobile";
import Link from "next/link";
const Navbar = () => {
  const navLinks = [
    { id: 1, label: "home", href: "/" },
    { id: 2, label: "categories", href: "/categories" },
    { id: 3, label: "products", href: "/products" },
    { id: 4, label: "flash sale", href: "/flash-sale" },
    { id: 5, label: "about us", href: "/about-us" },
    { id: 6, label: "contact us", href: "/contact-us" },
    { id: 7, label: "dashboard", href: "/dashboard" },
  ];
  return (
    <div>
      <Menubar className="fixed top-0 left-0 right-0 w-full rounded-none h-16 mb-16 z-[99999999] ">
        <Container>
          <div className="flex justify-between items-center  ">
            <div className="flex gap-5 items-center">
              {/* <img className="size-12" src={logo} alt="" /> */}
              <p className="font-bold text-xl">Logo</p>
            </div>
            <ul className="hidden lg:flex gap-5">
              {navLinks.map((link) => (
                <NavLink key={link.id} label={link.label} href={link.href} />
              ))}
            </ul>
            <span className="lg:hidden">
              <NavbarMobile navLinks={navLinks}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </NavbarMobile>
            </span>
          </div>
        </Container>
      </Menubar>
    </div>
  );
};

export default Navbar;
