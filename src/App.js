import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './ProductPages/Home';
import About from './ProductPages/About';
import './App.css';
import Cart from "./ProductPages/Cart";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
