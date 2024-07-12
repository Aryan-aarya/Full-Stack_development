import "./App.css";
import { NavLink, Route,Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Labs from './components/Labs';
import Support from './components/Support';
import Notfound from './components/Notfound';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/labs" element={<Labs/>}/>
        <Route path="*" element={<Notfound/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
