// import { useEffect, useState } from "react"
// import { useParams } from "react-router";
// import axios from "axios";
// export const MovieDetails=()=>{
//     const [movie, setMovie]=useState({});
//     const{id}=useParams();
//     useEffect(()=>{
//         axios.get('https://yts.mx/api/v2/movie_details.json?movie_id='+ id).then((res)=>{
//             setMovie([res.data.data['movie']]);
//             console.log(res.data.data.movie);
//     });

//     },[]);
//     return(
//         <section className={"movie-detail wrapper"}>
//         <img src={movie.large_cover_image} alt="" height={300}/>
//         <h1>{movie.title}</h1>
//         <p>{movie.description_intro}</p>
//         <h1><i className="material-icons">star</i>{movie.rating}</h1>
//         <h2>Torrents</h2>
//         <h3>{movie && movie.torrents && movie.torrents.map((v, key) => <a key={key} href={v.url}>{v.quality}</a>)}
//         </h3>
// </section>)
// }



import {useParams} from "react-router";
import axios from "axios";
import {useEffect, useState} from "react";

export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    // useParams bata id taneko
    const {id} = useParams();
    useEffect( () => {
        // useParams bata ako id lai backend ma pathako
        // backend ma pathauni bittikai value ayo
        // tyo value lai local variable setmovie to through bata set gareko
        // kunai pani euta ma click garda func trigger hunxa yo vneko detail load huni func ho
        // call the then() function to register a callback that JavaScript will call when the value is computed.
       axios.get('https://yts.mx/api/v2/movie_details.json?movie_id=' + id).then((res) => {
                console.log(res.data.data.movie)
                setMovie(res.data.data['movie']);
            });
    }, []);
    return (
        <section className={"movie-detail wrapper"}>
        {/* local variable ma set vako data lai dekhako */}
        {/* detail load huni bittikai detail lai display garako */}
            <img src={movie.large_cover_image} alt="" height={300}/>
            <h1>{movie.title}</h1>
            {/* <h1>{movie.synopsis}</h1> */}
            <p>{movie.description_intro}</p>
         <div className="rating"><h1><i className="material-icons">star</i>{movie.rating}</h1>
            <h2>Torrents</h2></div>   

            <h3>{movie  && movie.torrents && movie.torrents.map((v, key) => <a key={key} href={v.url}>{v.quality}</a>)}</h3>
    </section>)
}