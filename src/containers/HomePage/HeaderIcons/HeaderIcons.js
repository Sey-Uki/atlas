import styles from "./HeaderIcons.module.css";
import searchIcon from "../../../assets/images/icons/icons8-search.svg";
import letterIcon from "../../../assets/images/icons/icons8-letter-i-52.png";
import cloudIcon from "../../../assets/images/icons/icons8-cloud-128.png"

export const HeaderIcons = () => {
  return(
      <div className={styles.icons}>
     <img src={searchIcon} className={styles.search} alt="" />
     <img src={letterIcon} className={styles.letter} alt="" />
     <img src={cloudIcon} className={styles.letter} alt="" />
     </div>
  ) 
};
