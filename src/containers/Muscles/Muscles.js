import { Breadcrumbs, Typography } from "@material-ui/core";
import muscles from "../../assets/images/muscles/Muscles.png";
import { Link } from 'react-router-dom'

export const Muscles = () => {
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
      <h1>Muscles</h1>
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
          <img src={muscles} alt="" />
        </div>
    </div>
    </div>
  );
};
