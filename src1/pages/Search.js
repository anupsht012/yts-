import {useParams} from "react-router";
import {Loader} from "../components/common/Loader/Loader";
import {MovieCard} from "../components/common/MovieCard";
import {useEffect, useState} from "react";
import {APIGetSearchedMovie, APIGetTopMovies} from "../API/Movie";

export const Search = ()=>{
    // const {keyword} = useParams();
    // const [movies,setMovies]=useState([]);
    // const [loading,setLoading] = useState(true);
    // useEffect(async ()=>{
    //     // axios.get('https://yts.mx/api/v2/').then((res)=>{
    //     //     setMovies([...res.data.data['movies']]);
    //     // });
    //     await loadMovies();
    // },[]);

    // useEffect(async ()=>{
    //     await loadMovies();
    // },[keyword]);
    // //get,post,put,patch,delete
    // const loadMovies = async () =>{
    //     setLoading(true);
    //     let res = await APIGetSearchedMovie(keyword);
    //     setMovies(res.data.data.movies ?? []);
    //     setLoading(false);
    // }
    // return <section className={"wrapper"}>
    //     <h1>Found {movies.length} results for {keyword}</h1>
    //     <div className="movie-content">
    //         {loading ? <Loader/> :
    //             movies.map((movie,key)=>
    //                 <MovieCard key={key} movie={movie} />)
    //         }
    //     </div>
    // </section>
}