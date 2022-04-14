import React,{ useState,useEffect} from 'react'
import {Typography,Container,Button,Paper,Box,Icon,Grid, Fab,CardActionArea,CardMedia,CardActions,CardContent, Card,} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';

import axios from 'axios';
const useStyles =makeStyles((theme)=>({
    root:{
        width: '100vw',
        height: '100vh',
        backgroundColor:theme.palette.grey[300],
        paddingTop: theme.spacing(5)
    
    },add:{
        position: 'fixed',
        bottom:"5%",
        right:"5%"
    }
}))
export default function FABJS() {
    const classes =useStyles()
    const [users,setUsers] =useState([])
    const loadedUsers= async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data)
    }         
    useEffect(() =>{
        loadedUsers()
    },[])
    return (

        <div>
            <Container className={classes.root}>
            <Fab color ="secondary" className={classes.add} variant="extended"><AddIcon ></AddIcon>Create User</Fab>
            <Grid container>
                {
                    users.map((user) =>(
                        <Grid item sm={3}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia component="img" image="https://via.placeholder.com/300x200"></CardMedia>
                                    <CardContent>
                                <Typography variant="h6">{user.name}</Typography>
                                <Typography >{user.email}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                ))}
            </Grid>
            </Container> 
        </div>
    )
}
