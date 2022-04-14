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
                <img src="https://cdn-icons.flaticon.com/png/512/1659/premium/1659146.png?token=exp=1649936454~hmac=1413ba3c58b15e59acc756863bbc5e93" alt="homeIcon"/>
            </div>
            <div className="header__game">
                <img src="https://cdn-icons-png.flaticon.com/512/2797/2797843.png" alt="gameIcon"/>
            </div>
            <div className="header__chat">
                <img src="https://cdn-icons.flaticon.com/png/512/6188/premium/6188661.png?token=exp=1649936533~hmac=fcb4bf75b14ac0ef6a09e71e3bcc72b9" alt="chatIcon"/>
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