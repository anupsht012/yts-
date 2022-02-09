import {Route,Routes } from "react-router-dom";
// import {Landing} from "../pages/Landing"
// import {MovieDetails} from "../pages/MovieDetails"
// import {Search} from "../pages/Search"
import { ROUTES } from "./routes";
export const AppRoutes=()=>{
    return <Routes>
    
        {ROUTES.map((route,key)=>(
            <Route path={route.path} element={route.component} exact={route.exact} key={key}/>
        ))}
        {/* <Route element="/" path={<Landing/>} exact={true}/>
        <Route element="/movie/:id" path={<MovieDetails/>} exact={true}/>
        <Route element="/services" path={<Services/>} exact={true}/>  */}
    </Routes>

}