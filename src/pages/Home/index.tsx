import React from "react";
import {Container} from "@mui/material"
import {CardComponent} from "../../components/movies/MovieCard";
import Movies from "../../api/movies/movies";


export const HomePage: React.FC<{}> = () =>{
    React.useEffect(()=>{
    },[])
    return(
        <Container sx={{mt: 9}} maxWidth="xl">
            <CardComponent></CardComponent>
            <Movies/>
        </Container>    
    );
};