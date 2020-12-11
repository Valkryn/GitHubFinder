import React, {useState} from "react"
import PropType from "prop-types"

const Search = ({searchUsers,showClear,clearUsers,setAlert}) => {

  const [text, setText] = useState("")

  const onChange = (evt) => {
    setText (evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    if (text === ""){
      setAlert("Please enter something","light")
    } else {
      searchUsers(text)
      setText("")
    }
  }

  return(
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input  type="text"
                name="text"
                placeholder="Search Users..."
                value={text}
                onChange={onChange}/>

        <input  type="submit"
                value="Search"
                className="btn btn-dark btn-block"
                />
      </form>
      {showClear&& <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
    </div>
  )
}

Search.propTypes = {
  searchUsers: PropType.func.isRequired,
  clearUsers : PropType.func.isRequired,
  showClear: PropType.bool.isRequired,
  setAlert: PropType.func.isRequired
}

export default Search
