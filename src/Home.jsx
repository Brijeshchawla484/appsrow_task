import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Home.css";

/**
 * 🔁 Replace these images with your real assets
 */
import logo from "./assets/logo.png";
import teamListImg from "./assets/TL.png";
import employeesImg from "./assets/E.png";
import analyticsImg from "./assets/AR.png";
import users50kImg from "./assets/users.png";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Text animation
    const fadeInUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
    };

    // Floating animation helper
    const floatProps = (delay = 0, amp = 14, duration = 4.2) => ({
        initial: { y: 0 },
        animate: {
            y: [0, -amp, 0],
            transition: {
                duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay,
            },
        },
    });

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="home page">
            {/* ================= NAVBAR ================= */}
            <header className="navbar">
                <div className="navLeft">
                    <img src={logo} alt="Dashify logo" className="logo" />
                </div>

                {/* Desktop Nav */}
                <nav className="navCenter">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#blog">Blog</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact Us</a>
                </nav>

                <div className="navRight">
                    <button className="btnOutline">Log In</button>
                    <button className="btnPrimary">Get Started →</button>

                    {/* Mobile Menu Button */}
                    <button
                        className="hamburger"
                        aria-label="Open menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>

                {/* Mobile menu dropdown */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            className="mobileMenu"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <a href="#features" onClick={closeMenu}>
                                Features
                            </a>
                            <a href="#pricing" onClick={closeMenu}>
                                Pricing
                            </a>
                            <a href="#blog" onClick={closeMenu}>
                                Blog
                            </a>
                            <a href="#about" onClick={closeMenu}>
                                About Us
                            </a>
                            <a href="#contact" onClick={closeMenu}>
                                Contact Us
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* ================= HERO ================= */}
            <section className="hero">
                {/* ✅ Floating cards (rotation moved from CSS -> Framer Motion) */}
                <motion.img
                    src={teamListImg}
                    alt="Team List"
                    className="card card-team"
                    style={{ rotate: -6 }}          // ✅ keep rotation here
                    {...floatProps(0.0, 14, 4.2)}
                />

                <motion.img
                    src={employeesImg}
                    alt="Employees"
                    className="card card-employees"
                    style={{ rotate: 6 }}           // ✅ keep rotation here
                    {...floatProps(0.6, 12, 4.6)}
                />

                <motion.img
                    src={analyticsImg}
                    alt="Analytics Report"
                    className="card card-analytics"
                    style={{ rotate: 6 }}           // ✅ keep rotation here
                    {...floatProps(0.3, 16, 4.0)}
                />

                {/* Center content */}
                <motion.div
                    className="heroContent"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={fadeInUp}>
                        Streamline Your
                        <br />
                        Growing Startup
                    </motion.h1>

                    <motion.p variants={fadeInUp}>
                        Say goodbye to admin headaches and say hello to efficiency. Onboard
                        your employees in minutes, track company projects, and manage team
                        performance. We've got you covered.
                    </motion.p>

                    <motion.div className="heroButtons" variants={fadeInUp}>
                        <button className="btnPrimary">Get Started →</button>
                        <button className="btnLight">Learn More</button>
                    </motion.div>

                    <motion.img
                        src={users50kImg}
                        alt="50K users"
                        className="usersImg"
                        variants={fadeInUp}
                    />
                </motion.div>
            </section>
        </div>
    );
}
