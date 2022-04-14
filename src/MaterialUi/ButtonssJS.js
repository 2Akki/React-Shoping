import React from 'react'
import {Typography,Container,Button,Paper, Box,Icon} from '@material-ui/core'
export default function ButtonssJS() {
    return (
        <Container maxWidth="sm">
            <Paper  component={Box} p={3}>
                <Typography variant="h3">Buttons</Typography>
                <Typography variant ="subtitle1">Erina nakiri and Yukihara somakun somakun   erina nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some</Typography>
                <Button color="secondary" variant="contained">Login</Button>
            </Paper>
        </Container>
    )
}
