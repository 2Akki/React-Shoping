import React,{useState} from 'react'
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
    Radio,RadioGroup,FormControl,FormLabel,FormControlLabel 
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  // import AddIcon from "@material-ui/icons/Add";
  // import AccountCircle from "@material-ui/icons/AccountCircle";
  const useStyles =makeStyles((theme)=>({
    root:{
        width: '100vw',
        height: '100vh',
        backgroundColor:theme.palette.grey[200],
        paddingTop: theme.spacing(5)
    
    }
 }))
export default function Radio_ButtonsJS() {
    const classed = useStyles() 
    const [user,SetUser] = useState("Male")
    const HandleChange= (e)=>{
      SetUser(e.target.value)
    }
    return (
      <Container className={classed.root}>
        <Paper  component={Box} width="30%" p={4} mx="auto">
          <Box component="form" >
          <FormControl>
            <FormLabel>
              Chose Your Gender
            </FormLabel>
            <RadioGroup value={user}>
              <FormControlLabel label="Male" control={<Radio/>} value="male" onChange={HandleChange}/>
              <FormControlLabel label="FeMale" control={<Radio/>} value="FeMale" onChange={HandleChange}/>
              <FormControlLabel label="Not Spesafic" control={<Radio/>} value="Not" onChange={HandleChange}/>

              
            </RadioGroup>
          </FormControl>
          </Box>
        </Paper>
      </Container>  
    )
}
