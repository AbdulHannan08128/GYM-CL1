import React from 'react'
import Profile from '../components/Profile'
const ProfilePage = ({currentUser}) => {
  return (
    <div><Profile name={currentUser.name} email={currentUser.email} img={currentUser.img}/></div>
  )
}

export default ProfilePage;