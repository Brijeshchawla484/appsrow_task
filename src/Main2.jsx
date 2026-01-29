import React, { useEffect } from "react";
import "./Main2.css";

// SECTION 1
import teamListImg from "./assets/5th.png";

// SECTION 2
import growthImg from "./assets/3rd.png";
import employeesImg from "./assets/1st.png";

// SECTION 3
import analyticsImg from "./assets/4th.png";
import reportsImg from "./assets/2nd.png";

export default function Main2() {
    useEffect(() => {
        const sections = document.querySelectorAll(".ftSection");

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("is-inview");
                });
            },
            { threshold: 0.22 }
        );

        sections.forEach((s) => io.observe(s));

        return () => io.disconnect();
    }, []);

    return (
        <div className="ftPage">
            <section className="ftHeader">
                <h2 className="ftHeaderTitle">Powerful features</h2>
                <p className="ftHeaderDesc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s.
                </p>
            </section>

            {/* ===================== SECTION 1 ===================== */}
            <section className="ftSection">
                <div className="ftContainer ftRow">
                    <div className="ftText">
                        <span className="ftPill">Central Platform</span>
                        <h2 className="ftTitle">
                            Manage your team in <br />
                            one place
                        </h2>
                        <p className="ftDesc">
                            Centralize your team management. Manage your entire team in one
                            tool. Easy communication, project management, and smooth
                            collaboration with your team.
                        </p>
                    </div>

                    <div className="ftVisual">
                        <div className="ftPanel">
                            <div className="ftPanelBg" />

                            <div
                                className="ftFloat ftFloat--center"
                                style={{ transitionDelay: "120ms" }}
                            >
                                <img className="ftImg" src={employeesImg} alt="Main card" />
                            </div>

                            <div
                                className="ftFloat ftFloat--overlayRight"
                                style={{ transitionDelay: "240ms" }}
                            >
                                <img className="ftImg" src={reportsImg} alt="Overlay card" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== SECTION 2 (reversed) ===================== */}
            <section className="ftSection">
                <div className="ftContainer ftRow ftRow--reverse">
                    <div className="ftText">
                        <span className="ftPill">Ready for scale</span>
                        <h2 className="ftTitle">
                            Grow with your <br />
                            Business
                        </h2>
                        <p className="ftDesc">
                            Now you can grow confidently, nothing holding you back. Our
                            platform grows as you grow. Adapting to your needs. Scale from a
                            pre-seed startup to public company with Dashify.
                        </p>
                    </div>

                    <div className="ftVisual">
                        <div className="ftPanel">
                            <div className="ftPanelBg" />

                            <div
                                className="ftFloat ftFloat--topLeft"
                                style={{ transitionDelay: "120ms" }}
                            >
                                <img className="ftImg" src={growthImg} alt="Growth card" />
                            </div>

                            <div
                                className="ftFloat ftFloat--bottomRight"
                                style={{ transitionDelay: "240ms" }}
                            >
                                <img className="ftImg" src={analyticsImg} alt="Employees card" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== SECTION 3 ===================== */}
            <section className="ftSection">
                <div className="ftContainer ftRow">
                    <div className="ftText">
                        <span className="ftPill">Easy admin</span>
                        <h2 className="ftTitle">
                            Take the pain out of <br />
                            company admin
                        </h2>
                        <p className="ftDesc">
                            Eliminate the hassle, nobody wants it. Take the pain out of
                            company admin with our all-in-one platform. Simplify projects and
                            focus on what really drives your business forward.
                        </p>
                    </div>

                    <div className="ftVisual">
                        <div className="ftPanel">
                            <div className="ftPanelBg" />

                            <div
                                className="ftFloat ftFloat--center"
                                style={{ transitionDelay: "140ms" }}
                            >
                                <img className="ftImg" src={teamListImg} alt="Team list card" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
