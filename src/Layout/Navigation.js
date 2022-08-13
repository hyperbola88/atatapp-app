import { useState } from "react";

import { NavLink } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { CgMenuRound, CgCloseO } from "react-icons/cg";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const [burgerState, setBurgerState] = useState(false);

  const burgerHandler = () => {
    setBurgerState((prevState) => !prevState);
  };

  return (
    <Fragment>
      {!burgerState && <CgMenuRound
        onClick={burgerHandler}
        className={classes.burger}
      />}
      {burgerState && <CgCloseO onClick={burgerHandler}
        className={classes.burger}/>}
      <div className={burgerState ? `${classes.navbar} ${classes.openBurger}` : classes.navbar}>
        <NavLink onClick={burgerHandler}
          className={classes.logo}
          to="/"
        >
        <img src={process.env.PUBLIC_URL+"/atatapp_logo.svg"} loading="lazy" className = {classes.logo} alt=""></img>
        </NavLink>
        <div className={classes.links}>
          <ul className={burgerState ? classes.openBurger : ''}>
            <li className={classes.link} onClick={burgerHandler}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/games"
              >
                Show All Games
              </NavLink>
            </li>
            <li className={classes.link} onClick={burgerHandler}>
              <a href="mailto:contact@atatapp.games">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
