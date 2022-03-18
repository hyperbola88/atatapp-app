import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Link to={props.navigateTo} className={classes.button}>
      <div className={classes.buttonText}>{props.children}</div>
    </Link>
  );
};

export default Button;
