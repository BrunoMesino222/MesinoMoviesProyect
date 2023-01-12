import axios from "axios";
import React from "react";

const baseURL = "https://api.themoviedb.org/3/movie/";
const api_key= "2c6cd383602f9dd84e2c543271f39c40";

export default function Movies(){
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
      axios.get(`${baseURL}315162?api_key=${api_key}&language=en-US`).then((response) => {
          setPost(response.data);
          console.log(response.data);
        }).catch(error => {
            setError(error);
            if (!post) return "No post!";
      return `Error: ${error.message}`;
    });
  }, []);
  return null;
}