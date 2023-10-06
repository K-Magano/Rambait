import classes from "../../mainContent/ourService/ourService.module.css";
import Image from "next/image";

//MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import styles from "./ourService.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function OurService() {
  return (
    <Box lg={{ flexGrow: 1 }} className={styles.service}>
      <Grid container spacing={-10} columns={1}>
        <h2>Our Service</h2>
        <section className={classes.service}>
          <Grid lg={8}>
            <Item>
              <Image
                src="/../images/ourService/ourservice1.jpeg"
                width={250}
                height={150}
                alt="Picture of the author"
                layout="responsive"
              />
              Grid 1 Magna labore ea velit laborum cupidatat culpa dolore. Quis
              ex eiusmod Lorem incididunt aute mollit. Minim consectetur
              incididunt magna id dolore velit sint dolor enim enim deserunt.
              Irure quis cillum elit fugiat adipisicing sunt.
            </Item>
          </Grid>

          <Grid lg={8}>
            <Item>
              <Image
                src="/../images/ourService/ourservice2.jpeg"
                width={250}
                height={250}
                alt="Picture of the author"
                layout="responsive"
              />
              Grid 2 Magna labore ea velit laborum cupidatat culpa dolore. Quis
              ex eiusmod Lorem incididunt aute mollit. Minim consectetur
              incididunt magna id dolore velit sint dolor enim enim deserunt.
              Irure quis cillum elit fugiat adipisicing sunt.
            </Item>
          </Grid>
          <Grid lg={8}>
            <Item>
              <Image
                src="/../images/ourService/ourservice3.jpeg"
                width={250}
                height={150}
                alt="Picture of the author"
                layout="responsive"
              />{" "}
              Grid 3 Magna labore ea velit laborum cupidatat culpa dolore. Quis
              ex eiusmod Lorem incididunt aute mollit. Minim consectetur
              incididunt magna id dolore velit sint dolor enim enim deserunt.
              Irure quis cillum elit fugiat adipisicing sunt.
            </Item>
          </Grid>
        </section>
      </Grid>
    </Box>
  );
}

export default OurService;
