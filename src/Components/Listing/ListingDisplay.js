import React from 'react';
import {Link} from 'react-router-dom';
import './Listing.css';

const ListingDisplay=(props)=>{
  const renderList= ({listdata})=>{
    if(listdata){
      return listdata.map((item)=>{
        return(

          <div className='item' key={item._id}>
            <div className="row" >
              <div className="col-md-6">
                <img className="Image" src={item.thumb}/>
              </div>
              <div className="col-md-6">
                <div className="hotel_name">
                  <Link to={`/details/${item._id}`}>{item.name}</Link>
                </div>

                <div className="city_name">{item.city_name}</div>
                <div className="city_name">{item.locality}</div>
                <div className="city_name">{item.address}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                  <div className="cuisine_block"> Cuisine </div>
                  <div className="cuisine_block"> Cost Per Two </div>
              </div>
              <div className="col-sm-9">
                  <div className="cuisine_out">{item.Cuisine[0].name} | {item.Cuisine[1].name}</div>
                  <div className="cuisine_out">Rs. {item.cost}</div>
              </div>
            </div>
          </div>
        )
      })
    }else{
      return(
        <h3>Loading....</h3> //Good loading Icon to be put here.
      )
    }
  }
  return(
    <div>
         <div className="row">
          <div className="col-mid-12">
           {renderList(props)}
          </div>
        </div>

    </div>

  )
}

export default ListingDisplay
