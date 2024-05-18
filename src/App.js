import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import "./App.css";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./components/Sign";
import Login from "./components/Login";
import UserState from "./context/UserState";
import EmailVerification from "./components/EmailVerification";
import Alert from "./components/Alert";
import React, { useState } from 'react';
import ParkingDetail from "./components/ParkingDetail";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import Building from "./components/Building";
import BuildingState from "./context/BuildingState";
import Footer from "./components/Footer";
function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <UserState>
      <BuildingState>
      {
        <>
          {alert && <Alert alert={alert} />}

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<>
              <Navbar/>
              <Dashboard showAlert={showAlert} />
              </>} />
              <Route path="/sign" element={
                <>
                <Navbar/>
                 <Sign showAlert={showAlert} />
                </>
              }/>
              <Route path="/login" element={
              <>
              <Navbar/>
              <Login showAlert={showAlert} />
              </>
              } />
              <Route path="/otp" element={
                <>
                <Navbar/>
                <EmailVerification showAlert={showAlert} />
                </>
              } />
              <Route path="/parking" element={
                <>
                <Navbar/>
                <ParkingDetail showAlert={showAlert} />
                </>
              } />
              <Route path="/user" element={
                <>
                <Navbar/>
                <UserDetails showAlert={showAlert} />
                </>
              } />
              <Route path="/building" element={
                <>
                <Navbar/>
                <Building showAlert={showAlert} />
                </>
              } />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </>
      }
      </BuildingState>
    </UserState>
  );
}

export default App;
