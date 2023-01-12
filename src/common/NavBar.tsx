import React from "react";
import {Box, AppBar, Toolbar, Grid, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";

export const NavBar: React.FC<{}> = ( ) =>{
    return(
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid 
                        container
                        direction="row" 
                        justifyContent="space-between"
                        alignItems="center"
                        >
                            <Grid item>
                                <Typography>asdasd</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained">Login</Button>
                                    <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}