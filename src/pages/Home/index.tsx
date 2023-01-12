import React from "react";
import {Container} from "@mui/material"
import {CardComponent} from "../../components/movies/MovieCard";
import {movies} from "../../api/movies/movies";


export const HomePage: React.FC<{}> = () =>{
    
    React.useEffect(()=>{
        movies.getAll({page:1}).then((r:any)=>{
            console.log(r.data.results)
        }).catch((e:any)=>{
            console.error(e)
        })
    },[])
    return(
        <Container sx={{mt: 9}} maxWidth="xl">
            <CardComponent></CardComponent>
            
        </Container>    
    );
};