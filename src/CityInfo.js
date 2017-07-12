import React, { Component } from 'react'

class CityInfo extends Component {
    
    constructor(props) {
       super(props)

       this.state = {
           city: {}
       }
       this.fetchUserData() //Doesnt have to be 'this.props' since it's in the constructor
   }

   fetchUserData = () => {
        fetch(`api.openweathermap.org/data/2.5/weather?q=${this.props.match.params.cities}`)
        .then(res => res.json())
        .then(city => this.setState({ city }))
   }

   render(props){
       return(
           console.log(this.state.city)
           /*<div> 
               <h2>{this.state.city.weather.main}</h2>
           </div>*/
       )
    }
}