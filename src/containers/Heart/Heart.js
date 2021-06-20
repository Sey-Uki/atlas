import styles from "./Heart.module.css";
import heart from "../../assets/images/heart/Heart.png";
import heartImg from "../../assets/images/heart/anatomical-heart_1fac0.png"
import { useState } from "react";
import { Breadcrumbs, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom'

export const Heart = () => {
  const [showCardHeart, setShowCardHeart] = useState(false);
  return (
    <div className={styles.skeleton}>
      <div className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Home
          </Link>
          <Typography color="textPrimary">Heart</Typography>
        </Breadcrumbs>
      </div>
      <h1>Сердечно-сосудистая</h1>
      <div className={styles.content}>
        <h2>Наведите на картинку</h2>
        <div className="thumbnail">
          <svg viewBox="0 0 638.87323 1460.2817">
            <path
              className={styles.block}
              fill="#b59247"
              onMouseLeave={() => setShowCardHeart(false)}
              onMouseEnter={() => setShowCardHeart(true)}
              d="m 276.22197,533.0908 121.39691,-3.51875 1.75938,119.63754 -126.67504,-3.51875 z"
            ></path>
          </svg>
          <img src={heart} alt="" />
        </div>

        {showCardHeart && (
          <div className={styles.card}>
            <div className={styles.cards}>
              <p>Сердце - качает кровь по телу</p>
           <img src={heartImg} alt="" width="200"/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
