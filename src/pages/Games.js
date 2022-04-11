import { Fragment } from "react/cjs/react.production.min";
import GameCard from "../components/GameCard";
import games from "../store/data";
import classes from "./Games.module.css";

const Games = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.section}>
          <h1 className={classes.heading}>
            <span className={classes.line}>&#8212;</span> Our games
          </h1>
          <div className={classes.games}>
              {games.map(game => (
                 <GameCard title={game.title} description={game.descriptionFull} link={game.link}/>
              ))}
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Games;
