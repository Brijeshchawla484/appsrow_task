import React from "react";
import { motion } from "framer-motion";
import "./TrustedBy.css";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";
import logo7 from "./assets/logo7.png";
import logo8 from "./assets/logo8.png"; // (same image used twice)

export default function TrustedBy() {
    const logos = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
    ];

    /* 🔁 Continuous safe animation */
    const safeAnim = (inverse = false) => ({
        x: inverse ? [18, 0, -18, 0] : [-18, 0, 18, 0],
        y: inverse ? [0, 0, 0, 12] : [0, 0, 0, -12],
        opacity: [0.85, 1, 0.85, 1],
        transition: {
            duration: 3.8,
            ease: "easeInOut",
            repeat: Infinity,
        },
    });

    return (
        <section className="tbSection">
            <div className="tbContainer">
                <h2 className="tbTitle">Trusted by 8,000 leading companies</h2>

                <div className="tbGrid">
                    {logos.map((logo, i) => (
                        <div key={i} className="tbCell">
                            <motion.img
                                src={logo}
                                alt={`logo-${i}`}
                                className="tbLogo"
                                animate={safeAnim(i % 2 !== 0)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
