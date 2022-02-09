import axios from "axios"
import { useEffect, useState } from "react"
import { MovieCard } from "../common/MovieCard"
// 
// export const Landing=()=>{
//     const [movies,setMovies]= useState([])
//     useEffect(()=>{
//         // aync -makes a function, return a  promise
//         callMovieAPI();
        
//         // await le euta kaam nasakepani arko start garxa , makes a function wait for a promise
//     },[])

//     const callMovieAPI =async() => {
//         console.log("he")
//         await axios.get('https://yts.mx/api/v2/list_movies.json').then((res)=>{
//             let movieslist  = res.data.data.movies;
//             console.log(res, res.data.data);
//             setMovies([...res.data.data.movies]);
//         });
//         console.log(movies)
//     };
//     return <section className={"wrapper"}>
//     <h1>movie title</h1>
//     {/* get,post,put,patch,delete */}
//     {/* get=kunai pani thau bata data paunalai
//         post=backenf ma gaera set garna
//         put=edit garna
//         patch=editing
//         delete=delete garna */}
//     <div className="movie-content">
//         {movies.map((movie,key)=>
//             <MovieCard key={key} movie={movie}/>)
//        }
       
//     </div>
//     </section>
// }

export const Landing=()=>{
    const [movies,setMovies]= useState([])
    useEffect(()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json').then((res)=>{
            setMovies([...res.data.data['movies']]);
    });
},[]);
    return <section className="wrapper">
        <h1>Movies List</h1>
        <div className="movie-content">
        {movies.map((movie,key)=>
            <MovieCard key={key} movie={movie}/>)
                    }
        </div>
    </section>
}