
import './App.css';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
    <NoteState>
   <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
   </Routes>
   </Router>
   </NoteState>
</>
  )}

  export default App;