import React,{Component} from 'react';

import QuickDisplay from './QuickDisplay';

const mealurl='https://edumato-rest-api.herokuapp.com/mealtype';

class QuickSearch extends Component {
  constructor(){
    super();

    this.state={
      mealtype:''
    }
  }

    render(){
        return(
          <QuickDisplay quickData={this.state.mealtype}/> //here quickdata is a prop,see very important to understand how QuickDisplay is a component used in quicksearch which sends an api for QuickDisplay to work.
        )
    }

    componentDidMount(){
      fetch(mealurl,{method:'GET'})
      .then((res)=>res.json())
      .then((data)=>{
        this.setState({mealtype:data})
      })
    }
  }


export default QuickSearch;
