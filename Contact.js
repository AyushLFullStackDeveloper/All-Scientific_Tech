import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Contact.css";
import { faqItems } from "../constants/ContactData.js";
import Heading from "./common/Heading.js";
import InputField from "./common/InputFields.js";
import Button from "./common/Button.js";
import Text from "./common/Text.js";
import FAQItem from "./common/FAQItem.js";

const Contact = () => {
    const navigate = useNavigate();

    // State for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    // State for FAQ toggle
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We will contact you shortly.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        });
    };

    // Toggle FAQ visibility
    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="page-container">

            {/* Contact Section */}
            <div className="contact-container">
                <div className="header-section">
                    <Heading  level={1}>Contact Us</Heading>
                </div>

                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <Heading level={2}>Get In Touch</Heading>
                        <Text>We'd love to hear from you. Please fill out the form or use the contact information below.</Text>

                        <Heading level={4}>
                            <i className="fas fa-address-book"></i> Contact Info
                        </Heading>
                        <Text><i className="fas fa-envelope"></i> Email: <a href="mailto:sales@alscientific.com">sales@alscientific.com</a></Text>
                        <Text><i className="fas fa-phone"></i> Phone: <a href="tel:(718) 756 - 8100">(718) 756 - 8100</a></Text>
                        <Text>
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            <a 
                                href="https://maps.google.com/?q=89 5th Avenue, New York City, NY 10003" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                89 5th Avenue, New York City, NY 10003
                            </a>
                        </Text>

                        <div className="business-hours">
                            <Heading level={3}>Locations:</Heading>
                            <Text>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                <a 
                                    href="https://maps.google.com/?q=1804 Plaza Ave, New Hyde Park, NY 11040" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    New York - 1804 Plaza Ave, New Hyde Park, NY 11040
                                </a>
                            </Text>
                            <Text>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                <a 
                                    href="https://maps.google.com/?q=2139 HWY 35, Holmdel, NJ 07733" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    New Jersey - 2139 HWY 35, Holmdel, NJ 07733
                                </a>
                            </Text>
                            <Text>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                <a 
                                    href="https://maps.google.com/?q=3500 Scotts Lane, Philadelphia, PA 19129" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Pennsylvania - 3500 Scotts Lane, Philadelphia, PA 19129
                                </a>
                            </Text>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <Heading level={2}>Send Us a Message</Heading>
                        <form onSubmit={handleSubmit}>
                            <InputField label="Name" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            <InputField label="Email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            <InputField label="Phone" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                            <InputField label="Company" type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                            
                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
                            </div>

                            <Button type="submit" className="submit-button">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
                <Heading level={2}>Frequently Asked Questions</Heading>
                <div className="faq-container">
                    {faqItems.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isActive={activeIndex === index}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
