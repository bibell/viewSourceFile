import React from "react";
//import './style/frontHeader.css'
//import me from './style/images/me.jpg'
import avatar from './style/images/avatar.jpg'
//import Move from "./moveImg";
//import homeone from './style/images/homeone.jpg'
//import messanger from './style/images/messanger.jpg'
//import noty from './style/images/noty.jpg';
import {HeaderStyle,
        Con,Cmobile,PartOneBody,Images,
        SignUpForm} from './style/header.style.js';
import { UserInputField } from "./style/inputFiled.style";
import { ActiveEmployees,UserProfileImage } from "./active.style";        
import {ThemeProvider} from 'styled-components';
import Global from "./style/globalHeader.style";
import employeeTwo from './style/images/employeeTwo.png';
import Addmin from './style/images/Addmin.jpg';
import Speek from "./chatRoom";
import Profile from "./userProfile";
import addisSoft from './style/images/addisSoft.png';
//import { Socket } from "socket.io-client";
import { io } from "socket.io-client";
class Header extends React.Component{
    constructor(){
        super();
        this.state={
            uname:'',
            uphone:'',
            uemail:'',
            upassword:'',
            chat:''
        }
        
       this.userName=this.userName.bind(this);
       this.userPhone=this.userPhone.bind(this);
       this.userEmail=this.userEmail.bind(this);
       this.userPassword=this.userPassword.bind(this);
       this.chat=this.chat.bind(this);  
       this.banners=this.banners.bind(this);
    }
  chat(e){
      this.setState({chat:e.target.value});
  }  
 userName(e){
    this.setState({uname:e.target.value});
 }
 userPhone(e){
     this.setState({uphone:e.target.value});
 }
 userEmail(e){
     this.setState({uemail:e.target.value});
 }
 userPassword(e){
     this.setState({upassword:e.target.value});
 }

 banners(){
    let cmv=window.document.querySelector('.emp');
    for(let i=-500;i<300;i++){
        setTimeout(()=>{
            for(let m=-500;m<i;m++){
                document.querySelector('.emp').style.marginLeft=`${m}px`;
            }
        },500);
    }
    //let dm=document.querySelector('.ttwo');
    for(let k=-300;k<300;k++){
        setTimeout(()=>{
            for(let m=-300;m<k;m++){
                document.querySelector('.ttwo').style.marginLeft=`${m}px`;
            }
        },0.5);
    }

 }   

signUpForMe(){
   for(let n=-1200;n<20;n++){
      setTimeout(()=>{
          for(let m=-1200;m<n;m++){
              document.querySelector('.signUpp').style.marginTop=`${m}px`
          }
      });
   }

}

    render(){
        const theme={
            color:{
             
            }
        }
    let pos=1;
    let msg=0;
    
        return(
            <>
          <ThemeProvider theme={theme}>
               <Global />  
            <HeaderStyle belay={document.innerWidth}> 
                <h2 className='movve'><img src={addisSoft} style={{width:'30px',
                                height:'30px',borderRadius:'10px'}}/>Addiss Software</h2>   
            </HeaderStyle>
            <Con>
                <ul>
                    <li><a className='pNo' onClick={()=>{
                         document.querySelector('.pNo').style.backgroundColor='rgb(20, 14, 14)';
                         document.querySelector('.pNo').style.padding='10px';
                         document.querySelector('.pNo').style.margin='10px';
                        for(let i=0;i>-2000;i--){
                            //document.querySelector('.mainBody').style.marginLeft=`${i}px`;
                            setTimeout(()=>{
                                for(let z=0;z>i;z--){
                                    document.querySelector('.mainBody').style.marginLeft=`${z}px`;
    
                                }
                            });    
                        }
                     pos=1;   
                    }}>Home</a></li>
                    <li><a className='pTn' onClick={()=>{
                        //alert('hello is these working');
                        document.querySelector('.pTn').style.backgroundColor='rgb(20, 14, 14)';
                        document.querySelector('.pTn').style.padding='10px';
                        document.querySelector('.pTn').style.margin='10px';
                        for(let i=0;i>-500;i--){
                            setTimeout(()=>{
                                for(let j=0;j>i;j--){
                                    document.querySelector('.userProfilePage').style.marginLeft=`${j}px`;
                                }
                            });
                        }
                      
                    for(let i=-2000;i<0;i++){
                        //document.querySelector('.mainBody').style.marginLeft=`${i}px`;
                        setTimeout(()=>{
                            for(let z=-2000;z<i;z++){
                                document.querySelector('.mainBody').style.marginLeft=`${z}px`;

                            }
                        });    
                    }
                  pos=0;

                    }}>Employees</a></li>
                    <li><a className='proF'onClick={()=>{   
                             document.querySelector('.proF').style.backgroundColor='rgb(20, 14, 14)';
                             document.querySelector('.proF').style.padding='10px';
                             document.querySelector('.proF').style.margin='10px';
                     // let pos=document.querySelector('.mainBody').style.marginLeft     
                        if(pos===0){
                            for(let i=0;i>-2000;i--){
                                //document.querySelector('.mainBody').style.marginLeft=`${i}px`;
                                setTimeout(()=>{
                                    for(let z=0;z>i;z--){
                                        document.querySelector('.mainBody').style.marginLeft=`${z}px`;
        
                                    }
                                });    
                            }
                         }    
                          for(let i=-500;i<0;i++){
                              setTimeout(()=>{
                                  for(let j=-500;j<i;j++){
                                      document.querySelector('.userProfilePage').style.marginLeft=`${j}px`;
                                  }
                              });
                          }   
                         if(msg===1){
                            for(let c=-500;c>-1200;c--){
                                setTimeout(()=>{
                                    for(let m=-500;m>c;m--){
                                        document.querySelector('.chatingPerformance').style.marginTop=`${m}px`;
                                    }
                                });
                            }
                         } 
                    }}>profile</a></li>
                    <li><a className='ddF' onClick={()=>{
                        msg=1;
                        document.querySelector('.ddF').style.backgroundColor='rgb(20, 14, 14)';
                             document.querySelector('.ddF').style.padding='10px';
                             document.querySelector('.ddF').style.margin='10px';
                             for(let i=0;i>-500;i--){
                                setTimeout(()=>{
                                    for(let j=0;j>i;j--){
                                        document.querySelector('.userProfilePage').style.marginLeft=`${j}px`;
                                    }
                                });
                            }
                             

                     for(let c=-1200;c<-500;c++){
                            setTimeout(()=>{
                                for(let m=-1200;m<c;m++){
                                    document.querySelector('.chatingPerformance').style.marginTop=`${m}px`;
                                }
                            });
                        }
                    }}>Employee Chat room</a></li>
                </ul>
                <span className='sp' onClick={()=>{
                    let cm=document.querySelector('#mobi');
                    let spp=document.querySelector('.sp');
                    if(cm.style.display==='block'){
                        cm.style.display='none';
                        spp.style.backgroundColor='rgb(37, 34, 34)';
                    }else{
                        cm.style.display='block';
                        spp.style.backgroundColor='black';
                        spp.style.width='30px';
                        spp.style.padding='10px';                       
                    }
                }}>|||</span>
               </Con> 
               <br/>
                 
         <PartOneBody className='pOne'>
            <h3 className="emp">Addis Employee Manegment System</h3>
          
            
             <h4 className="ttwo">Developed By Your Best
                                 Addis software Codder
                                 Belay Basa
                                 </h4>                   
            
         
            {this.banners()}
            <Images src={employeeTwo} style={{marginLeft:'600px',marginTop:'-100px'}}/>
          <div className="signUpp">
              {
              //this.signUpForMe()
              }  
            <SignUpForm className='signUp' style={{marginLeft:'950px',
                              width:'270px',height:'400px',
                              padding:'10px',
                              backgroundColor:'white',
                              marginTop:'-300px',
                              borderRadius:'10px',
                              boxShadow:'10px 5px 10px gray',
                              borderBottom:'1px solid yellow' }}>
                             Enroll with Us,chat with our employees
                          <input type='text' 
                                 name='name' 
                                placeholder="user name"
                                onChange={this.userName}
                                value={this.state.uname}/>
                                
                          <input type='text' 
                                 name='phone' 
                                 placeholder="phone"
                                 onChange={this.userPhone}
                                 value={this.state.uphone}/>
                          <input type='email' 
                                 name='email' 
                                 placeholder="email"
                                 onChange={this.userEmail}
                                 value={this.state.uemail}/>
                          <input type='password' 
                                 name='password' 
                                 placeholder="Employee Secret word"
                                 onChange={this.userPassword}
                                 value={this.state.upassword}/>
                          <UserInputField onClick={()=>{
                    //alert(this.state.uname+this.state.uphone+this.state.uemail+this.state.upassword);
                   
                    if(this.state.uname==='' || this.state.uphone==='' || this.state.uemail==='' || this.state.upassword===''){
                          alert('please all input field are required')
                   }else{
                      
                      sessionStorage.setItem('nameKey',this.state.uname);
                      sessionStorage.setItem('phoneKey',this.state.uphone);
                      sessionStorage.setItem('emailKey',this.state.uemail);
                      sessionStorage.setItem('emailKey',this.state.upassword);

                      localStorage.setItem('nameKey',this.state.uname);
                      localStorage.setItem('phoneKey',this.state.uphone);
                      localStorage.setItem('emailKey',this.state.uemail);
                      localStorage.setItem('emailKey',this.state.upassword);
                       
                         for(let n=30;n>-1200;n--){
                           setTimeout(()=>{
                               for(let m=30;m>n;m--){
                                   document.querySelector('.signUpp').style.marginTop=`${m}px`;
                                }
                           })
                        }
                        
                      //////////////////////////////
                      for(let m=-1200;m<500;m++){
                         setTimeout(()=>{
                             for(let i=-1200;i<m;i++){
                                 document.querySelector('.aEm').style.marginTop=`${i}px`;
                             }
                         });
                      }  
                      
                   }
                          }}>Sign up</UserInputField> 
                          <UserInputField onClick={()=>{
                                 for(let n=30;n>-1200;n--){
                                    setTimeout(()=>{
                                        for(let m=30;m>n;m--){
                                            document.querySelector('.signUpp').style.marginTop=`${m}px`;
                                         }
                                    })
                                 }
                                 
                               //////////////////////////////
                               for(let m=-1200;m<500;m++){
                                  setTimeout(()=>{
                                      for(let i=-1000;i<m;i++){
                                          document.querySelector('.aEm').style.marginTop=`${i}px`;
                                      }
                                  });
                               }       
                          }}>Cheak Active Employees</UserInputField>        
                        
              </SignUpForm>
        </div>
        <ActiveEmployees className='aEm' style={{
            position:'fixed',
            overflow:'scroll',
            overflowX:'hidden',
            width:'300px',
            height:'500px',
            marginLeft:'900px',
            marginTop:'-1200px'  
        }}>
           <img src={Addmin} style={{width:'50px',
                                     height:'50px',
                                     borderRadius:'20px',
                                     marginLeft:'100px'}}/>
           <h6 style={{marginLeft:'100px',
                       padding:'10px',
                       marginTop:'-10px',      
                      fontFamily:' Arial, Helvetica, sans-serif'}}>{localStorage.getItem('nameKey')}</h6><br/>
           <h6   style={{marginLeft:'80px',
                         borderBottom:'2px solid yellow',
                         marginTop:'-70px',
                         padding:'30px',   
                      fontFamily:' Arial, Helvetica, sans-serif'}}>{localStorage.getItem('phoneKey')}</h6>
          <Speek /> 
       </ActiveEmployees>   

          </PartOneBody>
          <Cmobile id='mobi'>
             <ul>
                 <li><a>home</a></li>
                 <li><a>Blogs</a></li>
                 <li><a>profile</a></li>
                 <li><a>Employee Chat room</a></li>
             </ul>
          </Cmobile>
            
          <Profile />
         </ThemeProvider>
          <div className='chatingPerformance'>
            <img src={Addmin} style={{width:'30px',height:'30px',
             borderRadius:'15px',marginLeft:'50px',borderBottom:'2px solid yellow'}}/>
            <p style={{marginTop:'-25px',marginLeft:'90px',borderBottom:'2px solid yellow'}}>public chat</p>  
              <div className="allMessage"></div>
            <div className='sendMessage'>    
                <input name='message'
                       value={this.state.chat} 
                       onChange={this.chat} 
                       placeholder='send your message...'/>
                <button onClick={()=>{
                    if(localStorage.getItem('nameKey')==='' || this.state.chat===''){
                        alert('please try to register as much as possible\n and the input field can not be empity');
                        let socket=io.connect('http://localhost:7000');
                        let info={
                            name:localStorage.getItem('nameKey'),
                            message:this.state.chat
                        }
                      // socket.emit('EmployeeChatRoom',info); 
                    }
                    else{
                        /////////////////////////////
                        let socket=io.connect('http://localhost:7000');
                        let info={
                            name:localStorage.getItem('nameKey'),
                            message:this.state.chat
                        }
                       socket.emit('EmployeeChatRoom',info);
                       socket.on('publicMessage',(data)=>{
                           //alert(data.name+data.message);
                    if(info.name===data.name && info.message===data.message){  
                           let gMess=document.querySelector('.allMessage');
                           let addpic=document.createElement('img');
                           addpic.setAttribute('src',avatar);
                           addpic.style.width='20px';
                           gMess.appendChild(addpic);

                           let mword=document.createElement('p');
                           mword.textContent=data.name;
                           mword.style.color='blue';
                           mword.style.marginLeft='30px';
                           mword.style.marginTop='-20px';
                           gMess.appendChild(mword)

                           let actMsg=document.createElement('p')
                           actMsg.textContent=data.message;
                           actMsg.style.backgroundColor='rgb(0, 153, 255)';
                           actMsg.style.width='150px';
                           actMsg.style.marginLeft='5px';
                           actMsg.style.borderRadius='10px';
                           actMsg.style.padding='15px';
                           actMsg.style.color='white';
                           gMess.appendChild(actMsg);
                         }else{
                            let gMess=document.querySelector('.allMessage');
                            let addpic=document.createElement('img');
                            addpic.setAttribute('src',avatar);
                            addpic.style.width='20px';
                            addpic.style.marginLeft='120px';
                            gMess.appendChild(addpic);
 
                            let mword=document.createElement('p');
                            mword.textContent=data.name;
                            mword.style.color='blue';
                            mword.style.marginLeft='150px';
                            mword.style.marginTop='-20px';
                            gMess.appendChild(mword)
 
                            let actMsg=document.createElement('p')
                            actMsg.textContent=data.message;
                            actMsg.style.backgroundColor='rgb(34, 155, 80)';
                            actMsg.style.width='150px';
                            actMsg.style.marginLeft='35px';
                            actMsg.style.borderRadius='10px';
                            actMsg.style.padding='15px';
                            actMsg.style.color='white';
                            gMess.appendChild(actMsg);
                         }
                       }); 
                    }
                }}>Send</button>
             </div>
          </div>
         </>
         
           )
     }
  }

export default Header