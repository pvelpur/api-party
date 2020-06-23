import React, {Component} from 'react'
import './Github.css'
import {Route,Switch} from 'react-router-dom'
import GithubUser from './GithubUser'
import octoCat from './Octocat.png'

class Github extends Component {
    state = {
        username: ''
    }

    handleChange = (ev) => {
        this.setState({username: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        // Push a new history thing (we get match history and location)
        this.props.history.push(`/github/${this.state.username}`)
        this.setState({username: ''})
    }

    render() {
        return(
            <div className ='github'>
                <img className="github-logo" src={octoCat} alt = "github logo" />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <button 
                        type = "submit" 
                        >
                            Look up Github User
                        </button>
                    </div>
                </form>
                <Switch>
                    <Route path = "/github/:username" component={GithubUser} />
                    <Route exact path = "/github" render={() => <h3>Please enter a username to search on Github</h3>} />
                </Switch>
            </div>
        )
    }
}

export default Github