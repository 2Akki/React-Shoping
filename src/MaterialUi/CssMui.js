import React from 'react'
import {Box,Typography,Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles =makeStyles((theme)=>({
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent:"space-evenly",
       
    },
    mybox:{
        color:theme.palette.common.white,
        width:300,
        backgroundColor: theme.palette.primary.dark,
        padding:theme.spacing(5),
        borderRadius:20,
        boxShadow:theme.shadows[24]
    }
}))
export default function CssMui() {
    const classes = useStyles()
    return (
        <div>   
           <Box className={classes.container}>
            <Box className={classes.mybox}>
                <Typography variant ="h3">Why You come to ouR Site</Typography> 
                <Typography variant ="subtitle1">lorem ipsum dolor sit amet dolor sit erina nakiri amet dolor sit amet hamud 1</Typography>
            </Box>
            <Box className={classes.mybox}>
                <Typography variant ="h3">Why You come to ouR Site2</Typography> 
                <Typography variant ="subtitle1">lorem ipsum dolor sit amet dolor sit erina nakiri amet dolor sit amet hamud 2</Typography>
            </Box>
            <Box className={classes.mybox}>
                <Typography variant ="h3">Why You come to ouR Site3</Typography> 
                <Typography variant ="subtitle1">lorem ipsum dolor sit amet dolor sit erina nakiri amet dolor sit amet hamud3 </Typography>
            </Box>
            </Box>
        </div>
    )
}



