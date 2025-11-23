import '/src/index.css'
import headerLogo from '../assets/namedLogo.png'
import {useState} from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";


function Header() {

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);
    const toggleDropdownMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <header>
                <Link to="/"><img id="header-logo" src={headerLogo} alt="logo"/></Link>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <button className="get-started-btn" onClick={()=>navigate("/client-intake")}>Get Started</button>
                <div className={`hamburger-menu ${isActive ? "active" : ""}`} onClick={toggleDropdownMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </header>
            <div className={`dropdown-menu ${isActive ? "active" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </>

    );
}

export default Header;