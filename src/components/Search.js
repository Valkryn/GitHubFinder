import React from "react"
import PropType from "prop-types"

class Search extends React.Component{

  state ={
    text:""
  }

  static propTypes = {
    searchUsers: PropType.func.isRequired,
    clearUsers : PropType.func.isRequired,
    showClearButton : PropType.bool.isRequired
  }

  onChange = (evt) => {
    this.setState({[evt.target.name]:evt.target.value})
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState({text:""})
  }


  render (){
    const {showClearButton , clearUsers } = this.props
  return(
    <div>
      <form className="form" onSubmit={this.onSubmit}>
        <input  type="text"
                name="text"
                placeholder="Search Users..."
                value={this.state.text}
                onChange={this.onChange}/>

        <input  type="submit"
                value="Search"
                className="btn btn-dark btn-block"
                />
      </form>
      {showClearButton && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
    </div>
    )
  }
}

export default Search
