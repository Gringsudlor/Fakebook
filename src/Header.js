import React from 'react'
import "./Header.css";
//import searchIcon from "./image/search.png"

function Header() {
    return <div className="header">
        <div className="header__left">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt=""
                />


        <div className="header__input">
            <img src="https://cdn-icons-png.flaticon.com/512/7156/7156460.png" alt="searchIcon"/>
            <input type="text" />
            </div>
        </div>

        <div className="header__center">
            <div className="header__home">
                <img src="https://cdn-icons.flaticon.com/png/512/1659/premium/1659146.png?token=exp=1649398251~hmac=1707db8666e703a15529acd1771ae9de" alt="homeIcon"/>
            </div>
            <div className="header__game">
                <img src="https://cdn-icons-png.flaticon.com/512/2797/2797843.png" alt="gameIcon"/>
            </div>
            <div className="header__chat">
                <img src="https://cdn-icons.flaticon.com/png/512/6188/premium/6188661.png?token=exp=1649399271~hmac=88c67211451ad7a1c3b9cda2a0c903ef" alt="chatIcon"/>
            </div>
        </div>


        <div className="header__right">
            <div className="header__info">
                <h4>Sprlng Zerm</h4>
            </div>
        


        </div>

    </div>;
    
}

export default Header;