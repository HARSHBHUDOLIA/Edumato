import React,{Component} from 'react';
import axios from 'axios';
import ViewBooking from './bookingDisplay';

const burl="https://edumato-rest-api.herokuapp.com/orders";

class Booking extends Component{
  constructor(){
    super();

    this.state={
      orders:''
    }
  }

  render(){

      return(
      
            <ViewBooking orderdata={this.state.orders}/>

      )

  }

  async componentDidMount(){
    let response=await axios.get(`${burl}`)
    this.setState({orders:response.data})
  }
}

export default Booking;
