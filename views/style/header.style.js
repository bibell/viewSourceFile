import styled from 'styled-components';

export const HeaderStyle=styled.div`
    background-color:rgb(58, 47, 47);
    color:white;
    padding:10px;
    padding-left:100px;
    @media(max-width:700px){
       font-size:10px;
    }
    
   
`

export const Con=styled.div`
 
  background-color:rgb(58, 47, 47);
  margin-top:-50px;
  color:white;
  padding-left:600px;
  
  ul li{
      color:yellow;
      float:left;
      list-style:none;
      padding:20px;
      margin-top:-30px;
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
      cursor:pointer;
  }

  ul li:hover{
      background-color:rgb(37, 31, 31);
      cursor:pointer;
  }
  
   @media(max-width:1100px){
       padding-left:300px;
   }
  @media(max-width:800px){
      font-size:10px;
      padding-left:200px;
      ul li{
        display:none;
    }
  }
  
  span{
    font-size:30px;
    margin-left:450px;
    cursor:pointer;
    display:none;
    &:hover{
        background-color:rgb(22, 16, 16);
        color:white;
        width:20px;
        padding:5px;
    }
    @media(max-width:800px){
      display:block;
     } 
    @media(max-width:700px){
        margin-left:350px;
    } 
    @media(max-width:600px){
        margin-left:250px;
    }
    @media(max-width:500px){
        margin-left:100px;
    }
    
} 

`
export const Cmobile=styled.div`
   position:fixed;
   width:150px;
   background-color:rgb(20, 14, 14);
   color:white;
   margin-left:550px;
   margin-top:-130px;
   padding:10px;
   height:300px;
   display:none;
   ul li{
      margin-left:-50px;
      padding-left:50px;
      height:40px;
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
      padding:0px;
      border-bottom:2px solid yellow;
      list-style:none;
      cursor:pointer;  
    }
  ul li:hover{
      background-color:black;
      color:white;
  }
  @media(max-width:700px){
      margin-left:400px;
  }
  @media(max-width:600px){
      margin-left:300px;
  }
  @media(max-width:500px){
      margin-left:200px;
  }
  @media(max-width:400px){
      margin-left:100px;
  }
   
`

export const PartOneBody=styled.div`
  background-color:#ebfbff;
  width:${window.innerWidth};
  height:500px;
  p{  
    background-color:black;
    color:black;
    width:10px;
    height:10px;
  }
  h3{ position:absolute;
      background-color:rgb(0, 195, 255);
      color:white;
      padding:10px;
     margin-left:-350x;
      margin-top:200px;
      width:200px;
      border:none;
      border-radius:20px;
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
      cursor:pointer;
  }
  h3:hover{
      background-color:yellow;
      color:black;
      cursor:pointer;
  }
  h4{
      margin-left:-300px;
      padding-top:100px;
      width:200px;
      line-height:30px;
      color:black;
      font-family:Arial, Helvetica, sans-serif;
  }
  div{
      margin-top:30px;
  }
  input{
      padding:10px;
      margin:10px;
  }
  button{
      background-color:rgb(55, 602, 502);
      color:white;
      padding:10px;
      margin:10px;
      border:2px solid yellow;
      border-radius:10px;
      cursor:pointer;
  }
  button:hover{
      background-color:yellow;
      color:black;
  }
  .chatOne h5{
      margin-left:70px;
      margin-top:-40px;
  }

`
export const Images=styled.img`
  width:300px;
  height:300px'
  padding-left:500px;
  margin-top:-300px;
`

export const SignUpForm=styled.div`
    h2{
        color:rgb(97, 89, 89);
       margin-left:100px;
        width:300px;
       font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    
  `

 