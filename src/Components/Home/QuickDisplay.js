
//QuickDisplay here uses data sent from QuickSearch then makes a page which is then send back to QuickSearch.



import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay=(props)=>{

  const renderList=({quickData})=>{
    if(quickData){
      return quickData.map( (item)=>{
        return(
          <Link to={`/list/${item.mealtype}`} className="col-lg-4 col-md-6 col-sm-12 " key={item._id}>

              <div className="row second-box">
                <div className="col-6 image-box">
                <img src={`/images/${item.name}.png`} className="image" />

                </div>

                <div className="second-heading col-6">
                  {item.name}
                  <div className="second-para ">
                    Start your day with exclusive {item.name} options
                  </div>
                </div>


            </div>
          </Link>
        )
      })
    }
  }
  return(
    <div>
    <h1 className="quick-searches">Quick Searches</h1>
    <h3 className="second-text">Discover restaurants by type of meal</h3>

      <div className="row grid-layout">


      {renderList(props)}

        </div>

    </div>
  )
}



export default QuickDisplay
