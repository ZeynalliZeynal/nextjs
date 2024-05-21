import { navLinks } from "@app/_data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import styles from "./nav-links.module.sass";

const NavLinks = ({ isLight }) => {
  const pathName = usePathname();
  return (
    <ul className={styles.container}>
      {navLinks.map(({ name, to, goTo }) => (
        <li
          key={name}
          className={isLight ? styles.item_light : styles.item_dark}
        >
          <Link
            href={to}
            className={`${styles.link} ${
              pathName !== "/" && pathName === to ? styles.active : undefined
            }`}
            target={goTo ? "_blank" : "_self"}
          >
            {name}{" "}
            {goTo && (
              <span className={styles.goto}>
                <GoArrowUpRight />
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
