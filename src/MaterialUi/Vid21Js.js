
import React, { useState, useEffect } from "react";
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
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
//   Switch,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Collapse,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,TablePagination,AppBar,Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AccessAlarmTwoTone from "@material-ui/icons/AccessAlarmTwoTone";
import AccountCircleIcon from "@material-ui/icons/AccountCircleRounded";
import axios from "axios";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import  NavBar  from "./components/NavBarss";
import Home from "./components/files/Home.js"
import Yukihira from "./components/files/Yukihira"

import About from "./components/files/About"

// import AccountCircle from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
   height: "100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
  },
  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "17%",
    height: "100%",
    borderRadius: 0,
  },
  NestedITEM: {
    paddingLeft: theme.spacing(6),
  },
}));
export default function Vid21Js() {
    const classes = useStyles();
    return (
       <BrowserRouter>
       <Container className={classes.root} >
           <NavBar/>
           <Switch>
               <Route exact path="/" component={Home}></Route>
               <Route exact path="/about" component={About}></Route>
               <Route exact path="/yukihira" component={Yukihira}></Route>
           </Switch>
       </Container>
           </BrowserRouter>
    )
}
