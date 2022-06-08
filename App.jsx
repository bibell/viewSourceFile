import React from 'react';
import Header from './views/frontHeader';
import Main from './views/mainCrud';
import * as apiCall from './saga/fetchApi';
import { connect } from 'react-redux';

function App(){
    return(<div className='app'> 
               <Header />
               <Main />
          </div>)
}
const mapStateToProps=(state)=>{
   return{
       ...state
   };
};

const mapDispatchToProp=(dispatch)=>{
     return {
         apiCall:()=>dispatch(apiCall())
     };  
};

export default connect(mapStateToProps,mapDispatchToProp)(App)