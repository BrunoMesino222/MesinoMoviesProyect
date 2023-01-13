import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography} from "@mui/material";
import React from "react";

type CardProps = {
    image: string; 
    title: string; 
}

export const CardComponent: React.FC<{}> = () => {
    return(
        <Card sx={{ maxWidth: 220   }}>
            <CardMedia
                component="img"
                height="194"
                image=""/>
            <CardContent>
                <Typography variant="h4" sx={{mt:1.5}}>Hola</Typography>
                <Divider/>
                <Typography sx={{mt:2}}>Description</Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" size="small"></Button>
            </CardActions>
        </Card>
    )
}