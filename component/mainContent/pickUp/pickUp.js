import React from "react";
import classes from "../pickUp/pickUp.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

//MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

function PickUp() {
  return (
    <div className={classes.pickUp}>
      <div className={classes.overlay}>
        <Box lg={{ flexGrow: 1 }}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={6} md={2}>
                <Item>
                  {/* <label htmlFor="name" className="name">
                    Name
                  </label> */}
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </Item>
              </Grid>

              <Grid item xs={6} md={2}>
                <Item>
                  {/* <label htmlFor="company" className="company">
                    Company
                  </label> */}
                  <input
                    type="email"
                    className="form-control"
                    id="company"
                    placeholder="Company Name"
                  />
                </Item>
              </Grid>

              <Grid item xs={6} md={2}>
                <Item>
                  {" "}
                  {/* <label htmlFor="email" className="email">
                    Email address
                  </label> */}
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email Adress"
                  />
                </Item>
              </Grid>

              <Grid item xs={6} md={2}>
                <Item>
                  {/* <label htmlFor="inputState" className="inputState">
                    Waste Type
                  </label> */}
                  <select
                    id="inputState"
                    className={`form-control ${classes.select}`}
                  >
                    <option selected>Choose...</option>
                    <option>Oil</option>
                    <option>Plastic</option>
                    <option>Waste</option>
                  </select>
                </Item>
              </Grid>

              <Grid item xs={6} md={8}>
                <Item>
                  {" "}
                  {/* <label for="message" className="form-label">
                    Example textarea
                  </label> */}
                  <textarea
                    class="form-control"
                    id="message"
                    rows="3"
                    placeholder="Enter your message here..."
                  ></textarea>
                </Item>
              </Grid>

              <Grid item xs={6} md={1}>
                <Item>
                  {" "}
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </Item>
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default PickUp;
