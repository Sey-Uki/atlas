import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
import loader from "../../assets/images/other/oval.svg";

export const HomePage = () => {
  const [humanSystems, setHumanSystems] = useState(() => {
    return JSON.parse(localStorage.getItem("humanSystems")) || [];
  });

  useEffect(() => {
    fetch(
      "https://609012a53847340017020cb2.mockapi.io/MarketCategory/human-systems"
    )
      .then(async (res) => {
        const json = await res.json();
        localStorage.setItem("humanSystems", JSON.stringify(json));
        setHumanSystems(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.homePage}>
      {humanSystems.length > 0 ? (
        <>
          <h1 className={styles.mainTitle}>
            Атлас <br /> Человека
          </h1>

          <section className={styles.cards}>
            <div className={styles.items}>
              {humanSystems.slice(0, 3).map((system) => {
                return (
                  <NavLink to={system.path} key={system.id}>
                    <div className={styles.item}>
                      <div className={styles.thumbnail}>
                        <img
                          src={system.img_system}
                          alt={system.img_system_alt}
                        />
                      </div>
                      <div className={styles.content}>
                        <h2>{system.name_system}</h2>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
            <div className={styles.items}>
              {humanSystems.slice(3, 7).map((system) => {
                return (
                  <NavLink to={system.path} key={system.id}>
                    <div className={styles.item}>
                      <div className={styles.thumbnail}>
                        <img
                          src={system.img_system}
                          alt={system.img_system_alt}
                        />
                      </div>
                      <div className={styles.content}>
                        <h2>{system.name_system}</h2>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </section>
        </>
      ) : (
        <img src={loader} className={styles.loader} alt="Loader" />
      )}
    </div>
  );
};
