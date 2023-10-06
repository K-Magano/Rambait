import classes from "../../mainContent/ourService/ourService.module.css";
import Image from "next/image";

//MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import styles from "./latestnews.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function LatestNews() {
  return (
    <Box lg={{ flexGrow: 1 }} className={styles.container}>
      <Grid container spacing={-10} columns={1}>
        <h2>Latest News </h2>
        <section className={styles.container}>
          <Grid lg={8}>
            <Item>
              <Image
                src="/../images/latestNews/goodnews1.jpg"
                width={250}
                height={150}
                alt="good news"
                layout="responsive"
              />
              Magna labore ea velit laborum cupidatat culpa dolore. Quis ex
              eiusmod Lorem incididunt aute mollit. Minim consectetur incididunt
              magna id dolore velit sint dolor enim enim deserunt. Irure quis
              cillum elit fugiat adipisicing sunt.
            </Item>
          </Grid>

          <Grid lg={8}>
            <Item>
              <Image
                src="/../images/latestNews/goodnews2.jpg"
                width={250}
                height={150}
                alt="good news"
                layout="responsive"
              />
              Magna labore ea velit laborum cupidatat culpa dolore. Quis ex
              eiusmod Lorem incididunt aute mollit. Minim consectetur incididunt
              magna id dolore velit sint dolor enim enim deserunt. Irure quis
              cillum elit fugiat adipisicing sunt.
            </Item>
          </Grid>
          <Grid lg={8}>
            <Item>
              <Image
                src="/../../images/latestNews/goodnews3.jpg"
                width={250}
                height={150}
                alt="good news"
                layout="responsive"
              />{" "}
              Magna labore ea velit laborum cupidatat culpa dolore. Quis ex
              eiusmod Lorem incididunt aute mollit. Minim consectetur incididunt
              magna id dolore velit sint dolor enim enim deserunt. Irure quis
              cillum elit fugiat adipisicing sunt.
            </Item>
          </Grid>
        </section>
      </Grid>
    </Box>
  );
}

export default LatestNews;
