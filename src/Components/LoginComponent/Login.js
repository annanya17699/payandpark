import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from "react";
import background from '../../assest/background.jpg'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div style={{ backgroundImage: `url(${background})`, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form>
                <div className="flex flex-col gap-10 bg-white py-10 px-28 rounded-lg justify-center">
                    <h3 className="text-blue-500 text-center">Login</h3>
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
                    }}/>
                    <div className="bg-blue-500 text-white p-2 text-center rounded-sm font-medium cursor-pointer" onClick={() => console.log('clicked')}>
                        Sign Up
                    </div>
                    <div className="flex gap-2 mt-2 justify-center items-center">
                        <p>Not a member?</p>
                        <Link to={'/sign'} className="no-underline"><p className="text-blue-600">Sign Up</p></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}