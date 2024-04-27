import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import UserContext from "../context/UserContext";
import Navbar from "./Navbar";
import background from '../assets/Background.png'

function EmailVerification(props) {
    const location = useLocation();
    const context = useContext(UserContext);
    const {userStructure, generateOtp, signupUser} = context;
    const navigate = useNavigate();
    const [user, setUser] = useState(userStructure);
    const [otp, setOtp] = useState('')
    const [generateOTP, setGenerateOTP] = useState(false)
    const handleChange = (event) => {
        setOtp(event.target.value);
      }
      const handleSignup = async (event) => {
        event.preventDefault()
        var resp = await signupUser(user, otp);
        if(resp.success){
            props.showAlert('Sign Up Successful','success')
            navigate('/');
        }else{
            props.showAlert('Sign Up Failed','danger')
        }
            
      }
    useEffect(() => {
    if(location && location.state && location.state.user){
        setUser(location.state.user);
    }
    }, [location]);
    
    const generateOtpHandler = async() => {
        var resp = await generateOtp(user.email);
        if(resp.success){
            setGenerateOTP(true)
            props.showAlert(`OTP sent to Email : ${user.email}`,'success')
        }else{
            props.showAlert(resp.message,'success')
        }
    }

  return (
    <div style={{ backgroundImage: `url(${background})`, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Navbar />
        <form>
            <div className="flex flex-col gap-7 bg-white py-10 px-28 rounded-lg justify-center">
              <h3 className="text-green-700 text-center">Email Verification</h3>
              <TextField id="outlined-basic" label="Email" name='email' value={user.email} disabled color="success" InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }} />
              { !generateOTP ?
              <div className="bg-green-700 text-white p-2 text-center rounded-sm font-medium cursor-pointer" onClick={() => generateOtpHandler()}>
                  Generate OTP
              </div> : 
              <>
              <TextField id="outlined-password-input" label="OTP" value={otp} onChange={handleChange} name="otp" error={otp.length !== 6}
                type="number" maxLength={6} minLength={6} color="success"
               InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon /> 
                  </InputAdornment>
                ),
              }} />
              <div className="bg-green-700 text-white p-2 text-center rounded-sm font-medium cursor-pointer" onClick={(e) => handleSignup(e)}>
                  Verify OTP
              </div>
              <div className="flex gap-2 mt-2 justify-center items-center">
                <p>Already a member?</p>
                <Link to={'/login'} className="no-underline"><p className="text-green-700">Login</p></Link>
              </div>
              </>
                }
            </div>
          </form>
          </div>
  )
}

export default EmailVerification
