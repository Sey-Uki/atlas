import { Breadcrumbs, Typography } from "@material-ui/core";
import { useState } from "react";
import nerves from "../../assets/images/nerves/Nerves.png";
import brain from "../../assets/images/nerves/brain.png";
import { Link } from "react-router-dom";

export const Nerves = () => {
  const [showCardBrain, setShowCardBrain] = useState(false);
  const [showCardSpinalCord, setShowSpinalCord] = useState(false);

  return (
    <div className="nerves">
      <div className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" exact to="/">
            Home
          </Link>
          <Typography color="textPrimary">Nerves</Typography>
        </Breadcrumbs>
      </div>
      <h1>Nerves</h1>
      <div className="content">
        <h2>Наведите на картинку</h2>
        <div className="thumbnail">
          <svg viewBox="0 0 638.87323 1463.662">
            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardBrain(false)}
              onMouseEnter={() => setShowCardBrain(true)}
              d="m 216.90413,105.80689 c 10.74568,-14.876614 26.89376,-27.437911 45.84965,-38.795859 21.6079,-11.500173 40.05581,-1.933668 58.19379,9.698965 0.62839,-19.031287 22.15685,-11.979415 33.50551,-11.462413 34.80617,1.135507 45.23273,21.289448 54.6669,41.441027 27.40899,-4.33405 24.47582,9.18275 35.26896,14.10759 22.68643,30.38939 4.69334,52.06174 -3.5269,75.82827 2.21706,16.61855 0.41408,29.21706 -7.93551,35.26897 -23.26952,5.71819 -55.89966,9.51905 -78.03258,-7.49466 l -29.53776,12.785 c -16.408,-0.30512 -32.37895,-3.23247 -47.6131,-10.58069 -15.12745,6.95899 -30.51683,13.45962 -50.25827,12.34414 -37.31309,5.64986 -36.79065,-17.99231 -38.79586,-39.67759 -8.16505,-10.10323 -12.4081,-26.92988 -12.34414,-51.13999 1.87478,-37.39757 18.82601,-44.64224 40.55931,-42.32276 z"
            ></path>
            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowSpinalCord(false)}
              onMouseEnter={() => setShowSpinalCord(true)}
              d="m 258.11786,465.11092 115.96599,-1.24695 2.49389,407.7514 -115.96599,3.74084 z"
            ></path>
          </svg>
          <img src={nerves} alt="" />
        </div>
        {showCardBrain && (
          <div className="card">
            <div className="cards">
              <p>
                Головной мозг - это настоящий компьютер нашего организма. Он
                командует всеми органами, а череп, как шлем, надежно защищает
                мозг. Мозг работает всегда даже тогда, когда мы спим.
              </p>
              <img src={brain} alt="" height="150" />
              {/* <img src={pelvis} alt="" height="150" /> */}
            </div>
          </div>
        )}
        {showCardSpinalCord && (
          <div className="card">
            <div className="cards">
              <p>
                Кроме головного мозга у нас есть спиной. Он спрятан в
                позвоночнике. Спиной мозг помощник головного, именно он передает
                сигналы от головного мозга по нервам ко всем органам.
              </p>
              <p>
                Нервы пронизывают наше тело как тонкие проводки, они соединяют
                все органы.
              </p>
              {/* <img src={brain} alt="" height="150" /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
