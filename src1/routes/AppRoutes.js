import {Route, Routes} from "react-router-dom";
import {Landing} from "../pages/Landing";
import {Search} from "../pages/Search";
import {MovieDetails} from "../pages/MovieDetails";
import {ROUTES} from "./routes";

export const AppRoutes = ()=>{
    return   <Routes>
        {ROUTES.map((route,key)=>(
            <Route path={route.path} element={route.component} exact={route.exact} key={key}/>
        ))
        }
    </Routes>
}