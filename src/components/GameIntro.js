import React from 'react';
import classes from '../components/GameIntro.module.css';
import ButtonSmall from './ButtonSmall';

const GameIntro = (props) => {
  return (
    <div className={classes.gameCard}>
      <img src={`${process.env.PUBLIC_URL}/images/${props.icon}.png`} alt='game' className={classes.gameImg}></img>
      <h2 className={classes.gameTitle}>{props.title}</h2>
      <p className={classes.gameDescription}>{props.description}</p>
      <ButtonSmall navigateTo={props.navigateTo} className={classes.buttonSmall}>Play now!</ButtonSmall>
    </div>
  )
}

export default GameIntro