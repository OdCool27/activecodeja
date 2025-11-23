import '/src/index.css'
import quickTurnaround from '../assets/quick-turnaround.webp'
import affordableFees from '../assets/affordable.webp'
import customerSupport from '../assets/support.webp'
import customDesigns from '../assets/custom-designs.webp'

function WhyChooseUs(){
    return(
        <>
           <section id="why-choose-us">
               <div className="container">
                   <h2>Why Choose Use?</h2>
                   <p>
                       When it comes to creating a website, you need more than just design—you need a partner who
                       understands your goals and helps you reach them. At Active Code Ja, we focus on delivering
                       solutions that give your business a professional edge, while making the process simple and
                       stress-free.
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