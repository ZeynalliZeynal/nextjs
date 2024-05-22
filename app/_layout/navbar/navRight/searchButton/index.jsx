import styles from "@app/_layout/navbar/navRight/searchButton/search-button.module.sass";
import KeyButton from "@app/_components/buttons/keyButton";
import { MdKeyboardCommandKey } from "react-icons/md";

const SearchButton = ({ isLight }) => {
  return (
    <span
      className={isLight ? styles.search_bar_light : styles.search_bar_dark}
    >
      <span>
        Search <span className={styles.text_hidden}>documentation</span>...
      </span>
      <KeyButton light={isLight}>
        <span>
          <MdKeyboardCommandKey />
        </span>
        K
      </KeyButton>
    </span>
  );
};

export default SearchButton;
