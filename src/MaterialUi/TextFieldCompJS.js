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
  CardHeader,
  Avatar,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import AccountCircle from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  add: {
    position: "fixed",
    bottom: "5%",
    right: "5%",
  },
}));
export default function TextFieldCompJS() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div style={{ display: "hidden" }}>Erina Nakiri</div>
      <Paper component={Box} width="30%" mx="auto" p={4}>
        <Typography variant="h5">Create New account</Typography>
        <Box component="form" mt={2}>
          <TextField
            fullWidth
            placeholder="Enter Your First name"
            margin="normal"
            variant="outlined"
            color="secondary"
            label="First Name"
            InputProps={{
              startAdornment: <InputAdornment position="start"><AccountCircle></AccountCircle></InputAdornment>,
            }}
          />
          <TextField
            fullWidth
            placeholder="Enter Your Last name"
            margin="normal"
            variant="outlined"
            color="secondary"
            label="Last Name"
          />
          <TextField
            fullWidth
            placeholder="Enter Your Message"
            margin="normal"
            variant="outlined"
            color="secondary"
            label="Your Message"
            multiline
            rows={4}
          />
        </Box>
        <Box>
            <Button variant="contained" color="secondary">Login</Button>
        </Box>
      </Paper>
    </Container>
  );
}
