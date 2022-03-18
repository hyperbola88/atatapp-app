import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navbar}>
      <NavLink
        className={({ isActive }) => (isActive ? `${classes.active} ${classes.logo}` : classes.logo)}
        to="/"
      >
        Logo
      </NavLink>
      <div className={classes.links}>
        <ul>
          <li className={classes.link}>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="/games"
            >
              Games
            </NavLink>
          </li>
          <li className={classes.link}>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
