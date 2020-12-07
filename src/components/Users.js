import React from "react"
import UserItem from "./UserItem"
import Spinner from "./Spinner"
import PropType from "prop-types"

const Users = ({users, loading})=>{

  if (loading) {
    return(<Spinner />)
  } else {
    return (
      <div style={userStyle}>
        {users.map( user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

Users.propTypes ={
  users: PropType.array.isRequired,
  loading: PropType.bool.isRequired
}

const userStyle={
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
}

export default Users;
