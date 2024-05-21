"use client";
import { usePathname } from "next/navigation";
import styles from "./body.module.sass";

const Body = ({ children }) => {
  const pathname = usePathname();
  return (
    <body
      className={pathname === "/showcase" ? styles.light : styles.dark}
      suppressHydrationWarning
    >
      {children}
    </body>
  );
};

export default Body;
