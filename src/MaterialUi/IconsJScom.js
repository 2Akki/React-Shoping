import React from 'react'
import {Typography,Container,Button,Paper, Box,Icon} from '@material-ui/core'
import  AccountBalance from '@material-ui/icons/AccountBalance'
export default function IconsJScom() {
    return (
        <Container maxWidth="sm">
        <Paper  component={Box} p={3}>
        {/* <Icon color="primary" style ={{fontSize :100}}>thumb_up</Icon> */}
        {/* <Icon>article</Icon> */}
        <AccountBalance></AccountBalance>
        </Paper>
        </Container>
    )
}

