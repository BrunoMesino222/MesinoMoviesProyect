import React, {useState} from "react";
import {Box} from "@mui/material"
import {CardComponent} from "../../components/MovieCard";
import {general} from "../../api/common/general.service";
import {Carrousel} from "../../components/Carousel";
import { MovieType } from "../../components/MovieCard.types";

export const HomePage: React.FC<{}> = () =>{
    const [ result, setResult ] = useState<MovieType[]>([])
    React.useEffect(()=>{
        general.getAll({page:1, target:'upcoming'}).then((r:any)=>{
            console.log(r.data)
            setResult(r.data.results)
        }).catch((e:any)=>{
            console.error(e)
        })
    },[])
    return(
        <div>
            <CardComponent results={result}/>
        </div>
    );
};