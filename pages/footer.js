import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import styles from "./footer.module.css";

export default function ContactForm() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={3}>
      <Grid item l={12}>
        <Grid container justifyContent="center" className={styles.container}>
          <Grid item>
            <Paper>
              <p>
                Purus viverra accumsan in nisl nisi scelerisque eu ultrices
                vitae. Vestibulum sed arcu non odio. Donec massa sapien faucibus
                et molestie ac. Eget duis at tellus at urna condimentum mattis
                pellentesque. Tristique magna sit amet purus gravida quis.
                Gravida dictum fusce ut placerat. Augue neque gravida in
                fermentum et. Tincidunt arcu non sodales neque sodales ut etiam
                sit amet.Purus viverra accumsan in nisl nisi scelerisque eu
                ultrices vitae. Vestibulum sed arcu non odio. Donec massa sapien
                faucibus et molestie ac.
              </p>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <p>
                Purus viverra accumsan in nisl nisi scelerisque eu ultrices
                vitae. Vestibulum sed arcu non odio. Donec massa sapien faucibus
                et molestie ac. Eget duis at tellus at urna condimentum mattis
                pellentesque. Tristique magna sit amet purus gravida quis.
                Gravida dictum fusce ut placerat. Augue neque gravida in
                fermentum et. Tincidunt arcu non sodales neque sodales ut etiam
                sit amet.Purus viverra accumsan in nisl nisi scelerisque eu
                ultrices vitae. Vestibulum sed arcu non odio. Donec massa sapien
                faucibus et molestie ac.
              </p>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <p>
                Purus viverra accumsan in nisl nisi scelerisque eu ultrices
                vitae. Vestibulum sed arcu non odio. Donec massa sapien faucibus
                et molestie ac. Eget duis at tellus at urna condimentum mattis
                pellentesque. Tristique magna sit amet purus gravida quis.
                Gravida dictum fusce ut placerat. Augue neque gravida in
                fermentum et. Tincidunt arcu non sodales neque sodales ut etiam
                sit amet.Purus viverra accumsan in nisl nisi scelerisque eu
                ultrices vitae. Vestibulum sed arcu non odio. Donec massa sapien
                faucibus et molestie ac.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
