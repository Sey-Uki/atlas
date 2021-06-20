import styles from "./Skeleton.module.css";
import skeleton from "../../assets/images/skeleton/skeleton.svg";
import spine from "../../assets/images/skeleton/pngtree-cervical-spine-image_2248395.png";
import chest from "../../assets/images/skeleton/5df4a962a5f8a033a6f467c39447f869.png";
import skull from "../../assets/images/skeleton/skull.png";
import pelvis from "../../assets/images/skeleton/pelvis.png";
import { useState } from "react";
import { Breadcrumbs, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const Skeleton = () => {
  const [showCardSkull, setShowCardSkull] = useState(false);
  const [showCardSpine, setShowCardSpine] = useState(false);
  const [showCardPelvis, setShowCardPelvis] = useState(false);
  return (
    <div className={styles.skeleton}>
      <div className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Home
          </Link>
          <Typography color="textPrimary">Sceleton</Typography>
        </Breadcrumbs>
      </div>
      <h1>Skeleton</h1>
      <div className={styles.content}>
        <h2>Наведите на картинку</h2>
        <div className="thumbnail">
          <svg viewBox="0 0 211 451">
            <NavLink to="/skull">
              <path
                className={styles.block}
                fill="#b59247"
                onMouseLeave={() => setShowCardSkull(false)}
                onMouseEnter={() => setShowCardSkull(true)}
                d="m 66.36385,30.814065 h 77.35927 l 0.55655,93.833405 -77.359277,-1.1803 z"
              ></path>
            </NavLink>
            <path
              className={styles.block}
              fill="#b59247"
              onMouseLeave={() => setShowCardSpine(false)}
              onMouseEnter={() => setShowCardSpine(true)}
              d="m 66.894438,132.81602 h 77.359272 l 0.55655,120.76439 -77.359279,-1.51906 z"
            ></path>
            <path
              className={styles.block}
              fill="#b59247"
              onMouseLeave={() => setShowCardPelvis(false)}
              onMouseEnter={() => setShowCardPelvis(true)}
              d="m 73.751765,254.15176 h 64.731765 l -3.71412,28.65177 -55.711763,0.53059 z"
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

        {showCardPelvis && (
          <div className={styles.card}>
            <div className={styles.cards}>
              <p>
                Таз (лат. pelvis) — расположенная в основании позвоночника часть
                скелета человека
              </p>
              <img src={pelvis} alt="" height="150" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
