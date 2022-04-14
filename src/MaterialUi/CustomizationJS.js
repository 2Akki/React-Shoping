import React from 'react'
import {Typography,Container,Button,Paper, Box,Icon} from '@material-ui/core'
import {createMuiTheme} from '@material-ui/core/styles'
import Teal from '@material-ui/core/colors/teal'
import deepOrange from '@material-ui/core/colors/deepOrange'
const theme = createMuiTheme({
    spacing:10, 
    palette:{
        primary: {
            main:Teal[500]
        },
        secondary: {
            main:deepOrange[500]
        }
    }
})

export default theme