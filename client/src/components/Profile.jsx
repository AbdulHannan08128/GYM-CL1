import React from 'react';
import { Avatar, Card, CardContent, Typography } from '@mui/material';
import ChangePassword from './ChangePassword'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from '../utils/Images/AuthImage.jpg'



const UserProfile = ({name,email,img}) => {
  return (
    <div className='overflow-scroll'>

    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-10 overflow-scroll">
      <Card className="max-w-4xl w-full shadow-lg rounded-lg overflow-scroll  pb-10">
        <div className="relative">
          <img
            src={Image}
            alt="Background"
            className="w-full h-60 object-cover"
            />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <label htmlFor="photo">
            {img?(
            <Avatar
              alt={'PROFILE'}
              src="#"
              className=" min-w-36 min-h-36 border-4 border-white bg-slate-400"
              
            />
            ): <Avatar
            alt={'PROFILE'}
            src="#"
            className=" min-w-36 min-h-36 border-4 border-white cursor-pointer"
            
          >
            

            <AccountCircleIcon className=" min-w-36 min-h-36 border-4 border-white"/>
            </Avatar>}
            </label>
            <input type="file" id='photo' className='w-0 h-0' style={{visibility:'hidden'}}/>

          </div>
        </div>
        <div className="overflow-auto">
          <CardContent className="text-center">
            <Typography variant="h4" component="div">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary" className="mt-2 mb-4 relative">
              <span className=' bg-slate-100 p-2 rounded-md'>
              {email}
              </span>
            </Typography>
            {/* <Button variant="contained" className="w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white my-10 relative top-5">
              CHANGE PASSWORD
            </Button> */}
            <span className='relative top-5'>
            <ChangePassword/>
            </span>
            
          </CardContent>
        </div>
      </Card>
    </div>
              </div>
  );
};

export default UserProfile;
