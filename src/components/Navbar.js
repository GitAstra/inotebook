import React , {useEffect} from 'react'
import { Link, useLocation,} from 'react-router-dom'

export default function Navbar() {
    let location = useLocation();  


  return (
      <div className="navbar">
            
            <div className="logo">
                <h4>iNotebook</h4>
            </div>
            <ul className="nav">
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            </ul>
        </div>
  )
}
