import '/src/index.css';
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function Hero() {
    const [ref, isVisible] = useInView();
    const navigate = useNavigate();

    const images = [
        "assets/index_bkg (1).jpg",
        "assets/index_bkg (2).jpg",
        "assets/index_bkg (3).jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 5000); // change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero-section"
            ref={ref}
            className={`${isVisible ? "bg-fade-in" : ""}`}
        >
            {/* Background Slides */}
            <div className="hero-background">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentIndex ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>

            {/* Overlay */}
            <div className="hero-overlay" />

            {/* Content */}
            <div className="hero-content">
                <h1>Upgrade Your Business</h1>
                <p>
                    In today's digital world, your online presence defines your business.
                    We create innovative technological solutions that help businesses grow,
                    engage customers, and stay ahead in a rapidly evolving landscape.
                </p>

                <div className="hero-btn-container">
                    <button
                        className="get-started-btn"
                        onClick={() => navigate("/client-intake")}
                    >
                        Get Started
                    </button>

                    <button
                        className="portfolio-btn"
                        onClick={() => navigate("/portfolio")}
                    >
                        View Portfolio
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
