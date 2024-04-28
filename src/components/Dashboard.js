import React from "react";
import Footer from "./Footer";
import '../App.css'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    if(localStorage.getItem('token')){
      navigate('/parking');
    }else{
      navigate('/login')
    }
  }
  return (
    <div className="dashboard">
      <div
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
      >
        <div
          className="glass-effect p-8 rounded-lg text-center "
          style={{ width: "50%" }}
        >
          <h1 className="font-BlueberryRegular text-6xl p-2 text-white">
            Pay&Park
          </h1>
          <p className="text-3xl text-white mb-8 ">
            Parking Made Easy
            <br />
            Pay and park with ease.
            <br />
            Start your stress-free parking journey today.
          </p>
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 mt-2 rounded-full " onClick={handleClick}>
          Search for spot
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;