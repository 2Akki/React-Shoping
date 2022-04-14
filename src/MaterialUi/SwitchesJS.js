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
    Radio,RadioGroup,FormControl,FormLabel,FormControlLabel,Checkbox ,Switch
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
export default function SwitchesJS() {
    const [play,stPlay] = useState(false)
    const classes =useStyles()
    return (
       <Container className={classes.root}>
           <Paper component={Box} p={3} width="30%" mx="auto">
           <Typography variant ="subtitle1">Erina nakiri erina Yukihara somakun somakun   erina nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some  nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some</Typography>

                <Switch onchange={e=>stPlay(e.target.checked)}/>
              
           </Paper>
       </Container>
    )
}
