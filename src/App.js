import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  const user = "test";
  return (
    <div className="app">
      {!user ? (
        <h1>Login</h1>
      ) : (
        <>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed/>
        </div>
        </>

    )}
      
         
   
     
    </div>
  );
}

export default App;
