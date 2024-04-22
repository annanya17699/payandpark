import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from "react";
import background from '../../assest/background.jpg'
import { Link} from "react-router-dom";

function Sign() {
  return (
    <div style={{ backgroundImage: `url(${background})`, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form>
          <div className="flex flex-col gap-7 bg-white py-10 px-28 rounded-lg justify-center">
            <h3 className="text-blue-500 text-center">Sign Up</h3>
            <TextField id="outlined-basic" label="Fullname" type='text' InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlinedIcon />
                </InputAdornment>
              ),
            }} />
            <TextField id="outlined-basic" label="Email" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }} />
            <TextField id="outlined-password-input" label="Password" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }} />
            <div className="bg-blue-500 text-white p-2 text-center rounded-sm font-medium cursor-pointer" onClick={()=>console.log('clicked')}>
              Sign Up
            </div>
            <div className="flex gap-2 mt-2 justify-center items-center">
              <p>Already a member?</p>
             <Link to={'/login'} className="no-underline"><p className="text-blue-600">Login</p></Link> 
            </div>
          </div>
        </form>
      </div>
  )
}

export default Sign;
