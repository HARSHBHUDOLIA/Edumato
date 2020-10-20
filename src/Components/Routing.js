import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/home';
import Header from './header';
import Footer from './footer';
import RestListing from './Listing/ListingApi';
import RestDetails from './details/RestaurantDetails';
import Bookings from './orders/bookingApi'
import Placeorder from './orders/bookingForm';

const Routing=()=>{
  return(
    <BrowserRouter>
      <div>
          <Header/>



          <Route exact path="/" component={Home}></Route>
          <Route path="/list/:id" component={ RestListing}></Route>
          <Route path="/details/:id" component={ RestDetails}></Route>
          <Route path="/viewBooking" component={Bookings}></Route>
          <Route path="/booking/:id" component={Placeorder}></Route>


          <Footer year={2020} month={'march'}/>
      </div>
    </BrowserRouter>
  )
}

export default Routing;
