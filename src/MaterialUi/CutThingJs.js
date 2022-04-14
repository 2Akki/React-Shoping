import React from 'react'
import {Typography,Container,Button,Paper, Box,Icon} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./CustomizationJS"
const useStyles =makeStyles((theme)=>({
   root:{
       width: '100vw',
       height: '100vh',
       backgroundColor:theme.palette.grey[200],
       paddingTop: theme.spacing(5)
   
   }
}))
export default function CutThingJs() {
    const classes =useStyles()
    return (
       <ThemeProvider theme={theme}>
            <Container className={classes.root}  >
            <Paper component={Box} width="50%"  p={3} bgcolor="primary.main" color="white" borderLeft={5} borderColor="secondary.main" boxShadow={4}>
                <Typography variant ="h3">GET Erina Nakiri</Typography>
                <Typography variant ="subtitle1" gutterBottom >Erina nakiri and Yukihara somakun somakun   erina nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some  nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some  nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some</Typography>
            <Button variant ="contained" color="secondary" style={{marginRight:20}} >Read less</Button>

            <Button variant ="contained" color="secondary">Read More</Button>
            </Paper>
        </Container>
        
       </ThemeProvider>

    )
}
