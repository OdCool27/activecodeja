import footerLogo from '../assets/footerLogo.png'
import instagramLogo from '../assets/instagram_logo.svg'
import githubLogo from '../assets/github_logo.svg'
import linkedinLogo from '../assets/linkedin_logo.svg'
import {Link} from "react-router-dom";

function Footer() {

    const Year = new Date().getFullYear();

    return(
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-column">
                        <img id="footer-logo" src={footerLogo} alt="logo" onClick={() => window.location.href = '/'}/>
                        <p>Empowering Jamaican and Caribbean businesses with innovative tech solutions.</p>
                        <div className="footer-socials">
                            <img src={instagramLogo} className="social-icon" alt="instagram logo" onClick={() => window.open('https://www.instagram.com/activecodeja/')}/>
                            <img src={linkedinLogo} className="social-icon" alt="linkedin logo" onClick={() => window.open('https://www.linkedin.com/company/activecodeja/')}/>
                            <img src={githubLogo} className="social-icon" alt="github logo" onClick={() => window.open('https://github.com/ActiveCodeJa')}/>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/porfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>SERVICES</h4>
                        <ul>
                            <li><Link to="/services#brand-design">Brand Design</Link></li>
                            <li><Link to="/services#web-development">Web Development</Link></li>
                            <li><Link to="/services#mobile-development">Mobile Development</Link></li>
                            <li><Link to="/services#ai-integration">AI Integration</Link></li>
                            <li><Link to="/services#saas">SAAS</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>CONTACT</h4>
                        <ul>
                            <li><a href="mailto:activecodeja@hotmail.com">activecodeja@hotmail.com</a></li>
                            <li><a href="https://wa.me/18765686030">WhatsApp</a></li>

                        </ul>
                    </div>
                </div>
                <p id="copyright">©{Year} Active Code Ja. All rights reserved.</p>
                
            </footer>
        </>
    );
}

export default Footer;