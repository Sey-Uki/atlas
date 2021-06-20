import { Breadcrumbs, Typography } from "@material-ui/core";
import { useState } from "react";
import breathing from "../../assets/images/breathing/Breathing.png";
import lungs from "../../assets/images/breathing/lung_PNG62.png";

export const Breathing =() => {
  const [showCardLungs, setShowCardLungs] = useState(false);
  const [showCardNose, setShowCardNose] = useState(false);
    return(
        <div className="breathing">
        <div className="breadcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <a color="inherit" href="/">
              Home
            </a>
            <Typography color="textPrimary">Breathing</Typography>
          </Breadcrumbs>
        </div>

        <h1>Breathing</h1>
      <div className="content">
        <h2>Наведите на картинку</h2>
        <div className="thumbnail">
          <svg viewBox="0 0 659.15491 1507.6056">
            <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardLungs(false)}
              onMouseEnter={() => setShowCardLungs(true)}
              d="m 232.49821,577.61274 165.2917,-3.63278 9.08196,212.5179 -181.63923,0 z"
            ></path>
             <path
              className="block"
              fill="#b59247"
              onMouseLeave={() => setShowCardNose(false)}
              onMouseEnter={() => setShowCardNose(true)}
              d="m 294.25555,337.39487 -7.71967,24.06719 41.32293,12.26065 7.26557,-25.42949 z"
            ></path>
          </svg>
          <img src={breathing} alt="" />
        </div>
        {showCardLungs && (
          <div className="card">
            <div className="cards">
              <p>
              Легкие - это главный орган дыхания. Воздух поступает в них по длинным
              трубкам - трахея и бронхам. Когда мы делаем вдох легкие наполняются воздухом,
              а когда выдох - воздух выходит из легких и они уменьшаются.
              </p>
              <img src={lungs} alt="" height="150" />
            </div>
          </div>
        )}
             {showCardNose && (
          <div className="card">
            <div className="cards">
              <p>
              Носом мы вдыхаем воздух. Внутри носа есть волоски, которые задерживают
              пыль и микробы, чтобы они не попали в организм. Когда мы простуживаемся
              </p>
              {/* <img src={lungs} alt="" height="150" /> */}
            </div>
          </div>
        )}
    </div>
    </div>
    )
}