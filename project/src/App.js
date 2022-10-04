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
          <span id = "name">szean.</span>

          <span id = "linkspan">
            <Link to = '/' className = "links">home</Link>
            <Link to = 'about' className = "links">about</Link>
          </span>
        </div>

        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "about" element = {<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
