import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState, useContext } from "react";
import background from '../assets/Background.png'
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Login(props) {
    const context = useContext(UserContext);
    const {userStructure, loginUser} = context;
    const navigate = useNavigate();
    const [user, setUser] = useState(userStructure);
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }
    const handleLogin = async (event) => {
        event.preventDefault()
        var resp = await loginUser(user);

        if(resp.success){
            navigate('/');
        }else{
            alert("Login failed")
        }
    }
    return (
        <div style={{ backgroundImage: `url(${background})`, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form>
                <div className="flex flex-col gap-10 bg-white py-10 px-28 rounded-lg justify-center">
                    <h3 className="text-blue-500 text-center">Login</h3>
                    <TextField id="outlined-basic" name="email" label="Email" onChange={handleChange} InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }} />
                    <TextField id="outlined-password-input" name="password" label="Password" onChange={handleChange} InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}/>
                    <div className="bg-blue-500 text-white p-2 text-center rounded-sm font-medium cursor-pointer" onClick={(e) => handleLogin(e)}>
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