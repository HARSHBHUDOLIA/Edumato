import React,{Component} from 'react';
import axios from 'axios'

const cuisineurl='https://edumato-rest-api.herokuapp.com/restaurantList'



class CuisineFilter extends Component{

  cuisinefilter=(event)=>{

   let cuisineType=event.target.value;
   let mealType=sessionStorage.getItem('mealid');
   console.log(mealType)
   let curl
   if(cuisineType==''){
     curl=`${cuisineurl}/${mealType}`
   }
   else{
     curl=`${cuisineurl}/${mealType}?cuisine=${cuisineType}`
   }
   axios.get(curl)
   .then((response)=>{this.props.cuisinedata(response.data)})
  }
    render(){
       return(
         <React.Fragment>
             Cuisine Filter
             <br/>
             <br/>
             <div onChange={this.cuisinefilter}>
                <label className="radio">
                    <input type='radio' value="" name='cost'/>All
                </label>
                <br/>
                <label className="radio">
                    <input type='radio' value="1" name='cost'/>North Indian
                </label>
                <br/>
                <label className="radio">
                    <input type='radio' value="2" name='cost'/>South Indian
                </label>
                <br/>
                <label className="radio">
                    <input type='radio' value="3" name='cost'/>Chinese
                </label>
                <br/>
                <label className="radio">
                    <input type='radio' value="4" name='cost'/>Fast Food
                </label>
                <br/>
                <label className="radio">
                    <input type='radio' value="4" name='cost'/>Street Food
                </label>
                <br/>
              </div>
            </React.Fragment>
       )
    }

}

export default CuisineFilter;
