import { TextField, MenuItem } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React , { useState , useContext } from "react";
import background from '../assets/Background.png'
import { Link , useNavigate} from "react-router-dom";
import UserContext from "../context/UserContext";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ReorderIcon from '@mui/icons-material/Reorder';
import Navbar from "./Navbar";

function Sign(props) {
  const context = useContext(UserContext);
  const {userStructure, vehicleCategory} = context;
  const navigate = useNavigate();
  const [user, setUser] = useState(userStructure);
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }
  const handleSignup = async (event) => {
    event.preventDefault()
    navigate('/otp', { state: { user: user } });
  }
  return (
    <div style={{ backgroundImage: `url(${background})`, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Navbar />
      <form>
        <div className="flex flex-col gap-7 bg-white py-10 px-28 rounded-lg justify-center">
          <h3 className="text-green-700 text-center">Sign Up</h3>
          <TextField id="outlined-basic" color="success" onChange={handleChange} name="name" label="Fullname" type='text' InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlinedIcon />
              </InputAdornment>
            ),
          }} />
          <TextField id="outlined-basic" label="Email" color="success" onChange={handleChange} name="email" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }} />
          <TextField id="outlined-password-input" label="Password" color="success" onChange={handleChange} name="password" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon /> 
              </InputAdornment>
            ),
          }} />
          <TextField id="outlined-basic" color="success" onChange={handleChange} name="vehicleType" label="Vehicle Category" select type='text' InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ReorderIcon />
              </InputAdornment>
            ),
          }} >
            {vehicleCategory && vehicleCategory.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
          </TextField>
          <TextField id="outlined-basic" color="success" onChange={handleChange} name="vehicleNumber" label="Vehicle Number" type='text' InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TwoWheelerIcon />
              </InputAdornment>
            ),
          }} />
          <div className="bg-green-700 text-white p-2 text-center rounded-sm font-medium cursor-pointer" onClick={(e) => handleSignup(e)}>
              Sign Up
          </div>
          <div className="flex gap-2 mt-2 justify-center items-center">
            <p>Already a member?</p>
            <Link to={'/login'} className="no-underline"><p className="text-green-700">Login</p></Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Sign;
