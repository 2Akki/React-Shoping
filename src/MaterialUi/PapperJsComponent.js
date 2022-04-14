import React from 'react'
import {Typography,Container,Button,Paper, Box} from '@material-ui/core'
export default function PapperJsComponent() {
    return (
        <div>
            <Container maxWidth="sm">
            <Paper square variant="outlined">
                <Box p={2}>
                <Typography variant ="h4"> 
                    Read docs
                </Typography>
                <Typography variant ="subtitle1">
                    Lorem ipsum dolor sit amet, amet dolor sit amet dolor sit amet dolor sit  erina nakirir erina nakiri Erina nakiri Erina nakiri Yukihara some
                </Typography>
                <Button variant="content" color = "primary">Learn more</Button>
                </Box>
            </Paper>
            </Container>
        </div>
    )
}
