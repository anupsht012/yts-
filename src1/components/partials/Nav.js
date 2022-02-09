import {Logo} from "../common/Logo";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router";

export const Nav = (props) => {
    const [keyword, setKeyword] = useState();
    const navigate = useNavigate();
    const keywordHandler = e=>{
        setKeyword(e.target.value);  
    }

    const changeRoute = ()=>{
        navigate('/search/'+keyword)
    }
    return (
        <nav>
            <Logo/>
            <div className="nav-items">
                {/* <div className="nav-item">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/'}>Home</NavLink>
                </div> */}
                <div className="nav-item">
                    <div className="form-input">
                        {/* <label>Search</label> */}
                        <div className={"flex "}>
                            <input type="text"  onChange={keywordHandler} placeholder={"Search any movies"} className={"flex-1"}/>
                            <i className="material-icons" onClick={changeRoute}>search</i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}