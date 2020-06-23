import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './Pokemon.css'
import PokemonInfo from './PokemonInfo'

class Pokemon extends Component {
    state = {
         pokemonName: '',
    }
    
    handleChange = (ev) => {
        this.setState({ pokemonName: ev.target.value})
    }

    handleSubmit = (ev) => {
        const {pokemonName} = this.state
        ev.preventDefault()
        this.props.history.push(`/pokemon/${pokemonName}`)
        this.setState({pokemonName: ''})
        
    }
    
    render() {
        return(
            <div className = "pokemon">
                <img className = "pokemon-logo" src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo.png" alt="pokemon logo"/>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <input 
                        type="text"
                        value={this.state.cityName}
                        onChange={this.handleChange}
                        placeholder = "Enter Pokemon Name Here" 
                        />
                    </div>
                    <div>
                        <button type = 'submit'>
                            Click to search Pokemon
                        </button>
                    </div>
                </form>
                <Switch>
                    <Route path ="/pokemon/:pokemonName" component = {PokemonInfo} />
                    <Route exact path = "/pokemon" render = {() => (<h2>Please enter any Pokemon name to see some cute Sprites</h2>) }  />  
                </Switch>
            </div>
        )
    }
}

export default Pokemon