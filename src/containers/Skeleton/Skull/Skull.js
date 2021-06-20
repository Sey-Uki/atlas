import styles from "./Skull.module.css";
import skull from "../../../assets/images/skeleton/skull.png";
import { Breadcrumbs, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom'

export const Skull = () => {
  return (
    <div className={styles.skull}>
      <div className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Home
          </Link>
          <Link color="inherit" to="/skeleton">
            Skeleton
          </Link>
          <Typography color="textPrimary">Skull</Typography>
        </Breadcrumbs>
        <h1>Skull</h1>
      </div>
      <h2>Наведите на картинку</h2>
      <img src={skull} alt="" width="400" />
    </div>
  );
};
