import React from 'react';
import ButtonSmall from './ButtonSmall';
import classes from './GameCard.module.css';

const GameCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
      <div className={classes.bar}>
          <div className={classes.title}>Title</div>
          <ButtonSmall navigateTo={'/'}>Play now!</ButtonSmall>
       </div>
      </div>
      
    </div>
  )
}

export default GameCard;