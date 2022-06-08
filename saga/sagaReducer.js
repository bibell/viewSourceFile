import * as sagaReducer from './fetchApi';
import {all,select, call,put,takeEvery,takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/validateAction';
import axios from 'axios';
import {READ_URL} from './types';
import * as act from '../actions/validateAction';
let url=['http://localhost:7000/employee/api/read/employeeInfo',
        'http://localhost:7000/employee/api/creat/employeeInfo',
        'http://localhost:7000/employee/api/update/employeeInfo',
        'http://localhost:7000/employee/api/delete/employeeInfo'];

const mecall=()=>{
  return axios.get('http://localhost:7000/employee/api/read/employeeInfo').then(res=>res).catch(e=>e);
  // return 'if these is workking great';
}

 function* readUserInfo(){
   //console.log('hello world is these working or not')  
    
    try{
       //let userInfo=yield call(sagaReducer.allUReadRequest(url[0]));
        let userInfo=yield call(mecall);
       //yield put(actions.readDataAction(data),userInfo);
         console.log(userInfo);
        yield put({type:'READ_URL',userInfo});
      }catch(e){
          yield put({type:'READ_URL',e});
          console.log(e);
      } ;
      
 };       

export function* createUserInfo(action){
    try{
    let createInfo=yield call(sagaReducer.allUserCreateRequest(action));
     let create=yield put({type:'CREATE_URL',url:createInfo});
     console.log(create); 
    }catch(e){
        yield put({type:'CREATE_URL',url:e});
    };
    };

 function* updateUserInfo(){
    try{ 
     let updateInfo=yield call(sagaReducer.allUserUpdateRequest(url[2]));
     yield put(actions.updateDataAction,updateInfo);
    }catch(e){
        yield put(actions.updateDataAction,e);
    };
 };

function* deleteUserInfo(){
    try{
      let deleteInfo=yield call(sagaReducer.allUserDaleleRequest(url[3]));
      yield put(actions.deleteDataAction,deleteInfo);
    }catch(e){
      yield put(actions.deleteDataAction,e);
    };
};

 export function* handleAllRequestt(){
     //yield takeEvery(actions.readDataAction,readUserInfo);
     /*
     yield takeLatest('READ_URL',readUserInfo);
     yield takeEvery('CREATE_URL',createUserInfo);
     yield takeEvery('UPDATE_URL',updateUserInfo);
     yield takeEvery('DELETE_URL',deleteUserInfo);
     */
  let man=[]  
 //  useEffect(()=>{
    //let dibo=()=>{
    let belay=()=>axios.get('http://localhost:7000/employee/api/read/employeeInfo').then((res)=>{
      return man=res.data;
     }).catch(e=>man=e);
    let first=yield call(belay);  

    let ma=yield put(act.readDataAction(first));
    console.log(ma);
    let ma1=yield put(act.readDataAction("these is belays code and we are the best fo code"));  
    //yield takeLatest("READ_URL",dibo);
    console.log(ma1);
 
  };

 const pro=(siconds)=>new Promise(()=>{
   setTimeout(()=>{
     //console.log(res);
     console.log("hello saga is these working or not");
   },siconds);
 }); 
 export default function* handleAllRequest(){
  console.log("these response is comming from the watch saga middle");
  yield takeEvery('CREATE_URL',createUserInfo)
  yield takeEvery('READ_URL',handleAllRequest)
  //yield pro(8000);
  //yield takeEvery('READ_URL',handleAllRequestt);
  
  
 }
 
export function* rSaga(){
  yield all([
   handleAllRequestt(),
   handleAllRequest()
  ]);
}
