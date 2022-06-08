export const inputName=(event)=>{
    return{
        type:'name',
        payload:{
            success:event,
            failed:''
        }
    };
}

export const inputSalary=(event)=>{
    return{
        type:'salary',
        payload:{
            success:event,
            failed:''
        }
    };
}

export const readDataAction=(data)=>{
    return {
       type:'READ_URL',
       users:[data]
    };
}

export const createDataAction=(data)=>{
    return{
        type:'CREATE_URL',
        url:data
    
    };
}

export const updateDataAction=(data)=>{
     return{
         type:'UPDATE_URL',
         url:data
     };
}

export const deleteDataAction=(data)=>{
    return{
        type:'DELETE_URL',
        value:data
    };
}
export const sagaAction=()=>{
    return{
        type:'WORK',
        url:''
    }
}