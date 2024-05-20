import Link from "next/link";
import { LogoSeparatorSVG, NextSVG, VercelSVG } from "@app/_components/svgs";

const NavLogos = () => {
  return (
    <div className="logos">
      <Link
        href="https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=home"
        target="_blank"
      >
        <VercelSVG />
      </Link>
      <span className="logo_separator">
        <LogoSeparatorSVG />
      </span>
      <Link href="/">
        <NextSVG />
      </Link>
    </div>
  );
};
export default NavLogos;
