import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography} from "@mui/material";
import React from "react";

type CardProps = {
    image: string; 
    title: string; 
}
//@ts-ignore
export const CardComponent: React.FC<{}> = ({results}) => {
//@ts-ignore    
    results.map(x =>{
        let {tittle, image, genre} = x;
    return(
        <Card sx={{ maxWidth: 220   }}>
            <CardMedia
                component="img"
                height="200"
                image={image}/>
            <CardContent>
                <Typography variant="h6" sx={{mt:1}}>{tittle}</Typography>
                <Divider/>
                <Typography sx={{mt:0.5}}>{genre}</Typography>
                <Typography sx={{mt:0.5}}>Description</Typography> 
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" size="small"></Button>
            </CardActions>
        </Card>
    )
} )}