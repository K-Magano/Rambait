import React from "react";
import WelcomeGrid from "./welcomeGrid";
import classes from "../welcomeContent/welcomeComponent.module.css";

function WelcomeComponent() {
  return (
    <section>
      <div className={classes.welcomeText}>
        {" "}
        <h2>Welcome to </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <WelcomeGrid />
    </section>
  );
}

export default WelcomeComponent;
