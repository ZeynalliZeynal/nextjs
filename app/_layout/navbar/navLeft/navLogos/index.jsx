import Link from "next/link";
import { LogoSeparatorSVG, NextSVG, VercelSVG } from "@app/_components/svgs";
import styles from "./nav-logos.module.sass";

const NavLogos = ({ isLight }) => {
  return (
    <div className={styles.dark}>
      <Link
        href="https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=home"
        target="_blank"
      >
        <VercelSVG />
      </Link>
      <span
        className={isLight ? styles.separator_light : styles.separator_dark}
      >
        <LogoSeparatorSVG />
      </span>
      <Link href="/">
        <NextSVG />
      </Link>
    </div>
  );
};
export default NavLogos;
