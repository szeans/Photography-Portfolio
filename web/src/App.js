import './App.css';
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar */}
        <div className = "nav"> 
          <span onselectstart = "return false" id = "name">szean choi</span>
          <span id = "pics">
            <Link to = '/' className = "links">b&w</Link>
            <Link to = 'about' className = "links">color</Link>
          </span>
          <span id = "extras">
            <Link to = '/' className = "links">contact</Link>
            <a href= "https://instagram.com/szeans" target="_blank" className = "links">instagram</a>
            <a href="https://github.com/szeans" target="_blank" className = "links">github</a>
            <a href="https://soundcloud.com/szean" target="_blank" className = "links">soundcloud</a>
          </span>
        </div>

        <Routes className= "other">
          <Route path = "/" element = {<Home/>}/>
          <Route path = "about" element = {<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
