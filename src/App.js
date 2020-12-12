import React from "react"
import Navbar from "./components/Navbar"
import Alert from "./components/Alert"
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import User from "./components/User"
import NotFound from "./components/NotFound"
import './App.css';
import GithubState from "./context/github/GithubState"
import AlertState from "./context/alert/AlertState"



const App = () => {

  return(
    <GithubState>
      <AlertState>
      <Router>
        <div>
          <Navbar/>
          <div className="container">
            <Alert />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/user/:login" component={User}/>
                <Route component={NotFound}/>
              </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  )
}

export default App;
