import React , {Fragment} from "react"
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Search from "./components/Search"
import Alert from "./components/Alert"
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import About from "./components/About"
import User from "./components/User"
import './App.css';
import axios from "axios"


class App extends React.Component{
  state ={
    users: [],
    user:{},
    repos:[],
    isLoading: false,
    alert: null
  }

 // async componentDidMount(){
 //  this.setState({isLoading:true})
 //  const res = await axios.get(`https://api.github.com/users?client_id=
 //    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
 //    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
 //  this.setState({users:res.data , isLoading:false })
 // }


 // process.env comes from the .env file. It keeps sensitive information secret.
 searchUsers = async (text) =>{
  this.setState({isLoading:true})
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  this.setState({users:res.data.items , isLoading:false })
 }

 getUser = async (username) => {
   this.setState({isLoading:true})
   const res = await axios.get(`https://api.github.com/users/${username}?client_id=
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
     this.setState( {user:res.data , isLoading:false})
 }

 //get user repos
 getUserRepos = async (username) => {
   this.setState({isLoading:true})
   const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
     this.setState( {repos:res.data , isLoading:false})
 }

 // Clear users from State
 clearUsers = () =>{
   this.setState({users:[] , loading: false})
 }

// Sends a message to the user
 setAlert = (msg,type) =>{
   this.setState({alert: {msg:msg , type:type} })
   setTimeout( () => this.setState({alert:null}) , 5000 )
 }

  render(){
    const { users , user , isLoading  ,alert , repos } = this.state
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
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
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
                      getUser={this.getUser}
                      getUserRepos={this.getUserRepos}
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
}

export default App;
