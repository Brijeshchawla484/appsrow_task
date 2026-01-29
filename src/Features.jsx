import "./Features.css";
import { motion } from "framer-motion";

import iconBolt from "./assets/f1.png";
import iconTools from "./assets/f2.png";
import iconClock from "./assets/f3.png";

export default function Features() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 26, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const iconAnim = {
    hidden: { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
  };

  return (
    <section className="features">
      <div className="featuresContainer">
        {/* Heading */}
        <motion.h2
          className="featuresTitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          Dshify is built for you
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="featuresSubtitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.08 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="featuresGrid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* CARD 1 */}
          <motion.div
            className="featureCard"
            variants={cardAnim}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <motion.div className="iconPill" variants={iconAnim}>
              <img src={iconBolt} alt="bolt icon" />
            </motion.div>

            <h3>Streamline your work</h3>
            <p>
              Efficiency starts here. Streamline your work with our project
              tracking features. Simplify tasks and maximize productivity.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className="featureCard"
            variants={cardAnim}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <motion.div className="iconPill" variants={iconAnim}>
              <img src={iconTools} alt="tools icon" />
            </motion.div>

            <h3>Work with your favorite tools</h3>
            <p>
              Integrate quickly and directly with your tools you already love.
              It’s as easy as 1, 2, 3.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            className="featureCard"
            variants={cardAnim}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <motion.div className="iconPill" variants={iconAnim}>
              <img src={iconClock} alt="clock icon" />
            </motion.div>

            <h3>Save hours every week</h3>
            <p>
              Efficiency starts here. Streamline your work with our project
              tracking features. Simplify tasks and maximize productivity.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
