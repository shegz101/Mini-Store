import React, {useState} from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClear } from 'react-icons/md';
import { useStateValue } from "../CartPath/CartContext";

const Header = () => {
  const { cartObject } = useStateValue();
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(false);
    return ( 
        <div className="Header-section">
            <div>
              <div className="nav-div">
                <p onClick={() => setShowNav(!showNav)} className="nav-icon">
                  {
                    showNav !== true ? <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/> : <MdClear className="clear-nav" onClick={() => setShowNav(!showNav)}/>
                  }
                </p>
                <p className="product-name">Products</p>
              </div>
              <div className="resp-nav">
                {
                  showNav && (
                <nav className="nav-link">
                   <Link to="/" style={{textDecoration: 'none'}}><p>Home</p></Link>
                   <Link to="/about" style={{textDecoration: 'none'}}><p>About</p></Link>
                </nav>
                  )
                }
              </div>
            </div>

            <nav className="nav-links">
              <Link to="/" style={{textDecoration: 'none'}}><p>Home</p></Link>
              <Link to="/about" style={{textDecoration: 'none'}}><p>About</p></Link>
            </nav>
            
            <div>
              <Link to="/cart"><p onClick={() => setToggle(!toggle)} className="cart-icon"><BsCartPlusFill/></p></Link>
              <div className="cart-item"><span>{cartObject?.length}</span></div>
            </div>
        </div>
     );
}
 
export default Header;