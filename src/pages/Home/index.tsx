import React from "react";
import {Box} from "@mui/material"
import {CardComponent} from "../../components/MovieCard";
import {general} from "../../api/common/general.service";
import {Carrousel} from "../../components/Carrousel";

export const HomePage: React.FC<{}> = () =>{
    
    React.useEffect(()=>{
        general.getAll({page:1}).then((r:any)=>{
            console.log(r.data.results)
        }).catch((e:any)=>{
            console.error(e)
        })
    },[])
    return(
        <div></div>
    );
};