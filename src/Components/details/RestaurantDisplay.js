import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './RestaurantDetails.css'

const RestaurantList=(props)=>{
  const renderHotel =({restData})=>{
    if(restData){
        return(
          <div class="container">
            <div className="Second-Rectangle row">



                  <button type="button" class="btn btn-primary button" data-toggle="modal" data-target="#exampleModal">
                  <img  className="image-container img-fluid" src={restData.thumb}/>
                  </button>


                  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Image Gallery for {restData.name}</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">

                                  <div id="carouselExampleControls"  className="carousel slide" data-ride="carousel">
                                    <div  className="carousel-inner">
                                      <div className="carousel-item active">
                                            <img  className="img-fluid" src={restData.thumb}/>
                                      </div>
                                      <div className="carousel-item">
                                        <img  className="img-fluid" src={restData.thumb}/>
                                      </div>
                                      <div className="carousel-item">
                                        <img  className="img-fluid" src={restData.thumb}/>
                                      </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Next</span>
                                    </a>
                                  </div>

                        </div>

                      </div>
                    </div>
                  </div>

              <div className="The-Big-Chilli-Cakery col-md-12">
                <h3>{restData.name}</h3>
                <h3>{restData.locality}</h3>
                <h3>{restData.address}</h3>
              </div>
            </div>
            <div className="row" >
                <Tabs>
                    <TabList>
                      <Tab>About</Tab>
                      <Tab>Contact</Tab>
                    </TabList>

                    <TabPanel>
                      <p>{restData.name}</p>
                      <p>{restData.type[0].name} | {restData.type[1].name}</p>
                      <p>{restData.Cuisine[0].name} | {restData.Cuisine[1].name}</p>
                    </TabPanel>
                    <TabPanel>
                      <p>{restData.address}</p>
                      <p>Call us: 5454545467</p>
                    </TabPanel>
                </Tabs>
            </div>
            <div className="row">
              <Link to={`/list/${sessionStorage.getItem('mealid')}`} className="btn btn-danger button2">Back</Link>
              <Link to={`/booking/${restData._id}`} className="btn btn-success">Place Order</Link>
            </div>
        </div>

        )
    }else{
      return(
        <h2>Loading....</h2> //make sure to have proper loading icon
      )
    }
  }
  return(
    <React.Fragment>
        {renderHotel(props)}
    </React.Fragment>
  )
}

export default RestaurantList;
