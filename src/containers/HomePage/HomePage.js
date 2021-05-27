import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
import muscles from "../../assets/images/home/muscles.svg";
import skeleton from "../../assets/images/home/skeleton.svg";
import breathing from "../../assets/images/home/breathing.svg";
import digestion from "../../assets/images/home/digestion.svg";
import nerves from "../../assets/images/home/nerves.svg";
import heart from "../../assets/images/home/heart.svg";
import {HeaderIcons} from "./HeaderIcons/HeaderIcons";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeaderIcons />
      <h1 className={styles.mainTitle}>
        Атлас <br /> Человека
      </h1>
      <section className={styles.cards}>
        <div className={styles.items}>
          <NavLink to="/skeleton">
            <div className={styles.item}>
              <div className={styles.thumbnail}>
                <img src={skeleton} alt="" />
              </div>
              <div className={styles.content}>
                <h2>Skeleton</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/heart">
          <div className={styles.item}>
            <div className={styles.thumbnail}>
              <img src={heart} alt="" />
            </div>
            <div className={styles.content}>
              <h2>Heart</h2>
            </div>
          </div>
          </NavLink>
          <div className={styles.item}>
            <div className={styles.thumbnail}>
              <img style={{ width: "150px" }} src={digestion} alt="" />
            </div>
            <div className={styles.content}>
              <h2>Digestion</h2>
            </div>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.thumbnail}>
              <img src={nerves} alt="" />
            </div>
            <div className={styles.content}>
              <h2>Nerves</h2>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.thumbnail}>
              <img src={muscles} alt="" />
            </div>
            <div className={styles.content}>
              <h2>Muscles</h2>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.thumbnail}>
              <img src={breathing} alt="" />
            </div>
            <div className={styles.content}>
              <h2>Breathing</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
