import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import './Weather.css'
import CityInfo from './CityInfo'

class Weather extends Component {
    state = {
        city: '',
    }
    
    handleChange = (ev) => {
        this.setState({city: ev.target.value})
    }

    handleSubmit = (ev) => {
        const {city} = this.state
        ev.preventDefault()
        this.props.history.push(`/weather/${city}`)
        this.state.city = ''
        
    }
    
    render() {
        return(
            <div className = "weather">
                <img className = "weather-logo" src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/logo_OpenWeatherMap_orange.svg" alt="open weather map logo"/>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <input 
                        type="text"
                        value={this.state.city}
                        onChange={this.handleChange}
                        placeholder = "Enter City Name Here" 
                        />
                    </div>
                    <div>
                        <button type = 'submit'>
                            Click to search weather
                        </button>
                    </div>
                </form>
                <Route exact path = {this.props.match.url} render = {() => (<h2>Please enter any city in the world</h2>) }  />
                <Route path = {`${this.props.match.url}/:city`} Component = {CityInfo} />
            </div>
        )
    }
}

export default Weather