import NavLogos from "@app/_layout/navbar/navLeft/navLogos";
import NavLinks from "@app/_layout/navbar/navLeft/navLinks";
import styles from "./nav-left.module.sass";

const NavLeft = ({ isLight }) => {
  return (
    <div className={styles.container}>
      <NavLogos isLight={isLight} />
      <NavLinks isLight={isLight} />
    </div>
  );
};

export default NavLeft;
