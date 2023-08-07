
import './App.css';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
    <NoteState>
   <Router>
    <Navbar/>
    <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
   </Routes>
   </Router>
   </NoteState>
</>
  )}

  export default App;