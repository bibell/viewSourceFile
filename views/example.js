import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { createStore } from 'redux';
import allReducer from '../reducer/validateReducer';
import * as actions from '../actions/validateAction';
import * as saga from '../saga/sagaReducer'
let store=createStore(allReducer);
function EntireInfo(){
  let scar=[];  
  useEffect((userId)=>{    
       //let {userId}=this.props;
      /*
       axios.get('http://localhost:7000/employee/api/read/employeeInfo').then((res)=>{
        store.dispatch({type:'READ_URL',url:res.data._id});
        console.log(store.getState().url);
      }).catch((e)=>{
        store.dispatch({type:'READ_URL',url:e});
        console.log(store.getState()) 
      })
      */
     //store.dispatch({type:'READ_URL'});
     //console.log(store.getState()); 
      
      
    
  });  

  return(<div>
  
  </div>);
}

export default EntireInfo;