import {Landing} from "../pages/Landing"
import {MovieDetails} from "../pages/MovieDetails"
import {Search} from "../pages/Search"
export const ROUTES=[
    {path:"/",component:<Landing/>,exact:true},
    {path:"/movie/:id",component:<MovieDetails/>,exact:true},
    {path:"/search/:keyword",component:<Search/>,exact:true}
]
