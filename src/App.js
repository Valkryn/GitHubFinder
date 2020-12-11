import React , {Fragment, useState} from "react"
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Search from "./components/Search"
import Alert from "./components/Alert"
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import About from "./components/About"
import User from "./components/User"
import './App.css';
import axios from "axios"


const App = () => {

  const[users,setUsers] = useState([])
  const[user,setUser] = useState({})
  const[repos,setRepos] = useState([])
  const[isLoading,setisLoading] = useState(false)
  const[alert,setAlert] = useState(null)

 // process.env comes from the .env file. It keeps sensitive information secret.
 const searchUsers = async (text) =>{
  setisLoading(true)
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  setUsers(res.data.items)
  setisLoading(false)
 }

 const getUser = async (username) => {
   setisLoading(true)
   const res = await axios.get(`https://api.github.com/users/${username}?client_id=
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
     setUser(res.data)
     setisLoading(false)
 }

 //get user repos
const getUserRepos = async (username) => {
   setisLoading(true)
   const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
     setRepos(res.data)
     setisLoading(false)
 }

 // Clear users from State
 const clearUsers = () =>{
   setUsers([])
   setisLoading(false)
 }

// Sends a message to the user
 const showAlert = (msg,type) =>{
   setAlert({msg,type})
   setTimeout( () => setAlert(null) , 5000 )
 }


  return(
    <Router>
      <div>
        <Navbar/>
        <div className="container">
          <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <Users
                    users={users}
                    loading={isLoading}
                  />
                </Fragment>
                )} />
              <Route exact path="/about" component={About}/>
              <Route exact path="/user/:login" render={props =>(
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    repos={repos}
                    user={user}
                    loading={isLoading} />
                )}/>
            </Switch>
        </div>
      </div>
  </Router>
  )
}

export default App;
