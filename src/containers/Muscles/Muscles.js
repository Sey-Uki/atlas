import { Breadcrumbs, Typography } from "@material-ui/core";
import muscles from "../../assets/images/muscles/Muscles.png";
import mus from "../../assets/images/muscles/mus.jpg";
import styles from "./Muscles.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Muscles = () => {
  const [showCardLeg, setShowCardLeg] = useState(false);
  const [showCardHip, setShowCardHip] = useState(false);
  const [showCardNeck, setShowCardNeck] = useState(false);

  return (
    <div className="muscles">
      <div className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Home
          </Link>
          <Typography color="textPrimary">Muscles</Typography>
        </Breadcrumbs>
      </div>
      <h1>Мышечная</h1>
      <div className="content">
        <h2>Наведите на картинку</h2>
        <div className="thumbnail">
          <svg viewBox="0 0 645.63379 1490.7042">
            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardLeg(false)}
              onMouseEnter={() => setShowCardLeg(true)}
              d="m 386.14628,1179.9912 c 16.46537,24.5439 38.67065,43.348 39.51264,83.5153 0.16433,28.6915 2.13804,57.9861 -4.49008,84.4134 l -27.83845,-76.3312 c -10.23371,-32.1003 -8.61944,-61.831 -7.18411,-91.5975 z"
            ></path>

            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardLeg(false)}
              onMouseEnter={() => setShowCardLeg(true)}
              d="m 258.63457,1176.8163 c -16.46537,24.5439 -38.67065,43.348 -39.51264,83.5153 -0.16433,28.6915 -2.13804,57.9861 4.49008,84.4134 l 27.83845,-76.3312 c 10.23371,-32.1003 8.61944,-61.831 7.18411,-91.5975 z"
            ></path>

            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardHip(false)}
              onMouseEnter={() => setShowCardHip(true)}
              d="m 440.68459,930.26359 15.87481,202.56251 c -17.78206,-28.7846 -36.03224,-57.2181 -40.6395,-95.8838 -5.94104,-43.91012 1.92052,-79.70107 24.76469,-106.67871 z"
            ></path>

            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardHip(false)}
              onMouseEnter={() => setShowCardHip(true)}
              d="m 203.19629,932.80356 -15.87481,202.56254 c 17.78206,-28.7846 36.03224,-57.2181 40.6395,-95.8838 5.94104,-43.91015 -1.92052,-79.7011 -24.76469,-106.67874 z"
            ></path>

            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardNeck(false)}
              onMouseEnter={() => setShowCardNeck(true)}
              d="m 290.82643,438.77962 55.87932,0 1.26998,38.73452 h -55.24432 z"
            ></path>
          </svg>
          <img src={muscles} alt="" />
        </div>
        <div className="card">
          <div className="cards">
            <p>
              Мышцы работают даже тогда, когда ты просто сидишь. Они удерживают
              твое тело в определенном положении. Мышцы состоят из волокон, а
              каждое мышечное волокно - из пучка других волокон меньшего
              размера. Это очень похоже на верёвку, которая тоже соткана из
              множества "ниточек".
            </p>
            <img src={mus} alt="" height="100" />
          </div>
        </div>

        {showCardLeg && (
          <div className={styles.miniCard}>
            <div className={styles.miniCards}>
              <p>Икроножная мышца сгибает ногу</p>
            </div>
          </div>
        )}

        {showCardHip && (
          <div className={styles.miniCard}>
            <div className={styles.miniCards}>
              <p>Мышца бедра выпрямляет ногу</p>
            </div>
          </div>
        )}

        {showCardNeck && (
          <div className={styles.miniCard}>
            <div className={styles.miniCards}>
              <p>
                Мышцы шеи держат голову ровно и отвечают за повороты в разные
                стороны
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
