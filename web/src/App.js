import './App.css';
import Archive from './components/Archive'
import BNW from './components/BNW'
import Color from './components/Color'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

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
            <NavLink to = 'bnw' className = "links">b&w</NavLink>
            <NavLink to = 'color' className = "links">color</NavLink>
            <NavLink to = 'archive' className = "links">archive</NavLink>
          </span>
          <br/><br/>
          <span id = "extras">
            <NavLink to = 'contact' className = "linkss">contact</NavLink>
            <a href= "https://instagram.com/szeans" target="_blank" className = "linkss">instagram</a>
            <a href="https://github.com/szeans" target="_blank" className = "linkss">github</a>
            <a href="https://soundcloud.com/szean" target="_blank" className = "linkss">soundcloud</a>
          </span>
        </div>

        <Routes className= "other">
          <Route path = "/" element = {<BNW/>}/>
          <Route path = "bnw" element = {<BNW/>}/>
          <Route path = "color" element = {<Color/>}/>
          <Route path = "archive" element = {<Archive/>}/>
          <Route path = "contact" element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
