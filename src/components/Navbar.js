import React from "react"
import PropType from "prop-types"

const Navbar = ({icon , title}) => {
  
  return(
    <div className= "navbar bg-primary">
      <h1>
          <i className={icon} ></i>
        {title}
      </h1>
    </div>
  )
}

Navbar.defaultProps = {
  title:"Github Finder",
  icon: "fab fa-github"
}

Navbar.propTypes = {
  title:PropType.string.isRequired,
  icon: PropType.string.isRequired
}

export default Navbar;
