import styles from "./default-link.module.sass";

const DefaultLink = ({ children, large = false, link, light }) => {
  return (
    <a
      href={link}
      className={`${styles.container} ${light && large ? `${styles.light_lg}` : light ? styles.light : large ? styles.dark_lg : styles.dark}`}
    >
      <span className={styles.inner}>{children}</span>
    </a>
  );
};

export default DefaultLink;
