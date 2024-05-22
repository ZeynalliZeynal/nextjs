import styles from "./nav-right.module.sass";
import SearchButton from "@app/_layout/navbar/navRight/searchButton";
import Links from "@app/_layout/navbar/navRight/links";

const NavRight = ({ isLight }) => {
  return (
    <div className={styles.container}>
      <SearchButton isLight={isLight} />
      <Links isLight={isLight} />
    </div>
  );
};

export default NavRight;
