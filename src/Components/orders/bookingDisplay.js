import React from 'react';
import {withRouter} from 'react-router-dom'
const OrderView =(props)=>{

  console.log("functional>>>>",(props.location.search).split('=')[1])//to get the success string which we passed in bookingForm
  const renderTable=({orderdata})=>{
    if(orderdata){
      return orderdata.map((item)=>{
        return(
           <tr>
              <td>{item.id}</td>
              <td>{item.rest_id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.person}</td>
          </tr>
        )
      })
    }
  }

  return(
    <div>
    <alert className="alert alert-success" style={{marginTop:'20px',marginLeft:'10px',position:'absolute'}} >
      {(props.location.search).split('=')[1]}
    </alert>
      <div className="container">

          <center><h3>Order Details</h3></center>
          <table className="table table-responsive">
              <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Rest Name</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>No. Person</th>
                </tr>
              </thead>
              <body>
                  {renderTable(props)}
              </body>
          </table>
      </div>
    </div>
  )
}

export default withRouter(OrderView);

//withRouter can help get props value in functional components.
