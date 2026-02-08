import '/src/index.css'
import {useInView} from "./useInView.jsx";
import quickTurnaround from '../assets/quick-turnaround.webp'
import affordableFees from '../assets/affordable.webp'
import customerSupport from '../assets/support.webp'
import customDesigns from '../assets/custom-designs.webp'

function WhyChooseUs(){
    const [ref, isVisible] = useInView();
    return(
        <>
           <section id="why-choose-us" ref={ref} className={`${isVisible ? "bg-fade-in" : ""}`}>
               <div className={`container ${isVisible ? "content-rise" : ""}`}>
                   <h2>Why Choose Us?</h2>
                   <p>
                       When it comes to building modern business solutions, you need more than just technical work—you
                       need a partner who understands your objectives and helps you achieve them. At Active Code Ja, we
                       deliver smart, reliable technology solutions that strengthen your brand, optimize your operations,
                       and make the entire process seamless and stress-free.
                   </p>

                   <div className="why-choose-us-cards">

                       <div className="card">
                           <div className="cardImage">
                               <img src={quickTurnaround} alt="quick turnaround"/>
                           </div>
                           <div className="cardText">
                               <h3>Quick Turnaround Time</h3>
                               <p>We deliver projects efficiently without compromising on quality, getting you online faster.</p>
                           </div>
                       </div>

                       <div className="card">
                           <div className="cardImage">
                               <img src={affordableFees} alt="affordable fees"/>
                           </div>
                           <div className="cardText">
                               <h3>Affordable & Transparent Fees</h3>
                               <p>No hidden fees. Clear, upfront pricing that fits your budget and delivers real value.</p>
                           </div>
                       </div>

                       <div className="card">
                           <div className="cardImage">
                               <img src={customerSupport} alt="customer support"/>
                           </div>
                           <div className="cardText">
                               <h3>Ongoing Customer Support</h3>
                               <p>Our relationship doesn't end at launch. We provide continuous support and maintenance.</p>
                           </div>
                       </div>

                       <div className="card">
                           <div className="cardImage">
                               <img src={customDesigns} alt="custom designs"/>
                           </div>
                           <div className="cardText">
                               <h3>Custom Designs</h3>
                               <p>Unique, tailored solutions that reflect your brand identity and business goals.</p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
        </>
    );
}

export default WhyChooseUs;