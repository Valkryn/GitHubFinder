import React from "react"

class Navbar extends React.Component{
  static defaultProps = {
    title:"Github Finder",
    icon: "fab fa-github"
  }

  render(){
    return(
      <div className= "navbar bg-primary">
        <h1>
            <i className={this.props.icon} ></i>
          {this.props.title}
        </h1>
      </div>
    )
  }
}

export default Navbar;
