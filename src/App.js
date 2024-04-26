import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import './App.css';
import './style.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sign from './components/Sign';
import Login from './components/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Dashboard />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
