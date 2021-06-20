import { Breadcrumbs, Typography } from "@material-ui/core";
import { useState } from "react";
import digestion from "../../assets/images/digestion/Digestion.png";
import liver from "../../assets/images/digestion/liverThx.png";
import { Link } from 'react-router-dom'

export const Digestion = () => {
  const [showCardLiver, setShowCardLiver] = useState(false);
  const [showCardStomach, setShowCardStomach] = useState(false);
  const [showCardGullet, setShowCardGullet] = useState(false);
  const [showCardIntestines, setShowCardIntestines] = useState(false);
  
  return (
    <div className="digestion">
      <div className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Home
          </Link>
          <Typography color="textPrimary">Digestion</Typography>
        </Breadcrumbs>
      </div>
      <h1>Digestion</h1>
      <div className="content">
        <h2>Наведите на картинку</h2>
        <div className="thumbnail">
        <svg viewBox="0 0 638.87323 1494.0845">
            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardLiver(false)}
              onMouseEnter={() => setShowCardLiver(true)}
              d="m 215.32394,730.34364 c 9.4999,-17.46629 23.15601,-19.59341 38.67042,-22.8507 l 63.27887,3.51549 c 10.69354,11.43508 17.42843,23.13407 19.33521,35.15493 -8.05531,18.27788 -21.33781,13.46688 -35.15493,7.03099 -14.1507,5.81479 -24.37203,13.59426 -35.15493,21.09295 l -41.92392,-2.48583 c -5.90187,-14.64789 -9.57845,-26.80994 -9.05072,-41.45783 z"
            ></path>

            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardStomach(false)}
              onMouseEnter={() => setShowCardStomach(true)}
              d="m 321.6676,712.76618 c 4.6489,-1.14783 8.89347,-5.12599 14.06197,-2.63662 l 4.39437,6.15211 23.72957,-6.15211 c 28.66446,3.66753 24.47647,14.07402 32.51831,21.97183 7.17673,14.30586 4.21896,25.23355 -4.39436,34.27606 l -23.50986,19.11549 c -14.13521,0.99109 -28.27043,3.85689 -42.40564,1.09859 l -25.48732,-14.94084 c -8.59009,-4.05996 -13.4761,1.75763 -20.21408,2.63662 l -1.75775,7.90986 -11.42535,-0.87888 5.27324,-9.6676 c 4.92571,-6.04215 8.0172,-12.60837 16.69859,-17.57747 l 18.45634,3.5155 10.54648,3.51549 c 8.93167,0.64414 13.48223,-4.34457 18.45633,-8.78873 -0.32282,-4.34957 -1.04082,-8.10637 0.87888,-15.81972 -7.06038,-7.90986 -12.84708,-15.81972 -15.81972,-23.72958 z"
            ></path>

            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardGullet(false)}
              onMouseEnter={() => setShowCardGullet(true)}
              d="m 293.54366,387.58309 h 15.38028 c 1.58359,112.77898 -7.648,247.44537 29.44225,325.18309 l -18.45634,-0.43944 C 295.12957,693.93151 291.17129,502.94879 293.54366,387.58309 Z"
            ></path>

            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardIntestines(false)}
              onMouseEnter={() => setShowCardIntestines(true)}
              d="m 224.34605,774.33569 c 26.9959,2.58821 56.41393,3.0234 76.43924,11.80769 28.48464,1.13342 59.8764,-0.77184 89.17911,-3.72875 22.72424,31.44864 3.29075,59.76009 5.28239,88.24693 -13.75445,19.58975 -29.79563,37.02728 -57.4848,43.502 l -30.14067,14.60425 -17.09008,-15.84717 c -4.26182,-14.54458 -13.21909,-23.45461 -21.44027,-33.24796 l -27.34411,-1.55364 c 0,0 -21.32717,-23.2876 -23.61538,-25.47974 -3.24346,-3.10729 -1.3967,-78.30361 6.21457,-78.30361 z"
            ></path>
          </svg>
          <img src={digestion} alt="" />
        </div>

        {showCardLiver && (
          <div className="card">
            <div className="cards">
              <p>
                Печень - очень важный орган. Она выводит из организма вредные вещества, которые попадают в нее с пище. 
                А еще в печени образуется желчь, благодаря этой жидкости организм лучше усваивает еду.
              </p>
              <img src={liver} alt="" height="200" />
            </div>
          </div>
        )}
        {showCardStomach && (
          <div className="card">
            <div className="cards">
              <p>
                Наш желудок похож на большую кастрюлю. В нем вся съединая пища смещивается с желудочным соком и
                получается полужидкая кашеца. 
              </p>
              {/* <img src={skull} className={styles.skull} alt="" height="200" /> */}
            </div>
          </div>
        )}
          {showCardGullet && (
          <div className="card">
            <div className="cards">
              <p>
                Как только еда оказывается у нас во рту, она отправляется в долгое путеществие по организму.
                Сначала зубы измельчают пищу, а потом через пищевод она попадает в желудок.
              </p>
              {/* <img src={skull} className={styles.skull} alt="" height="200" /> */}
            </div>
          </div>
        )}
                {showCardIntestines && (
          <div className="card">
            <div className="cards">
              <p>
                Из желудка пища попадает в кашечник. Он всасывает все полезное, что ему необходимо.
              </p>
              {/* <img src={skull} className={styles.skull} alt="" height="200" /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
