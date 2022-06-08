import axios from 'axios';

export const allUReadRequest=(url)=>{
    console.log('is these working or not!!')
     return axios.get(url)
} ;                       
export const allUserCreateRequest=(data)=>{
    return axios.post("http://localhost:7000/employee/api/creat/employeeInfo",data)
                .then(res=>res).catch(e=>e);
};

export const allUserUpdateRequest=(url)=>{
    return axios.put(url).then(res=>res).catch(e=>e);
};

export const allUserDaleleRequest=(url)=>{
    return axios.delete(url).then(res=>res).catch(e=>e);
};