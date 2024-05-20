import { navLinks } from "@app/_data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";

const NavLinks = () => {
  const pathName = usePathname();
  return (
    <ul className="navLinks_container">
      {navLinks.map(({ name, to, goTo }) => (
        <li key={name}>
          <Link
            href={to}
            className={`nav_link ${pathName !== "/" && pathName === to ? "nav_link--active" : ""}`}
            target={goTo ? "_blank" : "_self"}
          >
            {name} {goTo && <GoArrowUpRight className="nav_link_goto" />}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
