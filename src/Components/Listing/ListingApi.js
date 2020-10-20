import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import CostFilter from '../filters/costFilter';
import CuisineFilter from '../filters/cuisineFilter'


const url="https://edumato-rest-api.herokuapp.com/restaurants?mealtype="
const mealurl='https://edumato-rest-api.herokuapp.com/mealtype'

class ListingApi extends Component{

     constructor(props){
       super()

       this.state={
         hotelist:'',
         mealname:''
       }
     }

     setDataAsPerFilter(sortedData){
       this.setState({hotelist:sortedData})
     }

     render(){
       return(

         <div className="container">
         <div className="row">
            <div className="col-md-2">
             <CostFilter  costdata={(data)=>{this.setDataAsPerFilter(data)}}/>
             <CuisineFilter cuisinedata={(data)=>{this.setDataAsPerFilter(data)}}/>
             </div>
             <div className="col-md-10">
                <center>
                    <h3> Here are the options for {this.state.mealname} </h3>
                </center>
                <ListingDisplay listdata={this.state.hotelist}/>
            </div>
          </div>
        </div>

       )
     }
      componentDidMount(){

        let mealid=this.props.match.params.id;
        sessionStorage.setItem('mealid',mealid)
        axios.get(`${mealurl}`)
        .then((response)=>{
          for(let i=0;i<response.data.length;i++){
            if(response.data[i]._id===Number(mealid)){
              this.setState({mealname:(response.data[i].name).toUpperCase()})
              i=response.data.length;
            }else{
              this.setState({mealname:'Wrong Input'})
            }
          }

        })
        axios.get( `${url}${mealid}`)
        .then((response)=>{this.setState({hotelist:response.data})})

    }

}

export default ListingApi
