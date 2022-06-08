import React from "react";
import { io } from "socket.io-client";
import { useEffect } from "react";
import Addmin from './style/images/Addmin.jpg';

let socket=io.connect('http://localhost:7000')
function SpeekWithMe(){
   useEffect(()=>{
       socket.on('frontRecv',(data)=>{
         let mp=document.querySelector('.myProfile');
         let cd=document.createElement('img');
         cd.setAttribute('src',Addmin);
         cd.width='50px';
         cd.borderRadius='20px';   
         mp.appendChild(cd);

         let pinfo=document.createElement('p');
         pinfo.style.width='80px';
         pinfo.style.marginLeft='80px';
         pinfo.style.marginTop='-80px';
         pinfo.style.borderBottom='1px solid yellow';
         pinfo.textContent=`${data.name} \n ${new Date(Date.now()).toDateString()}`;
         mp.appendChild(pinfo);
       })
   },[socket]) 
    return(<></>)
}

export default SpeekWithMe;