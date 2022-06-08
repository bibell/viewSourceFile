import React from 'react';
import Addmin from './style/images/Addmin.jpg';
import efile from './style/images/efile.jpg';
import efileTwo from './style/images/efileTwo.jpg';
import noty from './style/images/noty.jpg';
import remove from './style/images/remove.png';
import edit from './style/images/edit.jpg';
import { UserProfilePage,
          ProfileHeader,
          EmployeeProfileImg,
          DashBord } from './style/profile.style';

class Profile extends React.Component{
    render(){
        return(<>
          <UserProfilePage className='userProfilePage' style={{
              position:'fixed',
              width:'250px',
              marginTop:'-515px',
              marginLeft:'-500px',
              height:'530px',
              backgroundColor:'rgb(43, 43, 58)',
              overflow:'scroll',
              overflowX:'hidden',
              boxShadow:'5px 5px 10px gray',
              color:'white'
          }}>
              <ProfileHeader style={{padding:'10px',margin:'10px'}}>
              </ProfileHeader>   
                   <EmployeeProfileImg src={Addmin} style={{width:'50px',
                                                            marginLeft:'50px',
                                                            borderRadius:'20px',
                                                            padding:'10px',
                                                            color:'white'}}/><br/>
                                     Employee Name: {sessionStorage.getItem('nameKey')}
          <DashBord className='dashBord' style={{width:'30px',
                            height:'30px'}}>
            <img src={efile}/> <p>DashBord</p><br/> 
            <img src={efileTwo}/> <p>Current Location</p><br/> 
            <img src={remove}/> <p>Employees Files</p><br/> 
            <img src={edit}/> <p>Leaves</p><br/>  

            <img src={noty}/> <p>Task List</p><br/> 
            <img src={efile}/> <p>Notices</p><br/> 
            <img src={efile}/> <p>Reports</p><br/> 
            <img src={efile}/> <p>Departnment Setup</p><br/>      
        </DashBord>  

         </UserProfilePage>
        </>)
    }
}

export default Profile;