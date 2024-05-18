import { TextField, MenuItem, IconButton } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React , { useState , useContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import UserContext from "../context/UserContext";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import '../App.css';

function Sign(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
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
    <div className="flex justify-center items-center">
      <form>
        <div className="flex flex-col gap-4 mt-20 bg-white py-10 px-28 rounded-lg justify-center">
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
          <TextField id="outlined-password-input" label="Password" color="success" onChange={handleChange} name="password" type={open ? 'text' : 'password'} InputProps={{
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
          }} />
          <TextField id="outlined-basic" color="success" onChange={handleChange} name="vehicleType" label="Vehicle Category" select InputProps={{
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
