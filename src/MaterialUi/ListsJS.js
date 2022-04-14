import React, { useState } from "react";
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
  Switch,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Collapse,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AccessAlarmTwoTone from "@material-ui/icons/AccessAlarmTwoTone";
import AccountCircleIcon from "@material-ui/icons/AccountCircleRounded";
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
  },NestedITEM: {
      paddingLeft: theme.spacing(6)
  }
}));
export default function ListsJS() {
  const [open,setOpen] = useState(false)
  const classes = useStyles();
  const Onclick = (e)=>{
      setOpen(e.target.checked);
  }
  return (
    <Container className={classes.root}>
      <Paper component={Box} boxShadow={4} className={classes.sidebar}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon></AccountCircleIcon>
            </ListItemIcon>

            <ListItemText primary="Erina nakiri" />
          
          </ListItem>
          <Divider></Divider> 
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon></AccountCircleIcon>
            </ListItemIcon>
            <ListItemText primary="Get Erina Nakiri" />
           
          </ListItem>
          <Divider></Divider>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon></AccountCircleIcon>
            </ListItemIcon>
            <ListItemText primary="Yukihira Somakun" />
            
          </ListItem>
          <Divider></Divider>
          <ListItem button onClick={() => setOpen(!open)}>
            <ListItemIcon>
              <AccountCircleIcon></AccountCircleIcon>
            </ListItemIcon>
            <ListItemText primary="Get Yukihira Somakun"  secondary={<Typography variant="subtitle1">Erina Nakiri</Typography>}/>
          </ListItem>
         <Collapse in={open}>
         <List className={classes.NestedITEM}>
              <ListItem button>
                  <ListItemText>Nested Item 1</ListItemText>
              </ListItem>
              <ListItem button>
                  <ListItemText>Nested Item 1</ListItemText>
              </ListItem>
              <ListItem button>
                  <ListItemText>Nested Item 1</ListItemText>
              </ListItem>
              <ListItem button>
                  <ListItemText>Nested Item 1</ListItemText>
              </ListItem>
          </List>
          </Collapse>
        </List>
      </Paper>
    </Container>
  );
}

// Yukihira
