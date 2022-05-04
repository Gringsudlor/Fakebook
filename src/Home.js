import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";


function Home () {
    return (
        <>
            <div className="Home">
                <Header />
                <div className="body">
                    <Sidebar />
                    <Feed />
                </div>

            </div>
        </>
    );
}

export default Home;