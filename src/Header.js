import React from 'react'
import "./Header.css";
function Header() {
    return <div className="header">
        <div className="header__left">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt=""
                />


        <div className="header__input">
            <h1>SearchIcon</h1>
            <input type="text" />
            </div>
        </div>

        <div className="header__center">
            <div className="header__option">
            <h1>HomeIcon</h1>
            </div>
            <div className="header__option">
            <h1>FlagIcon</h1>
            </div>
            <div className="header__option">
            <h1>FreindsIcon</h1>
            </div>
        </div>


        <div className="header__right">
            <div className="herder__info">
                <h1>Avatar</h1>
                <h4>Sprlng Zerm</h4>
            </div>
        


        </div>

    </div>;
    
}

export default Header;