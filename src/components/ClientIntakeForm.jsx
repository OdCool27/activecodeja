import React, { useState } from "react";
import "./clientIntakeForm.css";

function ClientIntakeForm() {
    const [services, setServices] = useState([]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const toggleService = (value) => {
        setServices((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        // Convert FormData → plain object
        const data = Object.fromEntries(formData.entries());

        // Fix checkboxes (services) → get ALL values
        data.services = services;

        const response = await fetch(
            "https://activecodeja.app.n8n.cloud/webhook/client-intake",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );


        if (response.ok) {
            setSuccess(true);
            setError(false);
            form.reset();
            setServices([]); // Reset checkboxes
        } else {
            setError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="intake-form">

            {/* ===========================
          SUCCESS / ERROR MESSAGES
      ============================ */}
            {success && (
                <p className="success-message">
                    ✅ Thank you! Your form has been submitted successfully.
                    We’ll review your details and contact you shortly.
                </p>
            )}

            {error && (
                <p className="error-message">
                    ❗ Something went wrong. Please try again.
                </p>
            )}

            {/* ===========================
          SECTION 1 — Basic Info
      ============================ */}
            <h2>Client Project Intake Form</h2>
            <p>
                This form helps us collect the key details needed for a smooth and
                effective consultation. Please provide as much information as possible.
            </p>

            <label>
                Full Name:
                <input type="text" name="fullName" required />
            </label>

            <label>
                Company / Brand Name:
                <input type="text" name="companyName" />
            </label>

            <label>
                Email:
                <input type="email" name="email" required />
            </label>

            <label>
                Phone Number:
                <input type="text" name="phone" />
            </label>

            <label>
                Briefly describe your business:
                <textarea name="businessDescription"></textarea>
            </label>

            {/* ===========================
          SECTION 2 — Services
      ============================ */}
            <h3>Which services are you interested in?</h3>

            <div className="checkbox-group">
                {[
                    "Website Development",
                    "Brand Design",
                    "Mobile Development",
                    "SaaS",
                    "AI Integration",
                ].map((service) => (
                    <label key={service}>
                        <input
                            type="checkbox"
                            name="services"
                            value={service}
                            checked={services.includes(service)}
                            onChange={() => toggleService(service)}
                        />
                        {service}
                    </label>
                ))}
            </div>

            {/* ===========================
          BRAND DESIGN — Conditional
      ============================ */}
            {services.includes("Brand Design") && (
                <div className="section">
                    <h4>Brand Design Details</h4>

                    <label>
                        Do you already have a logo?
                        <select name="hasLogo">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </label>

                    <label>
                        Logo Colors (HEX if known):
                        <input
                            type="text"
                            name="logoColors"
                            placeholder="#000000, #ffffff"
                        />
                    </label>

                    <label>
                        Additional acceptable colors:
                        <input type="text" name="brandExtraColors" />
                    </label>

                    <label>
                        Style Preference:
                        <select name="brandStyle">
                            <option value="minimal">Minimal / Clean</option>
                            <option value="bold">Bold / Vibrant</option>
                            <option value="corporate">Corporate / Professional</option>
                            <option value="luxury">Luxury</option>
                            <option value="creative">Creative / Playful</option>
                            <option value="unsure">Not Sure</option>
                        </select>
                    </label>
                </div>
            )}

            {/* ===========================
          WEBSITE — Conditional
      ============================ */}
            {services.includes("Website Development") && (
                <div className="section">
                    <h4>Website Details</h4>

                    <label>
                        Do you have a domain?
                        <input type="text" name="domain" placeholder="example.com" />
                    </label>

                    <label>
                        What type of website do you need?
                        <select name="websiteType">
                            <option value="business">Business Website</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="portfolio">Portfolio</option>
                            <option value="booking">Booking/Reservations</option>
                            <option value="blog">Blog</option>
                            <option value="webApp">Web Application</option>
                        </select>
                    </label>

                    <label>
                        What functions should the website have?
                        <textarea
                            name="websiteFunctions"
                            placeholder="Bookings, payments, chat, login, dashboard, etc."
                        ></textarea>
                    </label>
                </div>
            )}

            {/* ===========================
          MOBILE DEVELOPMENT
      ============================ */}
            {services.includes("Mobile Development") && (
                <div className="section">
                    <h4>Mobile App Details</h4>

                    <label>
                        Platforms:
                        <select name="mobilePlatforms">
                            <option value="android">Android</option>
                            <option value="ios">iOS</option>
                            <option value="both">Both</option>
                        </select>
                    </label>

                    <label>
                        App Features:
                        <textarea name="mobileFeatures"></textarea>
                    </label>
                </div>
            )}

            {/* ===========================
          SAAS
      ============================ */}
            {services.includes("SaaS") && (
                <div className="section">
                    <h4>SaaS Platform Details</h4>

                    <label>
                        What problem does your SaaS solve?
                        <textarea name="saasProblem"></textarea>
                    </label>

                    <label>
                        Core Features:
                        <textarea name="saasFeatures"></textarea>
                    </label>

                    <label>
                        Will you need subscriptions/payments?
                        <select name="saasPayments">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="notSure">Not Sure</option>
                        </select>
                    </label>
                </div>
            )}

            {/* ===========================
          AI INTEGRATION
      ============================ */}
            {services.includes("AI Integration") && (
                <div className="section">
                    <h4>AI Integration Details</h4>

                    <label>
                        What role should AI play?
                        <textarea
                            name="aiRole"
                            placeholder="Chatbot, automation, recommendations, analytics, etc."
                        ></textarea>
                    </label>

                    <label>
                        AI Type Preference:
                        <select name="aiType">
                            <option value="custom">Custom AI Model</option>
                            <option value="provider">
                                Integration with OpenAI / Google / etc.
                            </option>
                            <option value="unsure">Not Sure</option>
                        </select>
                    </label>
                </div>
            )}

            {/* ===========================
          FINAL DETAILS
      ============================ */}
            <div className="section">
                <h4>Final Details</h4>

                <label>
                    Project Timeline:
                    <select name="timeline">
                        <option value="2-4weeks">2–4 Weeks</option>
                        <option value="1-2months">1–2 Months</option>
                        <option value="3-6months">3–6 Months</option>
                        <option value="flexible">Flexible</option>
                    </select>
                </label>

                <label>
                    Budget Range:
                    <select name="budget">
                        <option value="under15000">Under $15,000JMD</option>
                        <option value="15000-25000">$15,000–$25,000JMD</option>
                        <option value="25000-40000">$25,000–$40,000JMD</option>
                        <option value="40000-60000">$40,000–$60,000JMD</option>
                        <option value="60kplus">$60,000+JMD</option>
                    </select>
                </label>

                <label>
                    Anything else we should know?
                    <textarea name="additionalNotes"></textarea>
                </label>
            </div>
            <div className="btn-container">
                <button type="submit" className="submit-btn">
                    Submit Form
                </button>

                <button
                    type="button"
                    className="reset-btn"
                    onClick={() => {
                        document.querySelector(".intake-form").reset();
                        setServices([]);
                        setSuccess(false);
                        setError(false);
                    }}
                >
                    Reset Form
                </button>
            </div>


        </form>
    );
}

export default ClientIntakeForm;
