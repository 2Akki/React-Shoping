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
  TableCell,TablePagination
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AccessAlarmTwoTone from "@material-ui/icons/AccessAlarmTwoTone";
import AccountCircleIcon from "@material-ui/icons/AccountCircleRounded";
import axios from "axios";
// import AccountCircle from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
   
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
export default function TableJS() {
  const classes = useStyles();
  const [page ,setPage] = useState(0)
  const [rowsperPage,setRowsPerPage] = useState(2)
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const onChangePage = (e,newPage) => {
    setPage(newPage);
  }
  const onChangeRowsPerPage =(e)=>{
      setRowsPerPage(e.target.value);
  }
  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Website Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page*rowsperPage,page*rowsperPage +rowsperPage).map((user) => (
              <TableRow>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.company.name}</TableCell>
                <TableCell>{user.website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination rowsPerPageOptions={[2,4,10,20,25,50]} count={users.length} rowsPerPage={rowsperPage} page={page} onChangePage={onChangePage} onChangeRowsPerPage={onChangeRowsPerPage}></TablePagination>

      </TableContainer>
      
    </Container>
  );
}
