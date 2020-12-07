import React from "react"
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import './App.css';
import axios from "axios"


class App extends React.Component{
  state ={
    users: [],
    isLoading: false
  }

 async componentDidMount(){
  this.setState({isLoading:true})
  const res = await axios.get(`https://api.github.com/users?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  this.setState({users:res.data , isLoading:false })
 }

  render(){
    return(
      <div className="">
        <Navbar/>
        <div className="container">
          <Users users={this.state.users} loading={this.state.isLoading}/>
        </div>
      </div>
    )
  }
}

export default App;
