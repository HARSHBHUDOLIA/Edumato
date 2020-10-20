//This Page is little complicated make sure to read through all comments to understand what is going on

import React,{Component} from 'react';
import './Search.css'
import {withRouter} from 'react-router-dom';
const lurl="https://edumato-rest-api.herokuapp.com/location";
let rulr="https://edumato-rest-api.herokuapp.com/restaurants?city=";

class Search extends Component{
  constructor(){
    super();
    this.state={
      location:'',
      restaurants:''
    }

  }

  //In both renderCity & renderRestaurant if statement is used because otherwise there would be an error as there will be no parameter value as componenet called after render
  //This will load all the city in the database
  renderCity=(data)=>{
    if(data){
      return data.map((item)=>{
        return(
          <option className="option" value={item.city} >
          {item.city_name}
          </option>
        )
      })
    }
  }
  //This will load all restaurant swith respect to city
  renderRestaurant=(data)=>{
    if(data){
      return data.map((item)=>{
        return(
          <option  value={item._id} >
          {item.name} | {item.locality}
          </option>
        )
      })
    }
  }
//This handleCity adds data of all restaurants at that particular city in this.state.restaurant which is then used by renderRestaurant. A quick glance at working model will give you the complete idea.
  handleCity=(event)=>{
    let city_id=event.target.value;

    const rrurl=`${rulr}${city_id}`
    fetch(rrurl,{Method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{this.setState({restaurants:data})})
}

 handleRest=(event)=>{
   console.log(event.target.value)
   console.log(this.props.history.push(`/details/${event.target.value}`))

 }

  render(){

    return(
      <div>
      <div className="img-fluid first-rectangle">
        <div className="first-ellipse">
          <div className="text-in-ellipse">
            e!
          </div>
        </div>
        <div className="heading">
          Find the best restaurants,cafes, bars
        </div>

        <div className="locationSelector">
          <select className="locationDropDown" onChange={this.handleCity}> //handleCity is called whenever the value is changing to get the list of restaurants at that particular city
            <option >----Select City-----</option>
            {this.renderCity(this.state.location)}
          </select>

                 <select  className="restinput " onChange={this.handleRest} >
                 <option >----Select Restaurant-----</option>
                 {this.renderRestaurant(this.state.restaurants)}
               </select>

        </div>
      </div>
      </div>
    )

      }
      componentDidMount(){
        fetch(lurl,{Method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{this.setState({location:data})})//This is a life cycle method used for calling API. First constructor,them render them this component
  }
}




export default withRouter(Search);
