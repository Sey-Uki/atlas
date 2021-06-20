import styles from "./HeaderIcons.module.css";
import searchIcon from "./../../assets/images/icons/icons8-search.svg";
import letterIcon from "./../../assets/images/icons/icons8-letter-i-52.png";
import cloudIcon from "./../../assets/images/icons/house.svg";
import { Link } from "react-router-dom";

export const HeaderIcons = () => {
  return (
    <div className={styles.icons}>
      <Link to="/">
        <img src={cloudIcon} className={styles.letter} alt="" />
      </Link>
      <a
        href="https://med-vvolske.ru/docs/2018_04_05/KtbrKkzGs25TS77ta94Gse94G.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={searchIcon}
          className={styles.search}
          alt="Human atlas book"
        />
      </a>
      <Link to="/about">
        <img src={letterIcon} className={styles.letter} alt="About us" />
      </Link>
    </div>
  );
};
