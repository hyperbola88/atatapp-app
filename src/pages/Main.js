import React from "react";
import { Fragment } from "react";
import Button from "../components/Button";
import GameIntro from "../components/GameIntro";

import classes from "./Main.module.css";
import buttonClasses from "../components/Button.module.css";

import games from "../store/data";


const Main = () => {

  const gameIntros = [];
  for (let i = 0; i < 3; i++) {
    gameIntros.push(<GameIntro icon ={games[i].icon} title={games[i].title} description={games[i].description} navigateTo={games[i].link}/>)
  }
   
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.infobox}>
            <h1 className={classes.infoboxH1}>Atatapp Games</h1>
            <div className={classes.infoboxText}>
              cross-platform HTML5 games for everybody!
            </div>
          </div>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.sectionTitle}> <span className={classes.line}>&#8212;</span> About us</div>
        <p className={classes.sectionText}>
          We are a nano-team of professionals: Master of Art, Colonel of Sound and Ninja of Code. Our expertise mostly is in cross-platform HTML5 game development, but not only (we know what is Unity too)! The team has over 50 years of combined experience.
        <br/>
          Our passion is to make fun games for 3 main platforms: HTML5 portals, Facebook Instant games and Mobile App Stores. But the most important thing is to adapt a game for each platform. Games for FB shouldn't be the same as on Mobile, right?
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
          We are open for questions, answers, discussions, job, money, food, drinks, but please don't send us your photos.
        </p>
        <a href='mailto:contact@atatapp.games' className={buttonClasses.button}>
          <div className={classes.buttonText}>Send email</div>
        </a>

      </div>
    </Fragment>
  );
};

export default Main;
