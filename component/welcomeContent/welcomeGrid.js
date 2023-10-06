import React from "react";
import classes from "../welcomeContent/welcomeGrid.module.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import styles from "./welcomeGrid.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function WelcomeGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.layout}>
      <Grid container spacing={2} columns={16}>
        <section className={classes.layout}>
          <Grid item xs={8}>
            <Item>
              <h3>Corporate Services</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Item>
          </Grid>

          <Grid item xs={8}>
            <Item>
              <h3>Our Picks</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Item>
          </Grid>

          <Grid item xs={8}>
            <Item>
              <h3>Our Waste</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Item>
          </Grid>
        </section>
      </Grid>
    </Box>
  );
}
export default WelcomeGrid;
