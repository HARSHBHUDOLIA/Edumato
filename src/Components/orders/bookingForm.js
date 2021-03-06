import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const restUrl="https://edumato-rest-api.herokuapp.com/restaurantdetails";
const placeorder="https://edumato-rest-api.herokuapp.com/placeorder";

class Placeorder extends Component{

    constructor(props){

      super()

      this.state={
        order_id:Math.floor(Math.random()*10000),
        rest_name:'',
        name:'',
        phone:'',
        person:'',


        }

    }

    handleChangeName=(event)=>{
      console.log(event.target.value);
      this.setState({name:event.target.value})
    }

    handleChangePhone=(event)=>{
      console.log(event.target.value);
      this.setState({phone:event.target.value})
    }
    handleChangePerson=(event)=>{
      console.log(event.target.value);
      this.setState({person:event.target.value})
    }
   handleSubmit=()=>{
     fetch(placeorder,{
       method:'POST',
       headers:{
         'Accept':'application/json',
         'Content-Type':'application/json'
       },
       body:JSON.stringify(this.state)
   })
   .then(this.props.history.push('/viewBooking?message=Success'))
   }

      async componentDidMount(){
          let restid=this.props.match.params.id;
          let response=await axios.get(`${restUrl}/${restid}`)
          this.setState({rest_name:response.data[0].name})
      }

  render(){
    console.log(this.props)
    return(
      <div className="container" >
          <div className="card   mb-3" style={{marginTop:'20px'}}>
              <div className="card-header">
                  Place Your Order
              </div>
              <div className="card-body">
                  <div className="form-group">
                      <label>Order_Id</label>
                      <input type="text" name="order_id" value={this.state.order_id} readOnly className="form-control"/>
                  </div>

                  <div className="form-group">
                      <label>Rest name</label>
                      <input type="text" name="rest_name" value={this.state.rest_name} readOnly className="form-control"/>
                  </div>
                  <div className="form-group">
                      <label>Name</label>
                      <input type="text" name="name" value={this.state.name}  className="form-control" onChange={this.handleChangeName}/>
                  </div>
                  <div className="form-group">
                      <label>Phone</label>
                      <input type="text" name="phone" value={this.state.phone}  className="form-control" onChange={this.handleChangePhone}/>
                  </div>
                  <div className="form-group">
                      <label>Person</label>
                      <select type="text" name="person" value={this.state.person} className="form-control" onchange={this.handleChangePerson}>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                      </select>
                  </div>
                  <Link to={`/details/${this.props.match.params.id}`} className="btn btn-danger">Back</Link>&nbsp;
                  <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
              </div>
          </div>
      </div>
    )
  }
}

export default Placeorder;


//&nbsp=no breaking space between buttons
