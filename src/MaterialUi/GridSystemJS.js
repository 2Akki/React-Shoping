import React from "react";
import {
  Typography,
  Container,
  Button,
  Paper,
  Box,
  Icon,
  Grid,
} from "@material-ui/core";

export default function GridSystemJS() {
  return (
    <Container>
      <Grid container  justify="space-evenly">
        <Grid item lg={3}>
          <Paper component={Box} p={3}>
            <Typography variant="h3">Erina nakiri </Typography>
            <Typography variant="subtitle1">
              and Yukihara somakun somakun erina nakirir erina nakiri Erina
              nakiri Erina nakiri Yukihara some Erina nakiri
            </Typography>
            <Button variant="contained" color="secondary">
              Read less
            </Button>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper component={Box} p={3}>
            <Typography variant="h3">Erina nakiri </Typography>
            <Typography variant="subtitle1">
              and Yukihara somakun somakun erina nakirir erina nakiri Erina
              nakiri Erina nakiri Yukihara some Erina nakiri
            </Typography>
            <Button variant="contained" color="secondary">
              Read less
            </Button>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper component={Box} p={3}>
            <Typography variant="h3">Erina nakiri </Typography>
            <Typography variant="subtitle1">
              and Yukihara somakun somakun erina nakirir erina nakiri Erina
              nakiri Erina nakiri Yukihara some Erina nakiri
            </Typography>
            <Button variant="contained" color="secondary">
              Read less
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
