import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
<<<<<<< HEAD
import  {Addpatient }  from './pages/Addpatient';
import {Bis} from './pages/Bis';
=======
import Signup from './pages/signup';
import Addpatient from './pages/Addpatient';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Listpatient from './pages/Listpatient'
import Diagnosis from './pages/diagnosis';
>>>>>>> 579c76a1674d66b2e209f63705489e141e4a8e5c

function App() {
  return (
    <Router>
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Addpatient" element={<Addpatient/>} />
<<<<<<< HEAD
          <Route path="/Bis" element={<Bis/>} />
=======
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Listpatient" element={<Listpatient/>} />
          <Route path="/Diagnosis" element={<Diagnosis/>} />
          
          
          
>>>>>>> 579c76a1674d66b2e209f63705489e141e4a8e5c
        </Routes>
        
    </Router>
  );
}

export default App;
