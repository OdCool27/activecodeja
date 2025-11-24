import {Link} from "react-router-dom";
import modernDesign from '../assets/ux-ui-design.png'
import development from '../assets/development.png'
import maintenance from '../assets/maintenance.png'
import {useInView} from "./useInView.jsx";

function WhatDoWeOffer() {
    const [ref, isVisible] = useInView();
    return(
        <>
            <section id="what-do-we-offer" ref={ref} className={`${isVisible ? "bg-fade-in" : ""}`}>
                <h2>What Do We Offer?</h2>
                <p>We provide a comprehensively tailored web solutions for your business needs.</p>

                <div className={`card-container ${isVisible ? "content-rise" : ""}`}>
                    <div className="card">
                        <div className="card-heading">
                            <img src={modernDesign} alt="modern design"/>
                            <h3>Modern Designs</h3>
                        </div>
                        <p>Beautiful, responsive websites that captivate your audience and drive engagement across all devices.</p>
                    </div>

                    <div className="card">
                        <div className="card-heading">
                            <img src={development} alt="business driven tech"/>
                            <h3>Business-Driven Tech</h3>
                        </div>
                        <p>Smart technology solutions that solve real business problems and drive measurable growth.</p>
                    </div>

                    <div className="card">
                        <div className="card-heading">
                            <img src={maintenance} alt="maintenance & support"/>
                            <h3>Maintenance & Support</h3>
                        </div>
                        <p>Reliable ongoing support to keep your digital presence running smoothly and securely.</p>
                    </div>
                </div>

                <Link to="/services">Learn More About Our Services</Link>

            </section>
        </>
    );
}

export default WhatDoWeOffer;