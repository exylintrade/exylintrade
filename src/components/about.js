import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";
import Navbar8 from "../components/navbar8";
import Footer4 from "../components/footer4";
import shipImg from "../components/images/ship.png";
import globeVideo from "../components/images/3d-globe.mp4";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const shipRef = useRef(null);
  const countersRef = useRef([]);
  const titleRef = useRef(null); // 💡 For scroll-fade title
  const [counts, setCounts] = useState({ years: 0, clients: 0, countries: 0 });

  useEffect(() => {
    // 📦 Animate ship down and stop at cards
    ScrollTrigger.create({
      trigger: ".glass-overlay",
      start: "top top",
      end: "bottom center", // You can tweak this
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(shipRef.current, {
          y: progress * 300, // Tweak the multiplier to control scroll speed
          ease: "power2.out",
        });
      },
    });

    // Scroll-follow + stop effect
    ScrollTrigger.create({
      trigger: ".ship-scroll-section",
      start: "top top",
      endTrigger: ".about-content",
      end: "top center",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(shipRef.current, {
          y: progress * 200, // adjust scroll amount
          ease: "power1.out",
        });
      },
    });

    // Animate counters
    countersRef.current.forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        innerText: [50, 200, 10][i],
        duration: 2,
        snap: { innerText: 1 },
        onUpdate: function () {
          setCounts((prev) => {
            const updated = [...Object.values(prev)];
            updated[i] = Math.floor(el.innerText);
            return {
              years: updated[0],
              clients: updated[1],
              countries: updated[2],
            };
          });
        },
      });
    });

    // ✨ Fade in title
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="about-wrapper">
      <Helmet>
        <title>About Us - Exylin Trade</title>
      </Helmet>

      <Navbar8 />

      {/* 🎥 Background Video */}
      <div className="video-background">
        <video
          className="background-video"
          src={globeVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* 🧊 Glass Content Overlay */}
      <div className="glass-overlay">
        {/* 🧭 Page Title */}
        <div className="title-section">
          <h1 className="page-title">
            About Exylin{" "}
            <span className="title-trade">
              Trade
              <img src={shipImg} alt="Ship" className="title-ship" />
            </span>
          </h1>
        </div>

        {/* 📦 Content */}
        <section className="about-content">
          <div className="about-card">
            <h2>Who We Are</h2>
            <p>
              Exylin Trade is your modern gateway to global commerce. From
              humble beginnings to empowering clients worldwide, we deliver
              seamless import-export solutions across textiles, electronics, and
              raw goods.
            </p>
          </div>
          <div className="about-card">
            <h2>What Makes Us Different</h2>
            <ul>
              <li>⚙️ Tech-powered logistics</li>
              <li>🌐 Strong global network</li>
              <li>🚀 Rapid customs clearance</li>
            </ul>
          </div>
        </section>

        {/* 🔢 Counters */}
        <div className="counter-section">
          <div className="counter-box">
            <h3 ref={(el) => (countersRef.current[0] = el)}>{counts.years}+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="counter-box">
            <h3 ref={(el) => (countersRef.current[1] = el)}>
              {counts.clients}+
            </h3>
            <p>Global Clients</p>
          </div>
          <div className="counter-box">
            <h3 ref={(el) => (countersRef.current[2] = el)}>
              {counts.countries}+
            </h3>
            <p>Countries Served</p>
          </div>
        </div>
      </div>

      <Footer4 theme="dark" />
    </div>
  );
};

export default About;
