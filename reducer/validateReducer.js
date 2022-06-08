
let initialStat={
   users:[]
};
function allReducer(state=initialStat,action){
    if(action.type==='name'){
        return {
            payload:{
                success:action.event,
                failed:'*Invalid User Name'
            }
        };
    }
    else if(action.type==='Birth'){
        return {
            ...state,birth:''
        } ;
        
    }
    else if(action.type==='Gender'){
        return{
            ...state,
               gender:''
        };
    }
    else if(action.type==='salary'){
        return{
            ...state,payload:{
                success:action.event,
                failed:"*Invalid Salary"
            }
        };
    }
  else if(action.type==='ALL_FIELD'){
      return{
          ...state,payload:'*All fields are required'
      };
  }  
  else if(action.type==='CREATE_URL'){
      return {
          ...state,url:action.url
      };
  }

  else if(action.type==='READ_URL'){
      return{
          ...state,users:action.users
      };
  } 
else if(action.type==='WORK'){
    return{
        ...state,url:action.url
    }
}
}

export default allReducer;