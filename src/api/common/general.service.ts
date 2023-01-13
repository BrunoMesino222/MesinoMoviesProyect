import { api } from "./api.base";

const api_key= "2c6cd383602f9dd84e2c543271f39c40";
const endpoint= `/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity
.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

export const general = {
  getAll: function({page = 1}:{page:any}){
    return api.get(endpoint, {params:{
      page
    }
  })
  },
  
  getById: function(id:string){
    return api.get(endpoint, {params:{
      id
    }
  })
  }
}
console.log(endpoint)
