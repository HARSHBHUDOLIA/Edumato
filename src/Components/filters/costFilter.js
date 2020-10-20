import React,{Component} from 'react';
import axios from 'axios'

const costurl='https://edumato-rest-api.herokuapp.com/restaurantList'

class CostFilter extends Component{


  costfilter=(event)=>{

   let costValue=(event.target.value).split(',');
   let lcost=Number(costValue[0]);
   let hcost=Number(costValue[1]);
   let mealType=sessionStorage.getItem('mealid');
   console.log(mealType)
   let curl
   if(costValue==''){
     curl=`${costurl}/${mealType}`
   }
   else{
     curl=`${costurl}/${mealType}?lcost=${lcost}&hcost=${hcost}`
   }
   axios.get(curl)
   .then((response)=>{this.props.costdata(response.data)})
  }


    render(){
       return(
         <React.Fragment>
             Cost Filter
             <br/>
             <br/>
             <div onChange={this.costfilter}>
                <label className="radio">
                    <input type='radio' value="" name='cost'/>All
                </label>
                <br/>
                <label className="radio">
                    <input type='radio' value="100,300" name='cost'/>100-300
                </label>
                <br/>
                <label className="radio">
                    <input type='radio' value="301,500" name='cost'/>301-500
                </label>
                <br/>
                <label className="radio">
                    <input type='radio' value="501,800" name='cost'/>501-800
                </label>
                <br/>
                <br/>
              </div>
            </React.Fragment>
       )
    }

}

export default CostFilter;
