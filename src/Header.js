import React from 'react'
import "./Header.css";
import {Avatar} from "@material-ui/core";
import {  useStateValue } from "./StateProvider";
//import searchIcon from "./image/search.png"

function Header() {

    const [{user}, dispatch ] = useStateValue();


    return <div className="header">
        <div className="header__left">
            <img
                //src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                src='https://cdn-icons-png.flaticon.com/512/3479/3479392.png'
                alt=""
                />


        <div className="header__input">
            <img src="https://cdn-icons-png.flaticon.com/512/7156/7156460.png" alt="searchIcon"/>
            <input type="text" />
            </div>
        </div>

        <div className="header__center">
            <div className="header__home">
                <img src="https://cdn-icons-png.flaticon.com/512/6268/6268612.png" alt="homeIcon"/>
            </div>
            <div className="header__game">
                <img src="https://cdn-icons-png.flaticon.com/512/2797/2797843.png" alt="gameIcon"/>
            </div>
            <div className="header__chat">
                <img src="https://cdn-icons-png.flaticon.com/512/3214/3214461.png" alt="chatIcon"/>
            </div>
        </div>


        <div className="header__right">
            <div className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>
        


        </div>

    </div>;
    
}

export default Header;