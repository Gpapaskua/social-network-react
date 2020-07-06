import React  from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) =>{
    return <div>  
    <div className={s.profileImage}>
    <img src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" id={s.avatar} alt="eroor"/>
  </div>
  <div className={s.descriptionBlock}>
      <h4>This is Description</h4>
  </div>
  </div>

    
}
export default ProfileInfo;