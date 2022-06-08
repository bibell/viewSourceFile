import React from 'react';
import { useEffect } from 'react';


function Move(){
    useEffect(()=>{
        let one=document.querySelector('.move');
        //one.style.marginLeft='500px'
      for(let j=0;j<=window.innerWidth;j++){ 
        setTimeout(()=>{
            for(let i=0;i<j;i++){
              one.style.marginLeft=`${i}px`;
              if(i===820){
                  //console.log(i)
                let cc=document.querySelector('.four');
                cc.style.display='block';
            }
            else if(i===1200){
                let dd=document.querySelector('.profile');
                dd.style.display='block';
            }
            else if(i===1250){
                one.remove();
            }
               }
        },2000);
        
      }

      //let ckone=document.createElement('img');

    })
 return(<div></div>)
}

export default Move;