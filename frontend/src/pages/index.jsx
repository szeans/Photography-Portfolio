import './index.css';
import { Link, NavLink } from 'react-router-dom';

export function Index() {
  return (
    <div className="App">
        {/* Navbar */}
        <div className = "nav"> 
          <span onselectstart = "return false" id = "name">
            <Link to = '/' className = "name">szean choi</Link>
          </span>
          <br/><br/>
          <span id = "pics">
            <NavLink to = '/bnw' className = "links">b&w</NavLink>
            <NavLink to = '/color' className = "links">color</NavLink>
            <NavLink to = '/archive' className = "links">archive</NavLink>
          </span>
          <br/><br/>
          <span id = "extras">
            <NavLink to = '/contact' className = "linkss">contact</NavLink>
            <a href= "https://instagram.com/szeans" target="_blank" className = "linkss">instagram</a>
            <a href="https://github.com/szeans" target="_blank" className = "linkss">github</a>
            <a href="https://soundcloud.com/szean" target="_blank" className = "linkss">soundcloud</a>
          </span>
        </div>
    </div>
  );

}