

export const MovieCard =(props)=>{
    
    return <div className="movie-card">
        <img src={props.movie.medium_cover_image} alt=""/>
        <div className="content">
            <div className="movie-title">
                {props.movie.title}
            </div>
            <div className="year">{props.movie.year}</div>
        </div>
    </div>
}