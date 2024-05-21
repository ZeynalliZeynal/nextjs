"use client";

import NavLeft from "./navLeft";
import NavRight from "@app/_layout/navbar/navRight";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.sass";

const Navbar = () => {
  const pathname = usePathname();
  const isLight = pathname === "/showcase" ? "true" : undefined;
  return (
    <nav className={isLight ? styles.light : styles.dark}>
      <div className={styles.grid}>
        <NavLeft isLight={isLight} />
        <NavRight isLight={isLight} />
      </div>
    </nav>
  );
};

export default Navbar;
