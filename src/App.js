import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Home from "./Home";

function App() {
  const user = "test"
  return (
    // <div>
    //   {!user ? (
    //     <Login />
    //   ):(
    //     <>

    //     <Home />
    //     </>
    //   )}
    // </div>
      
    
    <>
      <Router>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/Feed' component={Home} />
          </Switch>
        </Router>
    </>
  );
}

export default App;

//<Header />

//<div className="app__body">
 // <Sidebar />

//</div>