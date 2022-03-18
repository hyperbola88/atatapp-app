import React from "react";
import { Fragment } from "react";

import Button from "../components/Button";
import GameIntro from "../components/GameIntro";
import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png";
import game3 from "../assets/game3.png";
import classes from "./Main.module.css";

const Main = () => {
   
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
          <Button navigateTo={'/'}>Button for what? </Button>
        </div>
      </div>
      <div className={classes.about}>
        <div className={classes.aboutTitle}> <span className={classes.line}>&#8212;</span> About us</div>
        <p className={classes.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>

      <div className={classes.about}>
        <div className={classes.aboutTitle}> <span className={classes.line}>&#8212;</span> Games</div>
        <div className={classes.games}>
          <GameIntro img={game1} title={'title'} description={'Some description goes here'} navigateTo={'/games'}/>
          <GameIntro img={game2} title={'title'} description={'Some description goes here'} navigateTo={'/games'}/>
          <GameIntro img={game3} title={'title'} description={'Some description goes here'} navigateTo={'/games'}/>
        </div>
        
          <Button navigateTo={'/games'}>Even more games!</Button>
        
      </div>

      <div className={classes.contacts}>Contacts</div>
    </Fragment>
  );
};

export default Main;
