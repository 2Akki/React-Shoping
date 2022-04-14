import React from "react";
import {
  Typography,
  Container,
  Button,
  Paper,
  Box,
  Icon,
  Grid,
  Fab,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Card,
  CardHeader,Avatar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5)
  },
  add: {
    position: "fixed",
    bottom: "5%",
    right: "5%",
  },
}));
export default function CrdComponentjS() {
  const classes = makeStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={3}>
          <Card>
              <CardHeader avatar={<Avatar>NK</Avatar>} title="Erina Nakiri"></CardHeader>
            <CardActionArea>
            <CardContent>
            <CardMedia component="img" image="https://via.placeholder.com/300x150"></CardMedia>
              <Typography variant="h4">Erina nakiri</Typography>
              <Typography variant="subtitle1">
                {" "}
                erina nakiri Yukihara somakun somakun erina nakirir erina nakiri
                Erina nakiri Erina nakiri Yukihara some{" "}
              </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button >Read less</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardActionArea>
            <CardContent>
            <CardMedia component="img" image="https://via.placeholder.com/300x150"></CardMedia>
              <Typography variant="h4">Erina nakiri</Typography>
              <Typography variant="subtitle1">
                {" "}
                erina nakiri Yukihara somakun somakun erina nakirir erina nakiri
                Erina nakiri Erina nakiri Yukihara some{" "}
              </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button >Read less</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardActionArea>
            <CardContent>
            <CardMedia component="img" image="https://via.placeholder.com/300x150"></CardMedia>
              <Typography variant="h4">Erina nakiri</Typography>
              <Typography variant="subtitle1">
                {" "}
                erina nakiri Yukihara somakun somakun erina nakirir erina nakiri
                Erina nakiri Erina nakiri Yukihara some{" "}
              </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button >Read less</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardActionArea>
            <CardContent>
            <CardMedia component="img" image="https://via.placeholder.com/300x150"></CardMedia>
              <Typography variant="h4">Erina nakiri</Typography>
              <Typography variant="subtitle1">
                {" "}
                erina nakiri Yukihara somakun somakun erina nakirir erina nakiri
                Erina nakiri Erina nakiri Yukihara some{" "}
              </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button >Read less</Button>
            </CardActions>
          </Card>
        </Grid>
       
      </Grid>
    </Container>
  );
}
