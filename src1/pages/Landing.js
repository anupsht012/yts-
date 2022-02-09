import {MovieCard} from "../components/common/MovieCard";
import {useEffect, useState} from "react";
import axios from "axios";


export const Landing = ()=>{
    const [movies,setMovies]=useState([]);
    
    useEffect( ()=>{
        axios.get('https://yts.mx/api/v2/movie_details.json').then((res)=>{
            setMovies([...res.data.data['movies']]);
            console.log(movies);
        });
       
    },[]);

  
    return <section className={"wrapper"}>
       <h1>Movies List</h1>
      
        <div className="movie-content">
            
            {   movies.map((movie,key)=>
                <MovieCard key={key} movie={movie} />)
            }
           
        </div>
    </section>
}