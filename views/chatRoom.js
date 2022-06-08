import React from 'react';
import io from 'socket.io-client';
import { useEffect } from 'react';
import amd from './style/images/amd.jpg';
let socket=io.connect('http://localhost:7000');
function Speek(){
    let info={
        name:sessionStorage.getItem('nameKey'),
        phone:sessionStorage.getItem('phoneKey'),
    }  
   
   
    
    useEffect(()=>{ 
        socket.emit('userInfoToTheSever',info);  
    //else{
        socket.on('frontRecv',(data)=>{
            let ccone=document.querySelector('.chatOne');
            let elmm=document.createElement('img');
                elmm.setAttribute('src',amd);
                elmm.style.width='50px';
                elmm.style.marginLeft='20px';
                ccone.appendChild(elmm);

            let elm=document.createElement('h5');
            elm.textContent=`${data.name}\n ${new Date(Date.now()).toDateString()}`;
            elm.style.width='100px';
            elm.style.color='black';
            ccone.appendChild(elm);

        })
    //}
    },[socket])
    return(<div className='publicChatRoom'>
        <h5 style={{marginLeft:'50px',width:'100px',color:'violet',borderBottom:'2px solid yellow'}}>active persones</h5>
        <div className='chatOne'>
            
        </div>
    </div>)
}

export default Speek;
