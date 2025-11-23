import Hero from "/src/components/Hero.jsx";
import WhatDoWeOffer from "../components/WhatDoWeOffer.jsx";
import '/src/index.css'
import AboutActiveCodeJa from "../components/AboutActiveCodeJa.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Testimonials from "../components/Testimonials.jsx";


function Home(){
    return(
        <>
            <Hero/>
            <WhatDoWeOffer/>
            <AboutActiveCodeJa/>
            <WhyChooseUs/>
            <Testimonials/>
        </>
    );
}

export default Home;