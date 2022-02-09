import { useNavigate } from "react-router"

export const MovieCard=(props)=>{
    const navigate=useNavigate();
    const routeHandler=()=>{
        navigate("/movie/"+props.movie.id)
    }
    console.log(props)
    return <div className="movie-card" onClick={routeHandler}>
        <img src={props.movie.medium_cover_image} alt=""/>
    <div className="content">
        <div className="movie-title">
            {props.movie.title}
        </div>
        <div className="year">{props.movie.year}</div>
    </div>
    </div>
    

}