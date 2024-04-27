import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState, useContext } from "react";
import background from '../assets/Background.png'
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Navbar from "./Navbar";

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
            props.showAlert('Login Successful','success')
            navigate('/');
        }else{
            props.showAlert('Login Failed','danger')
        }
    }
    return (
        <div style={{ backgroundImage: `url(${background})`, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Navbar/>
            <form>
                <div className="flex flex-col gap-10 bg-white py-10 px-20 rounded-lg justify-center">
                    <h3 className="text-green-700 text-center">Login</h3>
                    <TextField id="outlined-basic" name="email" label="Email" color="success" onChange={handleChange} InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }} />
                    <TextField id="outlined-password-input" name="password" label="Password" color="success" onChange={handleChange} InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}/>
                    <div className="bg-green-700 text-white p-2 text-center rounded-sm font-medium cursor-pointer" onClick={(e) => handleLogin(e)}>
                        Login
                    </div>
                    <div className="flex gap-2 mt-2 justify-center items-center">
                        <p>Not a member?</p>
                        <Link to={'/sign'} className="no-underline"><p className="text-green-700">Sign Up</p></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}