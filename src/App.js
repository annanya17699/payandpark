import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sign from './Components/SignComponent/Sign';
import Login from './Components/LoginComponent/Login'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/sign' element={<Sign />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
