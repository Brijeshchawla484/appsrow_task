import React from "react";
import "./Footer.css";
import lastl from "./assets/last_Logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            {/* ================= CTA CARD ================= */}
            <div className="footerCta">
                <div className="ctaText">
                    <h2>Ready to get started?</h2>
                    <p>Take the first step to growing your business</p>
                </div>

                <button className="ctaBtn">Get Started</button>
            </div>

            {/* ================= MAIN FOOTER ================= */}
            <div className="footerMain">
                {/* LEFT COL */}
                <div className="footerBrand">
                    {/* ✅ logo + name in one line */}
                    <div className="brandRow">
                        <img src={lastl} alt="Dashify logo" className="footerLogo" />
                        <h3 className="brandName">
                            <span>Dash</span>ify
                        </h3>
                    </div>

                    <p className="copyright">© 2025 Dashify. All rights reserved.</p>
                </div>

                {/* RIGHT COL */}
                <div className="footerRight">
                    <div className="footerLinks">
                        {/* Column 1: Features links + Social below it */}
                        <div className="linkCol">
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">Blog</a>
                            <a href="#">About Us</a>

                            {/* ✅ Social below feature column */}
                            <div className="footerSocial">
                                <a href="#">Twitter</a>
                                <a href="#">Instagram</a>
                                <a href="#">LinkedIn</a>
                                <a href="#">YouTube</a>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="linkCol">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
