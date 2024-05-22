import Link from "next/link";
export type TNavLink = {
  label: string;
  href: string;
};
const NavLink = ({ label, href }: TNavLink) => {
  return (
    <li>
      <Link className="capitalize" href={href}>
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
