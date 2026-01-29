import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    // Price calculations
    const calculatePrice = (monthlyPrice) => {
        if (isYearly) {
            // Applying 10% discount as shown in your image
            const yearly = monthlyPrice * 0.9;
            return Math.floor(yearly);
        }
        return monthlyPrice;
    };

    const plans = [
        {
            name: "Basic",
            price: 26,
            features: ["2 seats", "Simple support", "Simple onboarding features"],
            isPopular: false,
        },
        {
            name: "Pro",
            price: 49,
            features: ["5 seats", "Expert support", "Monthly payroll", "Third party integrations", "Advanced onboarding features"],
            isPopular: true,
        },
        {
            name: "Enterprise",
            price: 179,
            features: ["Unlimited seats", "Priority 1-1 support", "Monthly payroll", "Third party integrations", "Advanced onboarding features", "Dedicated HR expert", "Custom admin permission"],
            isPopular: false,
        }
    ];

    return (
        <div className="pricing-container">
            <header className="pricing-header">
                <h1>Transparent pricing for you and your team</h1>
                <p>Transparent pricing, with clear, accessible rates. Everyone can focus on what matters most — achieving your goals.</p>

                <div className="toggle-wrapper">
                    <span className={!isYearly ? 'active' : ''}>Monthly</span>
                    <label className="switch">
                        <input type="checkbox" onChange={() => setIsYearly(!isYearly)} />
                        <span className="slider round"></span>
                    </label>
                    <span className={isYearly ? 'active' : ''}>Yearly</span>
                    <span className="discount-badge">-10%</span>
                </div>
            </header>

            <div className="cards-grid">
                {plans.map((plan, index) => (
                    <div key={index} className={`card ${plan.isPopular ? 'popular' : ''}`}>
                        {plan.isPopular && <span className="popular-tag">Popular</span>}
                        <div className="card-content">
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="price-section">
                                <span className="currency">$</span>
                                <span className="amount">{calculatePrice(plan.price)}</span>
                                <span className="period">/ mo</span>
                            </div>

                            <ul className="feature-list">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="check-icon">✓</span> {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="choose-btn">
                                Choose plan <span>→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;