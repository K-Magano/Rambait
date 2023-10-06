import React from "react";
import classes from "../layout/hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}></div>
    </div>
  );
}

export default Hero;
