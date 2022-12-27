import './App.css';
import BNW from './components/BNW'
import Color from './components/Color'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar */}
        <div className = "nav"> 
          <span onselectstart = "return false" id = "name">
            <Link to = '/' className = "name">szean choi</Link>
          </span>
          <br/><br/>
          <span id = "pics">
            <Link to = '/' className = "links">b&w</Link>
            <Link to = 'color' className = "links">color</Link>
          </span>
          <br/><br/>
          <span id = "extras">
            <Link to = 'contact' className = "linkss">contact</Link>
            <a href= "https://instagram.com/szeans" target="_blank" className = "linkss">instagram</a>
            <a href="https://github.com/szeans" target="_blank" className = "linkss">github</a>
            <a href="https://soundcloud.com/szean" target="_blank" className = "linkss">soundcloud</a>
            <a href = "https://mega.nz/folder/rt0k0ZzC#10vGO_SSVE_y0JWA4Ygxwg" target="_blank" className = "linkss">archives (via MEGA)</a>
          </span>
        </div>

        <Routes className= "other">
          <Route path = "/" element = {<BNW/>}/>
          <Route path = "color" element = {<Color/>}/>
          <Route path = "contact" element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
