import React from 'react';
import classes from './ButtonSmall.module.css';

const ButtonSmall = (props) => {
  return (
    <a href={props.navigateTo} target="_blank" className={classes.button}><div className={classes.buttonText}>{props.children}</div></a>
  )
}

export default ButtonSmall