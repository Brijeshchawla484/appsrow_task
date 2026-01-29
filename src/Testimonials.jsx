import React from "react";
import "./Testimonials.css";

// ✅ Put ONE user image here (same image used for all cards)
import userImg from "./assets/user.png"; // <-- change this path

const DATA = [
    {
        name: "Emily Chang",
        role: "CEO & Founder",
        text:
            "Thanks to Dashify, we’ve seen a significant increase in productivity. It’s seamless integration with our existing tools has streamlined our processes and saved us valuable time.",
        stars: 5,
    },
    {
        name: "Floyd Miles",
        role: "CEO & Founder",
        text:
            "As a remote team, Dashify has been a game-changer for us. It’s communication features keep us connected and organized, no matter where we are.",
        stars: 5,
    },
    {
        name: "Samantha",
        role: "CEO & Founder",
        text:
            "The experience has been amazing. Everything feels simple, fast, and the team collaboration improved instantly after switching.",
        stars: 4,
    },
    {
        name: "Jacob Jones",
        role: "Product Lead",
        text:
            "The UI is clean, the workflow is smooth, and onboarding was surprisingly quick. We saved hours every week.",
        stars: 5,
    },
];

function Stars({ count = 5 }) {
    return (
        <div className="tStars" aria-label={`${count} star rating`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`tStar ${i < count ? "isOn" : "isOff"}`}>
                    ★
                </span>
            ))}
        </div>
    );
}

function Card({ item }) {
    return (
        <article className="tCard">
            <div className="tTop">
                <img className="tAvatar" src={userImg} alt="User" />
                <div className="tUser">
                    <div className="tName">{item.name}</div>
                    <div className="tRole">{item.role}</div>
                </div>
            </div>

            <p className="tText">{item.text}</p>

            <div className="tDivider" />
            <Stars count={item.stars} />
        </article>
    );
}

/**
 * ✅ Marquee Row
 * direction = "ltr" means cards move LEFT -> RIGHT
 * direction = "rtl" means cards move RIGHT -> LEFT
 */
function MarqueeRow({ direction = "rtl", speed = 28 }) {
    // ✅ duplicate list for seamless loop
    const items = [...DATA, ...DATA, ...DATA];

    return (
        <div className="tMarquee">
            <div
                className={`tTrack ${direction === "ltr" ? "isLTR" : "isRTL"}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {items.map((item, idx) => (
                    <Card key={`${item.name}-${idx}`} item={item} />
                ))}
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="tSection">
            <h2 className="tHeading">What our customer say</h2>

            {/* ✅ Row 2: Left -> Right */}
            <MarqueeRow direction="ltr" speed={30} />

            {/* ✅ Row 3: Right -> Left */}
            <MarqueeRow direction="rtl" speed={26} />
        </section>
    );
}
