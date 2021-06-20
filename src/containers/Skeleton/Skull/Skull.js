import styles from "./Skull.module.css";
import skull from "../../../assets/images/skeleton/300px-Human_skull_front_simplified_(bones)_ru.svg.png";
import { Breadcrumbs, Typography } from "@material-ui/core";

export const Skull = () => {
  return (
    <div className={styles.skull}>
      <div className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <a color="inherit" href="/">
            Home
          </a>
          <a color="inherit" href="/skeleton">
            Skeleton
          </a>
          <Typography color="textPrimary">Skull</Typography>
        </Breadcrumbs>
        <h1>Skull</h1>
      </div>
      <h2>Наведите на картинку</h2>
      <img src={skull} alt="" width="400" />
    </div>
  );
};
