import React from "react";
import ButtonSmall from "./ButtonSmall";
import classes from "./GameCard.module.css";

const GameCard = (props) => {
  return (
    <div className={classes.card}>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/${props.icon}big.png)`,
        }}
      >
        <div className={classes.description}>
          {props.description}
        </div>
        <div className={classes.bar}>
          <div className={classes.title}>{props.title}</div>
          <ButtonSmall navigateTo={props.link}>Play now!</ButtonSmall>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
