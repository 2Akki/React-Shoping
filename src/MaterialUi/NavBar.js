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
  MenuItem ,
 
  CssBaseline,
  Drawer
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import MenuIcon from "@material-ui/icons/Menu";
import { Fragment } from "react";
import classNames from "classnames";
// import CssBaseline from "@material-ui/core/CssBaseline"
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
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
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }));
export default function NavBar() {
    const classes = useStyles();
    // const [languageAnchorEL, setLanguageAnchorEL] = useState(null);
    // const [selectedIndex, setSelectedIndex] = useState(1);
    const [open,setOpen] = useState(null)
    const handleOpen = (e) => setOpen(e.currentTarget);
    const handleClose = () => setOpen(false);
    return (

        <div className={classes.root}>
        <CssBaseline>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Erina Nakiri
              </Typography>
              <Button color="inherit" onClick={handleOpen}>Yukihira Soma</Button>
              <Menu open={Boolean(open)} anchorEl={open} onClose={handleClose}>
                  <MenuItem onClick={handleClose}>English</MenuItem>
                  <MenuItem onClick={handleClose}>Hindi</MenuItem>
                  <MenuItem onClick={handleClose}>Japanese</MenuItem>
                 <MenuItem onClick={handleClose}>Danish</MenuItem>
               
                  </Menu>
            </Toolbar>
          </AppBar>
        </Box>
        </CssBaseline>
         </div>
      );
    }
