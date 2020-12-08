import React from "react"
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Search from "./components/Search"
import './App.css';
import axios from "axios"


class App extends React.Component{
  state ={
    users: [],
    isLoading: false
  }

 // async componentDidMount(){
 //  this.setState({isLoading:true})
 //  const res = await axios.get(`https://api.github.com/users?client_id=
 //    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
 //    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
 //  this.setState({users:res.data , isLoading:false })
 // }

 searchUsers = async text =>{
  this.setState({isLoading:true})
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  this.setState({users:res.data.items , isLoading:false })
 }

 // Clear users from State

 clearUsers = () =>{
   this.setState({users:[] , loading: false})
 }

  render(){
    const { users , isLoading } = this.state
    return(
      <div>
        <Navbar/>
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClearButton={users.length > 0 ? true : false}/>

          <Users
            users={users}
            loading={isLoading}/>
        </div>
      </div>
    )
  }
}

export default App;
