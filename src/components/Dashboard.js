import React from "react";
import Navbar from "./Navbar";
import backgroundImage from "../assets/Background.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold text-white">
            <Navbar/>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
