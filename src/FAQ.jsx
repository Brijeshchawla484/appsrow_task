import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How does Dashify work?",
            answer: "Dashify is like your team's HQ. It brings all your communication, tasks, and files together in one easy-to-use place. It helps you work better together and get stuff done faster."
        },
        {
            question: "Is my data data secure?",
            answer: "Yes, we use industry-standard encryption to ensure your data is safe and private at all times."
        },
        {
            question: "Does Dashify work well for large teams?",
            answer: "Absolutely. Our infrastructure is built to scale, supporting teams from 5 to 5,000 members seamlessly."
        },
        {
            question: "How do I create a new account?",
            answer: "Simply click the 'Sign Up' button in the top right corner and follow the prompts to get started."
        }
    ];

    return (
        <div className="faq-section">
            <div className="faq-container">

                {/* Left Side */}
                <div className="faq-left">
                    <h1 className="faq-title">Frequently asked <br /> questions</h1>
                    <p className="faq-subtitle">
                        Have questions? We've got answers. For everything <br />
                        else email us on <a href="mailto:hi@gmail.com">hi@gmail.com</a>
                    </p>

                  
                </div>

                {/* Right Side (Accordion) */}
                <div className="faq-right">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                        >
                            <div className="faq-header">
                                <span className="faq-question">{faq.question}</span>
                                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FAQ;