import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ButtonSmall.module.css';

const ButtonSmall = (props) => {
  return (
    <Link to={props.navigateTo} className={classes.button}><div className={classes.buttonText}>{props.children}</div></Link>
  )
}

export default ButtonSmall