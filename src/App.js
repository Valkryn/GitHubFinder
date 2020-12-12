import React , {Fragment} from "react"
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Search from "./components/Search"
import Alert from "./components/Alert"
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import About from "./components/About"
import User from "./components/User"
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
                <Route exact path="/" render={props => (
                  <Fragment>
                    <Search />
                    <Users/>
                  </Fragment>
                  )} />
                <Route exact path="/about" component={About}/>
                <Route exact path="/user/:login" component={User}/>
              </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  )
}

export default App;
