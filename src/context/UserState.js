import React from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const userStructure = {
    name: "",
    email: "",
    password: "",
    vehicleNumber: "",
    vehicleType: "",
    role: "",
  };


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

  return (
    <UserContext.Provider value={{ userStructure, loginUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;