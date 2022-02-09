import axios from "axios";
import {BaseURL} from "../config/baseURL";

export const APIGetTopMovies =()=>{
    return axios.get(BaseURL+'list_movies.json');
 }
 
 export const APIGetSearchedMovie =(keyword)=>{
    return axios.get(BaseURL+'list_movies.json?query_term='+keyword);
 }