import React, { Component } from 'react'

class PokemonInfo extends Component {
    
    constructor(props) {
       super(props)

       this.state = {
           pokemon: {},
           sprites: {}
       }
       this.fetchPokemonData(props) //Doesnt have to be 'this.props' since it's in the constructor
   }

   fetchPokemonData = (props) => {
       console.log(props.match.params.pokemonName)
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.pokemonName.toLowerCase()}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon, sprites: pokemon.sprites }))
   }

   componentWillReceiveProps(nextProps) {
       const locationChanged = nextProps.location !== this.props.location
       if(!locationChanged){
            return;
       }
       this.fetchPokemonData(nextProps)
   }

   render(){
       const {pokemon} = this.state
       const spriteKeys = Object.keys(this.state.sprites)
       const tableStyle = {
           margin: "0 auto"
       }
       return(
           //console.log(this.props.match.params.cityName)
            <div> 
                <h1>{pokemon.name}</h1>
                <table style={tableStyle}>
                    <tbody>
                        <tr>
                            <th>Sprite Name</th>
                            <th>Sprite Icon</th>
                        </tr>
                        {spriteKeys.map((key, i) => (
                            <tr key={i}>
                                <td>{key}</td>
                                <td><a href={pokemon.sprites[key]}><img src={pokemon.sprites[key]}></img></a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
       )
    }
}

export default PokemonInfo