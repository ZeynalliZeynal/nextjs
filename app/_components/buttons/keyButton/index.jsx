import styles from "./key-button.module.sass";

const KeyButton = ({ children, light }) => {
  return (
    <button
      className={`${styles.container} ${light ? styles.light : styles.dark}`}
    >
      {children}
    </button>
  );
};

export default KeyButton;
