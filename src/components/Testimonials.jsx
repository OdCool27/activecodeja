import '/src/index.css';
import { useState, useEffect } from "react";

const testimonialData = [
    { quote: "Testimonial here", name: "Terry-Ann Hines", title: "Co-Founder of CORE Accounting Ja" },
    { quote: "Testimonial here", name: "Shellion Rhoden", title: "Co-Founder of Events4Unurs" },
    { quote: "Testimonial here", name: "Phil Collins", title: "CEO of Vapfumi Concepts & Solutions" },
    { quote: "Testimonial here", name: "John Doe", title: "CEO of Company" },
];

// ---------------------------
// Responsive Testimonial Component
// ---------------------------
function Testimonials() {
    const [startIndex, setStartIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    // Handle responsive behavior
    useEffect(() => {
        const updateItemsToShow = () => {
            const width = window.innerWidth;

            if (width < 768) setItemsToShow(1);
            else if (width < 1000) setItemsToShow(2);
            else setItemsToShow(3);
        };

        updateItemsToShow(); // run on mount
        window.addEventListener("resize", updateItemsToShow);

        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);

    // Carousel navigation
    const prevTestimonial = () => {
        setStartIndex(
            (startIndex - itemsToShow + testimonialData.length) % testimonialData.length
        );
    };

    const nextTestimonial = () => {
        setStartIndex((startIndex + itemsToShow) % testimonialData.length);
    };

    // Get visible testimonials
    const currentTestimonials = [];
    for (let i = 0; i < itemsToShow; i++) {
        const index = (startIndex + i) % testimonialData.length;
        currentTestimonials.push(testimonialData[index]);
    }

    return (
        <div className="testimonial-container">
            <h2>Testimonials</h2>

            <div className="testimonial-carousel">
                <button className="carousel-btn left" onClick={prevTestimonial}>&lt;</button>

                <div className="testimonial-cards">
                    {currentTestimonials.map((t, idx) => (
                        <div className="testimonial-card" key={idx}>
                            <p>"{t.quote}"</p>
                            <h4>{t.name}</h4>
                            <small>{t.title}</small>
                        </div>
                    ))}
                </div>

                <button className="carousel-btn right" onClick={nextTestimonial}>&gt;</button>
            </div>
        </div>
    );
}

export default Testimonials;
