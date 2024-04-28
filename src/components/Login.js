import { TextField, IconButton } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import '../App.css'

export default function Login(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
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
        <div className="flex justify-center items-center">
            <form>
                <div className="flex flex-col gap-10 mt-28 bg-white py-10 px-20 rounded-lg justify-center">
                    <h3 className="text-green-700 text-center">Login</h3>
                    <TextField id="outlined-basic" name="email" label="Email" color="success" value={user.email} onChange={handleChange} InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }} />
                    <TextField id="outlined-password-input" name="password" label="Password" color="success" value={user.password} type={open ? 'text' : 'password'} onChange={handleChange} InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOutlinedIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleOpen}>
                            {!open ? <Visibility /> : <VisibilityOff/> }
                            </IconButton>
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