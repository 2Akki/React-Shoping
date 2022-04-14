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
  Switch,
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
  TableCell,
  TablePagination,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  CssBaseline,
  Drawer,
Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import { Fragment } from "react";
// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: "100vw",
//      height: "100vh",
//       backgroundColor: theme.palette.grey[200],
//       paddingTop: theme.spacing(5),
//     },
//     sidebar: {
//       position: "fixed",
//       left: 0,
//       top: 0,
//       width: "17%",
//       height: "100%",
//       borderRadius: 0,
//     },
//     NestedITEM: {
//       paddingLeft: theme.spacing(6),
//     },
//   }));
const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    marginRight: "auto",
  },
  content: {
    padding: theme.spacing(3),
  },
  drawer: {
    width: drawerWidth,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
   
  },  root:{
    [theme.breakpoints.up("sm")]:{paddingLeft:drawerWidth}
  }
}));

export default function ResponsiveDrawer() {
  const classes = useStyles();
  const draweritem = 
  <>
<Toolbar></Toolbar>
<Divider/>
  <List disablePadding className={classes.drawer}>
          <ListItem button>
            <ListItemText primary="First Item" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Second Item" />
          </ListItem>
        </List>
  
  </>;
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
     <Hidden xsDown implementation="css">
     <Drawer open={open} onClose={() => setOpen(false)} variant="permanent">
        {draweritem}
      </Drawer>
      <Hidden smUp implementation="css">
      <Drawer open={open} onClose={() => setOpen(false)} >
        {draweritem}
      </Drawer>
      </Hidden>
     </Hidden>
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Erina Nakiri
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Toolbar></Toolbar>
        <Typography variant="h2">New ReactJs Features!</Typography>
        <Typography>
          Erina Nakiri Erina Nakiri Yukihara somakun erina nakiri Nakiri Erina
          Yukihira Erina Nakiri Erina Nakiri Yukihara somakun erina nakiri
          Nakiri Erina Yukihira soma Erina Nakiri, Erina Nakiri Erina Nakiri
          Yukihara somakun erina nakiri Erina Nakiri Erina Nakiri Nakiri
          Nakiriinventore, consectetur eius. Magni quasi, error ipsum nobis
          dicta totam amet ducimus ea omnis, illo nemo reprehenderit dignissimos
          quod odit nisi deserunt perspiciatis corporis adipisci ullam at fugit
          explicabo minima. Delectus voluptas, corrupti hic reprehenderit magnam
          ipsa explicabo rem suscipit, rerum impedit facere laboriosam minima?
          Delectus libero distinctio sapiente, dolores consequatur molestiae.
          Earum reprehenderit sint ea quisquam consequatur recusandae eos, cum
          itaque eaque unde quibusdam rem quaerat officia quia dicta tenetur
          sapiente ut, magni voluptatum atque!
        </Typography>
      </main>
    </div>
  );
}
