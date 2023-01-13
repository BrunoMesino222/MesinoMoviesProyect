import React from "react";
import {Container} from "@mui/material"
import {CardComponent} from "../../components/movies/MovieCard";
import {general} from "../../api/common/general.service";
import { isNumberObject } from "util/types";


export const HomePage: React.FC<{}> = () =>{
    
    React.useEffect(()=>{
        general.getAll({page:1}).then((r:any)=>{
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