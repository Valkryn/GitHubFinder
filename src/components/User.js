import React , {Fragment , useEffect} from "react"
import Spinner from "./Spinner"
import PropType from "prop-types"
import Repos from "./Repos"
import {Link} from "react-router-dom"

const User = ({user, loading, getUser, getUserRepos, repos, match}) => {
  useEffect( () => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
  },[])

    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable} = user


    if(loading) {
      return (<Spinner />)
    } else {
    return(
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        Hireable: {" "}
        {hireable ? (
            <i className="fas fa-check text-success"/>
          ):(
            <i className="fas fa-times-circle text-danger"/>
          )}

          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                className="round-img"
                alt="profile"
                style={{width:"150px"}}
                />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} target="_blank" className="btn btn-dark my-1">Visit GitHub Profile</a>

              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <b>Username: </b>{login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong>{company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong>{blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">Public Repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
          </div>

          <Repos repos={repos} />
      </Fragment>
    )
  }
}

User.propTypes ={
  loading:PropType.bool,
  user:PropType.object.isRequired,
  getUser:PropType.func.isRequired,
  getUserRepos:PropType.func.isRequired
}

export default User;