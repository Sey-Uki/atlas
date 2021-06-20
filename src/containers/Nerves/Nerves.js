import { Breadcrumbs, Typography } from "@material-ui/core";
import nerves from "../../assets/images/nerves/Nerves.png";
import { Link } from 'react-router-dom'

export const Nerves = () => {
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
          {/* <svg viewBox="0 0 211 451">
            <NavLink to="/skull">
            <path
              className={styles.block}
              fill="#b59247"
              onMouseLeave={() => setShowCardSkull(false)}
              onMouseEnter={() => setShowCardSkull(true)}
              d="m 66.36385,30.814065 h 77.35927 l 0.55655,93.833405 -77.359277,-1.1803 z"
            ></path>
            </NavLink>
          </svg> */}
          <img src={nerves} alt="" />
        </div>

      </div>
    </div>
  );
};
