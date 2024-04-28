import { IconButton, TextField, MenuItem, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import React, { useState, useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ReorderIcon from "@mui/icons-material/Reorder";
import EditIcon from "@mui/icons-material/Edit";
import { NumbersOutlined } from "@mui/icons-material";
import "../App.css";

function UserDetails(props) {
  const [edit, setEdit] = useState(false);
  const [password, setPassword] = useState({
    otp: null,
    password: null,
  });
  const context = useContext(UserContext);
  const { userStructure, fetchUser, updateUser, vehicleCategory } = context;
  const [loggedUser, setLoggedUser] = useState(userStructure);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchUserDetails();
    }
  }, []);

  const fetchUserDetails = async () => {
    const json = await fetchUser();
    if (json.error) {
      props.showAlert("Something went wrong", "danger");
    } else setLoggedUser(json);
  };

  const resetData = async () => {
    setEdit(false);
    const res = await updateUser(
      loggedUser.vehicleNumber,
      loggedUser.vehicleType
    );
    if (res.error) {
      props.showAlert("Something went wrong", "danger");
    } else {
      props.showAlert("Update Successful", "success");
      setLoggedUser(res);
    }
  };
  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (event) => {
    setLoggedUser({ ...loggedUser, [event.target.name]: event.target.value });
  };

  const handlePassChange = (event) => {
    setPassword({ ...password, [event.target.name]: event.target.value });
  };
  return (
    <>
      {!open && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-10 mt-28 bg-white py-10 px-20 rounded-lg justify-center">
            <h3 className="text-green-700 text-center">User Details</h3>
            <TextField
              id="outlined-basic"
              label="Full Name"
              name="name"
              disabled
              color="success"
              value={loggedUser.name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              type="email"
              disabled
              color="success"
              value={loggedUser.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-basic"
              label="Vehicle Type"
              name="vehicleType"
              disabled={!edit}
              color="success"
              select
              value={loggedUser.vehicleType}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ReorderIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleEdit}>
                      <EditIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            >
              {vehicleCategory &&
                vehicleCategory.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </TextField>
            <TextField
              id="outlined-basic"
              label="Vehicle Number"
              name="vehicleNumber"
              disabled={!edit}
              color="success"
              value={loggedUser.vehicleNumber}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TwoWheelerIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleEdit}>
                      <EditIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {edit && (
              <div
                className="bg-green-700 text-white p-2 text-center rounded-sm font-medium cursor-pointer"
                onClick={(e) => resetData(e)}
              >
                Save Changes
              </div>
            )}
            {!edit && (
              <div
                className="flex gap-2 mt-2 justify-center items-center cursor-pointer"
                onClick={handleOpen}
              >
                <p className="text-green-500">Reset Password</p>
              </div>
            )}
          </div>
        </div>
      )}
      {open && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-10 mt-28 bg-white py-10 px-20 rounded-lg justify-center">
          <h3 className="text-green-700 text-center text-lg">Reset Password</h3>
            <TextField
              id="outlined-basic"
              label="New Password"
              name="password"
              color="success"
              value={password.password}
              onChange={handlePassChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-basic"
              label="OTP"
              name="otp"
              color="success"
              value={password.otp}
              onChange={handlePassChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NumbersOutlined />
                  </InputAdornment>
                ),
              }}
            />
            <div className="bg-green-700 text-white p-2 text-center rounded-sm font-medium cursor-pointer">
              Update Password
            </div>
            <div className="flex gap-2 mt-2 justify-center items-center cursor-pointer">
              <p className="text-green-500" onClick={handleClose}>
                Cancel
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserDetails;
