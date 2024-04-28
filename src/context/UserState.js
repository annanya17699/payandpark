import React from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const userStructure = {
    name: "",
    email: "",
    password: "",
    vehicleNumber: "",
    vehicleType: "",
    role: "User",
  };

  // eslint-disable-next-line no-sparse-arrays
  const vehicleCategory = ['2-Wheeler','3-Wheeler','4-Wheeler','Electric 2-Wheeler',,'Electric 3-Wheeler','Electric 4-Wheeler','Cycle'];
  const loginUser = async (user) => {
    const resp = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const json = await resp.json();
    if (json.success) {
      localStorage.setItem("token", json.AUTH_TOKEN);
      return json;
    } else {
      return json
    }
  };

  const generateOtp = async (email) => {
    const resp = await fetch("http://localhost:5000/api/otp/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"email" : email}),
    });
    const json = await resp.json();
    if (json.success) {
      return json;
    } else {
      return json;
    }
  };

  const signupUser = async (user,otp) => {
    const resp = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email" : user.email,
        "name" : user.name,
        "password" : user.password,
        "role" : user.role,
        "vehicleNumber": user.vehicleNumber,
        "vehicleType": user.vehicleType,
        "otp" : otp
      }),
    });
    const json = await resp.json();
    if (json.success) {
      localStorage.setItem("token", json.AUTH_TOKEN);
      return json;
    } else {
      return json;
    }
  };

  const fetchUser = async() =>{
    const resp = await fetch('http://localhost:5000/api/auth/getuser',{
      method : 'POST',
      headers : {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      } 
    });
    const json = await resp.json();
    return json
  }

  const updateUser = async(vehicleNumber, vehicleType) =>{
    const resp = await fetch('http://localhost:5000/api/auth/updateuser',{
      method : 'POST',
      headers : {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      } ,
      body: JSON.stringify({vehicleNumber, vehicleType})
    });
    const json = await resp.json();
    return json
  }

  return (
    <UserContext.Provider value={{ userStructure, loginUser, generateOtp, signupUser, vehicleCategory, fetchUser, updateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;