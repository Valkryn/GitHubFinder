import React from "react"
import Navbar from "./components/Navbar"
import UserItem from "./components/UserItem"
import './App.css';


class App extends React.Component{

  render(){
    return(
      <div className="">
        <Navbar/>
        <UserItem/>
      </div>
    )
  }
}

export default App;
