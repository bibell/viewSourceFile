import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import {createStore} from 'redux'
//import * as action from '../actions/validateAction'
import allReducer from '../reducer/validateReducer';
import './style/mainCrud.css';
import road from './style/images/road.jpg';
import avatar3 from './style/images/avatar3.png';
import avatar from './style/images/avatar.jpg';
import * as actions from '../actions/validateAction';
//import { useDispatch } from 'react-redux'
import {createStore} from 'redux';
//import axios from 'axios';
//import { compose } from 'redux';
import EntireInfo from './example';
//import * as apiCall from '../saga/fetchApi';
//import { connect } from 'react-redux';
//import styled from 'styled-components';
//import edit from './style/images/edit.jpg';
import update from './style/images/update.png';
import remove from './style/images/remove.png';
import add from './style/images/add.jpg';
import SpeekWithMe from './publicChatRoom';

let store=createStore(allReducer);




class Main extends React.Component{
  constructor(){
      super();
      this.state={
          name:'',
          dateOfBirth:'',
          salary:'',
          users:[]
      };
    
      this.changeName=this.changeName.bind(this);
      this.changeDate=this.changeDate.bind(this);
      this.changeGender=this.changeGender.bind(this);
      this.changeSalary=this.changeSalary.bind(this);

  }
  changeName(e){
     this.setState({name:e.target.value});
     //store.dispatch(action.inputName(e.target.value));   
  }
  changeDate(e){
      //let one=e.slice(0,10);
      this.setState({dateOfBirth:e});
  }
  changeGender(e){
      this.setState({gender:e.target.value});
  }
  changeSalary(e){
      this.setState({salary:e.target.value});
      //store.dispatch({type:'salary'});
  }

   render(){
        let sagaiscool=[];
       let flag='';
       let income=[];
      // let store=createStore(allReducer)
       return(
          <div className='mainBody'>
              <img src={road} />
              <div className='createE'>
                 <h3>bluecode</h3>
                 <div className='required'></div> 
                  <input type='text' 
                         onChange={this.changeName}
                         value={this.state.name} 
                         placeholder="Employee Name"/>
                  <div className='name'>
                                       
                  </div>
                  <DatePicker 
                              selected={this.state.dateOfBirth} 
                              onChange={this.changeDate} 
                              placeholderText='Date of Birth' 
                              dateFormat="dd-mm-yyyy"/>
                   <select onChange={this.changeGender} value={this.state.gender}>
                     <option>Gender</option>  
                     <option>M</option>
                     <option>F</option>     
                    </select> <br/>
                  <input type='text' onChange={this.changeSalary}
                                     value={this.state.salary} 
                                     placeholder='salary'/>
                  <div className='salary'>{
                  //store.getState()
                  }</div> 
                  
                  <button onClick={()=>{
                      let putUser=document.querySelector('.activeUser');
                      let nc=/^[a-z A-Z]+$/;
                      if(this.state.name==='' || this.state.dateOfBirth==='' || this.state.gender==='' || this.state.salary===''){
                          store.dispatch({type:'ALL_FIELD',payload:''});
                          //dispatch({type:'ALL_FILED',payload:''});
                          //console.log(store.getState().payload);
                          let cone=document.querySelector('.required');
                          let gn=document.createElement('p');
                          gn.textContent=store.getState().payload;
                          gn.style.position='absolute';
                          gn.style.color='red';
                          gn.style.marginTop='-10px';
                          gn.style.marginLeft='40px';
                          cone.appendChild(gn);
                      }
                      else if(!nc.test(this.state.name)){
                            let name=document.querySelector('.name');
                            store.dispatch(actions.inputName(this.state.name));
                            //console.log(store.getState().payload.failed) ;
                            let orchy=document.createElement('p');
                            orchy.textContent=store.getState().payload.failed;
                            
                            orchy.style.position='absolute';
                            orchy.style.color='red';
                            orchy.style.marginTop='-10px';
                            orchy.style.marginLeft='10px';
                            name.appendChild(orchy);
                      }else if(!((this.state.salary*2)%2===0)){
                          let sr=document.querySelector('.salary');
                          store.dispatch(actions.inputSalary());
                          //console.log(store.getState().payload.failed);
                          let threejs=document.createElement('p');
                          threejs.textContent=store.getState().payload.failed;
                          threejs.style.position='absolute';
                          threejs.style.marginTop='-10px';
                          threejs.style.color='red';
                          threejs.style.marginLeft='10px';
                          sr.appendChild(threejs);
                      }
                      else{  
                   
                     let one=document.createElement('img');
                     
                     one.setAttribute('src',avatar);
                     one.style.width='40px';
                     one.style.height='40px';
                     one.style.padding='10px';
                     one.style.marginLeft='0px';
                     one.style.borderRadius='20px';
                    
                     putUser.appendChild(one);
                     for(let i=0;i<15;i++){
                         setTimeout(()=>{
                             for(let n=0;n<i;n++){
                                 one.style.marginLeft=`${n}px`;
                             }
                         });
                     }
                     let ad=[];
                     let employeeInfo=['name-','Birth-','Gender-','salary-'];
                     let textC=[this.state.name,this.state.dateOfBirth,this.state.gender,this.state.salary]
                     let sm=[-55,2,10,1,1];
                     for(let i=0;i<4;i++){
                         ad[i]=document.createElement('p');
                         ad[i].style.marginLeft='65px';
                         ad[i].style.color='rgb(167, 161, 161)';
                         ad[i].style.fontFamily='Arial, Helvetica, sans-serif';
                         //for(let m=0;m<=i;i++){
                        ad[i].textContent=employeeInfo[i]+textC[i];
                        ad[i].style.marginTop=`${sm[i]}px`;
                        ad[i].style.display='none';
                      for(let m=365;m>65;m--){  
                        setTimeout(()=>{
                            for(let b=365;b>m;b--){
                                ad[i].style.display='block';
                                ad[i].style.marginLeft=`${b}px`;
                                ad[i].style.color='rgb(255, 115, 0)';
                                ad[i].style.cursor='pointer';
                                   
                            }
                        });
                    }
                        putUser.appendChild(ad[i]);
                        ad[i].addEventListener('click',(event)=>{
                           ////////////////////////////////////////////////////////
                           let ms=document.querySelector('.myProfile');
                           for(let m=170;m>20;m--){
                               setTimeout(()=>{
                                   for(let k=170;k>m;k--){
                                       ms.style.marginLeft=`${k}px`;
                                   }
                               });
                           }  
                           let gt=document.querySelector('.changImg')
                           for(let be=-1200;be<-500;be++){
                               setTimeout(()=>{
                                   for(let d=-1200;d<be;d++){
                                       gt.style.marginTop=`${d}px`;
                                   }
                               });
                           }
                         
                        }); 
                     };
                    
                     let smart={
                         uname:this.state.name,
                         udate:this.state.dateOfBirth.toString(),
                         ugender:this.state.gender,
                         usalary:this.state.salary
                     }
                     store.dispatch({type:'READ_URL',url:smart});
                     console.log(store.getState())            

                     /*
                    axios.post('http://localhost:7000/employee/api/creat/employeeInfo',smart)
                         .then((res)=>{
                            console.log(res.data);
                         }).catch((e)=>{
                             console.log(e)
                         }) 
                       */    
                     
                 
                      };
                      
                      

                  }}>Add Employee</button>
                  <button onClick={()=>{
                   const putAdd=document.querySelector('.activeUser');
                   store.dispatch(actions.readDataAction());
            //////////////how do i connect these action store in to the redux saga
                  }}>Delete Employee</button>
              </div>
        <div className='userList'>
            <h3>Recentlly Added</h3>
            <div className='activeUser'>
            
            </div>
        </div>


    
              <div className='noMove'>

                <div className='myProfile'>
                    <p>
                        Active Employee List
                        <SpeekWithMe />
                        
                    </p>   
                         
                 
                    <EntireInfo />
                 
                </div> 
                  <button onClick={()=>{
                      let one=document.querySelector('.createE');
                    if(flag===true || flag===''){
                        flag=false;
                       let cone=document.querySelector('.myProfile');   
                    for(let b=window.innerWidth/2;b<window.innerWidth;b++){
                        setTimeout(()=>{
                            for(let m=window.innerWidth/2;m<b;m++){
                                  cone.style.marginLeft=`${m}px`;
                            };
                        });
                    };

                      for(let i=0;i<window.innerWidth;i++){
                          setTimeout(()=>{
                              for(let j=0;j<i;j++){
                                  one.style.marginLeft=`${j}px`;
                                  if(j===500){
                                      break;
                                  };
                              };

                          });
                        };
                      }else{
                          flag=true;
                         let cone=document.querySelector('.myProfile');
                         for(let b=window.innerWidth;b>window.innerWidth/9;b--){
                             setTimeout(()=>{
                                 for(let m=window.innerWidth;m>b;m--){
                                     cone.style.marginLeft=`${m}px`;
                                 };
                             });
                         };
                      for(let i=window.innerWidth/2;i>-400;i--){
                          setTimeout(()=>{
                              for(let j=window.innerWidth;j>i;j--){
                                  one.style.marginLeft=`${j}px`;
                              };
                          });
                      
                      };

                    };
                   
                  }}>Change Employee</button>
                  <button onClick={()=>{
                      let one=document.querySelector('.createE');
                      for(let i=window.innerWidth/2;i>0;i--){
                          setTimeout(()=>{
                              for(let j=window.innerWidth/2;j>i;j--){
                                  one.style.marginLeft=`${j}px`;
                              };
                          });
                      };
                  }}>Add Employee Now</button>
              </div>

              <div className='changImg'>
                      <img className='cimg' src={update}/><p>update</p><br/>
                      <img className='dimg' src={remove}/><p>remove</p><br/>
                      <img className='eimg' src={add}/><p>edite</p><br/>    
                    </div>     

          </div>
       )
   }
}


export default Main;