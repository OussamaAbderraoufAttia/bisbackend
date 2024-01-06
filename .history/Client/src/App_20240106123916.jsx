import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import {Bis} from './pages/Bis';

function App() {
  return (
    <Router>
       
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Addpatient" element={<Addpatient/>} />
          <Route path="/Bis" element={<Bis/>} />
        </Routes>
        
    </Router>
  );
}

export default App;
