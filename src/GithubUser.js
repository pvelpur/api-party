import React, { Component } from 'react'
import './GithubUser.css'
 
 class GithubUser extends Component {
   constructor(props) {
       super(props)

       this.state = {
           user: {}
       }
       this.fetchUserData(props) //Doesnt have to be 'this.props' since it's in the constructor
   }

   fetchUserData = (props) => {
       fetch(`https://api.github.com/users/${props.match.params.username}`)
       .then(response => response.json())
       .then(user => this.setState({ user }))
   }

   componentWillReceiveProps(nextProps) {
       const locationChanged = nextProps.location !== this.props.location
       if(locationChanged){
           this.fetchUserData(nextProps)
       }
   }

   render() {
       const { user } = this.state
      return (
          <div className = "github-user">
              <img src = {user.avatar_url} alt="github user avatar" />
              <h2>{user.login}</h2>
              <h3>followers: {user.followers}</h3>
              <h3>following: {user.following}</h3>
              <h3>locations: {user.location}</h3>
              <a href = {user.html_url} target="_"> Link to {user.login}'s profile</a>
            </div>

      )
   }
 }
 
 export default GithubUser