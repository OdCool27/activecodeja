import '/src/index.css';
import {useNavigate} from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    return(
        <section id="hero-section">
            <h1>Upgrade Your Business</h1>
            <p>In today's digital world, your online presence defines your business. We create innovative technological
                solutions that help businesses grow, engage customers, and stay ahead in a rapidly evolving landscape.</p>
            <div className="hero-btn-container">
                <button className="get-started-btn" onClick={()=>navigate("/client-intake")}>Get Started</button>
                <button className="portfolio-btn" onClick={()=>navigate("/portfolio")}>View Portfolio</button>
            </div>
        </section>
    );
}

export default Hero;