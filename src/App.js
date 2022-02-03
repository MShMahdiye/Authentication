import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";
import Setting from "./Pages/Setting";
import RequiredAuth from "./RequiredAuth";

function App() {
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:'20px'}}>  
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/setting" element={<RequiredAuth><Setting /></RequiredAuth>}/>
        <Route path="/dashboard" element={<RequiredAuth><Dashboard /></RequiredAuth>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
