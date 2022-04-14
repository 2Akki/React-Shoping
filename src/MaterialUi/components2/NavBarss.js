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
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
sectionDesktop: {
  display:"none",
  [theme.breakpoints.up("md")]:{
    display:"flex"
  },

}
}))

export default function NavBar(){
  const classes = useStyles()
  const [mobileMenuAnc,setMobilMenuAnc] =useState(null)
  const isMobileMenuOpen=Boolean(mobileMenuAnc)

  const openMobileMenu = (e)=>{
    setMobilMenuAnc(e.currentTarget)
  }
  const closeMobileMenu = (e)=>{
    setMobilMenuAnc(null)
  }
  const mobileMenu=(
    <Menu anchorEl={mobileMenuAnc} id="mob-menu" keepMounted open={isMobileMenuOpen}>
      <MenuItem to="/"  component ={Link} onClick={closeMobileMenu}>Home</MenuItem>
      <MenuItem to="/about" component ={Link} onClick={closeMobileMenu}>About</MenuItem>
      <MenuItem to="/yukihira" component ={Link} onClick={closeMobileMenu}>Yukihira</MenuItem>
    </Menu>
  )
  return(
    <Fragment>
    <AppBar color="secondary" >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }} >
          Erina nakiri
        </Typography>
       <div className ={classes.sectionDesktop}>
       <Button color="inherit" to="/"  component ={Link}>
          Home
        </Button>
        <Button color="inherit" to="/about" component ={Link}>
          About
        </Button>
        <Button color="inherit" to="/yukihira" component ={Link}>Yukihira</Button>
       </div>
       <IconButton color="inherit" onClick={openMobileMenu}>
         <MoreVertIcon  />
       </IconButton>
      </Toolbar>
    </AppBar>
    {mobileMenu}
    </Fragment>
  )
  ;
};
