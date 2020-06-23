import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './Weather.css'
import CityInfo from './CityInfo'

class Weather extends Component {
    state = {
         cityName: '',
    }
    
    handleChange = (ev) => {
        this.setState({ cityName: ev.target.value})
    }

    handleSubmit = (ev) => {
        const {cityName} = this.state
        ev.preventDefault()
        this.props.history.push(`/weather/${cityName}`)
        this.setState({cityName: ''})
        
    }
    
    render() {
        return(
            <div className = "weather">
                <img className = "weather-logo" src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/logo_OpenWeatherMap_orange.svg" alt="open weather map logo"/>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <input 
                        type="text"
                        value={this.state.cityName}
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
                <Switch>
                    <Route path ="/weather/:cityName" component = {CityInfo} />
                    <Route exact path = "/weather" render = {() => (<h2>Please enter any city in the world</h2>) }  />  
                </Switch>
            </div>
        )
    }
}

export default Weather