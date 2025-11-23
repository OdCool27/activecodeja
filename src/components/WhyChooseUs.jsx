import '/src/index.css'
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
                               <img src="../assets/quick-turnaround.png" alt="quick turnaround"/>
                           </div>
                           <div className="cardText">
                               <h3>Quick Turnaround Time</h3>
                               <p>We deliver projects efficiently without compromising on quality, getting you online faster.</p>
                           </div>
                       </div>

                       <div className="card">
                           <div className="cardImage">
                               <img src="../assets/affordable.png" alt="affordable fees"/>
                           </div>
                           <div className="cardText">
                               <h3>Affordable & Transparent Fees</h3>
                               <p>No hidden fees. Clear, upfront pricing that fits your budget and delivers real value.</p>
                           </div>
                       </div>

                       <div className="card">
                           <div className="cardImage">
                               <img src="../assets/support.png" alt="customer support"/>
                           </div>
                           <div className="cardText">
                               <h3>Ongoing Customer Support</h3>
                               <p>Our relationship doesn't end at launch. We provide continuous support and maintenance.</p>
                           </div>
                       </div>

                       <div className="card">
                           <div className="cardImage">
                               <img src="../assets/custom-designs.png" alt="custom designs"/>
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