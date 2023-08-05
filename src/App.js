
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 
} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
   </Routes>
   </Router>
</>
  )}

  export default App;