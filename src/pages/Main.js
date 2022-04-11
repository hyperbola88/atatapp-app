import React from "react";
import { Fragment } from "react";

import Button from "../components/Button";
import GameIntro from "../components/GameIntro";

import classes from "./Main.module.css";

import games from "../store/data";


const Main = () => {

  const gameIntros = [];
  for (let i = 0; i < 3; i++) {
    gameIntros.push(<GameIntro title={games[i].title} description={games[i].description} navigateTo={'/games'}/>)
  }
   
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.infobox}>
            <h1 className={classes.infoboxH1}>Atatapp </h1>
            <div className={classes.infoboxText}>
              an independent mobile game studio
            </div>
          </div>
          <Button navigateTo={'/'}>Button here? </Button>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.sectionTitle}> <span className={classes.line}>&#8212;</span> About us</div>
        <p className={classes.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum 
        </p>
      </div>

      <div className={classes.section}>
        <div className={classes.sectionTitle}> <span className={classes.line}>&#8212;</span> Games</div>
        <div className={classes.games}>
          {gameIntros}
        </div>
        
          <Button navigateTo={'/games'}>More games!</Button>
        
      </div>

      <div className={classes.section}>
      <div className={classes.sectionTitle}> <span className={classes.line}>&#8212;</span> Contact us</div>
      <p className={classes.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum 
        </p>
        <Button navigateTo={'/contacts'}>Contact Info</Button>

      </div>
    </Fragment>
  );
};

export default Main;
