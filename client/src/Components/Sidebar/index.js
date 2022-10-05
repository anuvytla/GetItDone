import './index.css';
import { useState } from 'react'
import Logo from '../../assets/images/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faBell,
  faSquareCheck,
  faDollarSign,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div>
            <div className='nav-bar'>
                <Link 
                    className="logo"
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <img src={Logo} alt="Logo" />
                    <h6>get it done</h6>
                </Link>

                <nav className={showNav ? 'mobile-show' : ''}>
                    <NavLink 
                        exact="true"
                        activeclassname="active"
                        to="/dashboard"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faHouse} color="#4d4d4e" />
                    </NavLink>

                    <NavLink 
                        exact="true"
                        activeclassname="active"
                        className="about-link"
                        to="/about"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faCircleInfo} color="#4d4d4e" />
                    </NavLink>

                    <NavLink 
                        exact="true"
                        activeclassname="active"
                        className="task-link"
                        to="/"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faSquareCheck} color="#4d4d4e" />
                    </NavLink>

                    <NavLink 
                        exact="true"
                        activeclassname="active"
                        className="notification-link"
                        to="/notifications"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faBell} color="#4d4d4e" />
                    </NavLink>

                    <NavLink 
                        exact="true"
                        activeclassname="active"
                        className="donation-link"
                        to="/donation"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faDollarSign} color="#4d4d4e" />
                        
                    </NavLink>

            
                </nav>
            </div>
            <Outlet/>
        </div>
    )
}

export default Sidebar;