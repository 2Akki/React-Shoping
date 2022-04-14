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
    Radio,RadioGroup,FormControl,FormLabel,FormControlLabel,Checkbox 
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  
  import AccessAlarmTwoTone from "@material-ui/icons/AccessAlarmTwoTone";
  // import AccountCircle from "@material-ui/icons/AccountCircle";
  const useStyles =makeStyles((theme)=>({
    root:{
        width: '100vw',
        height: '100vh',
        backgroundColor:theme.palette.grey[200],
        paddingTop: theme.spacing(5)
    
    }
 }))
export default function CheckboxJS() {
    const classes =useStyles()
    const [user,SetUser] = useState(false)
    const HandleChange= (e)=>{
        SetUser(e.target.checked)
      }
    return (
        <Container className={classes.root}>
            <Paper component={Box} width="30%"  p={4} mx="auto">
                <Typography variant ="subtitle1">Erina Nakiri and Yukihara somakun somakun   erina nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some  nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some  nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some</Typography>
        <Box component="form">
           <FormControl>
               <FormControlLabel label="keep me IN" control={<Checkbox icon={<AccessAlarmTwoTone></AccessAlarmTwoTone>}/>} onChange={HandleChange} checked ={user}></FormControlLabel>
           </FormControl>
        </Box>
            </Paper>
        </Container>
    )
}

