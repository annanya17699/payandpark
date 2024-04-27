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
import React , {useState} from 'react';
function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
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
        {
          <>
          {alert && <Alert alert={alert}/>}
          
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard showAlert={showAlert} />} />
              <Route path="/sign" element={<Sign showAlert={showAlert}/>} />
              <Route path="/login" element={<Login showAlert={showAlert}/>} />
              <Route path="/otp" element={<EmailVerification showAlert={showAlert}/>} />
            </Routes>
          </BrowserRouter>     
          </>  
        }
      </UserState>
  );
}

export default App;
