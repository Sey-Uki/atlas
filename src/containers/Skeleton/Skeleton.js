import styles from "./Skeleton.module.css";
import skeleton from "../../assets/images/skeleton/skeleton.svg";
import spine from "../../assets/images/skeleton/pngtree-cervical-spine-image_2248395.png";
import chest from "../../assets/images/skeleton/5df4a962a5f8a033a6f467c39447f869.png";
import skull from "../../assets/images/skeleton/300px-Human_skull_front_simplified_(bones)_ru.svg.png";
import { useState } from "react";
import { Breadcrumbs, Typography } from "@material-ui/core";

export const Skeleton = () => {
  const [showCardSkull, setShowCardSkull] = useState(false);
  const [showCardSpine, setShowCardSpine] = useState(false);
  return (
    <div className={styles.skeleton}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs aria-label="breadcrumb">
          <a color="inherit" href="/">
            Home
          </a>
          <Typography color="textPrimary">Sceleton</Typography>
        </Breadcrumbs>
      </div>
      <h1>Skeleton</h1>
      <div className={styles.content}>
        <h2>Point</h2>
        <div className={styles.thumbnail}>
          <svg viewBox="0 0 211 451">
            <path
              className={styles.block}
              fill="#b59247"
              onMouseLeave={() => setShowCardSkull(false)}
              onMouseEnter={() => setShowCardSkull(true)}
              d="m 66.36385,30.814065 h 77.35927 l 0.55655,93.833405 -77.359277,-1.1803 z"
            ></path>

            <path
              className={styles.block}
              fill="#b59247"
              onMouseLeave={() => setShowCardSpine(false)}
              onMouseEnter={() => setShowCardSpine(true)}
              d="m 66.894438,132.81602 h 77.359272 l 0.55655,120.76439 -77.359279,-1.51906 z"
            ></path>
          </svg>
          <img src={skeleton} alt="" />
        </div>

        {showCardSkull && (
          <div className={styles.card}>
            <div className={styles.cards}>
              <p>
                Череп - это кости головы, они крепко соеденины между собой,
                поэтому череп очень крепкий
              </p>
              <img src={skull} className={styles.skull} alt="" height="200" />
            </div>
          </div>
        )}

        {showCardSpine && (
          <div className={styles.card}>
            <div className={styles.cards}>
              <div className={styles.card_block}>
                <p>
                  Позвоночник - стержень всего организма. Он состоит из
                  маленьких косточек - позвонков. Между собой позвонки
                  соединяются, как бусинки, с помощью суставов и связок.
                </p>
                <img src={spine} alt="" height={200} />
              </div>

              <div className={styles.card_block}>
                <img src={chest} alt="" height="100" />
                <p>
                  Грудная клетка, как доспехи защищает наши легкие и сердце от
                  повреждений, состоит она из ребер
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};