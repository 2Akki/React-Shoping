import React from 'react'
import {Typography,Container,Button,Paper, Box,Icon} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles =makeStyles((theme)=>({
   root:{
       width: '100vw',
       height: '100vh',
       backgroundColor:theme.palette.grey[200],
       paddingTop: theme.spacing(5)
   
   }
}))
export default function UtilityFunctionssJS() {
    const classes =useStyles()
    return (
        <Container className={classes.root}  >
            <Paper component={Box} width="50%" height="24%" p={2} bgcolor="primary.main" color="white" borderLeft={5} borderColor="secondary.main" boxShadow={4}>
                <Typography variant ="h3">GET Erina Nakiri</Typography>
                <Typography variant ="subtitle1" gutterBottom >Erina nakiri and Yukihara somakun somakun   erina nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some  nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some  nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some</Typography>
            <Button variant ="contained" color="secondary" style={{marginRight: 5}} >Read less</Button>

            <Button variant ="contained" color="secondary">Read lMore</Button>
            </Paper>
        </Container>
    )
}
