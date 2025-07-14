import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar8 from "./navbar8";
import Footer4 from "./footer4";
import bannerImage from './images/banner.png';
import whoImage from './images/whoarewe.png';
import whyImage from './images/whyus.png';
import missionImage from './images/ourmission.png';
import "./learnmore.css";

gsap.registerPlugin(ScrollTrigger);

const LearnMore = () => {
  useEffect(() => {
    gsap.utils.toArray(".info-card").forEach((card, i) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 100,
        scale: 0.95,
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        delay: i * 0.2,
      });
    });
  }, []);

  return (
    <div className="learn-wrapper">
      <Helmet>
        <title>Learn More - Exylin Trade</title>
      </Helmet>

      <Navbar8 />

      <header className="learn-hero" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="hero-content">
          <h1>Powering Global Trade</h1>
          <p>Your gateway to seamless import and export success</p>
        </div>
      </header>

      <section className="learn-section">
        <div className="info-card">
          <img src={whoImage} alt="Who We Are" />
          <div className="text">
            <h2>Who We Are</h2>
            <p>
              At Exylin Trade, we move more than goods — we move ambitions. With
              a reliable global network, your cargo travels securely, swiftly, and transparently.
            </p>
          </div>
        </div>

        <div className="info-card reverse">
          <img src={whyImage} alt="Why Choose Us" />
          <div className="text">
            <h2>Why Choose Us</h2>
            <ul>
              <li>🌍 Global logistics network</li>
              <li>🚛 Hassle-free customs clearance</li>
              <li>🧠 Expert trade consultancy</li>
              <li>🔒 Scalable secure operations</li>
            </ul>
          </div>
        </div>

        <div className="info-card">
          <img src={missionImage} alt="Our Mission" />
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              We're simplifying international commerce, helping businesses scale across borders
              with strategic partnerships and frictionless logistics.
            </p>
          </div>
        </div>
      </section>

      <Footer4 />
    </div>
  );
};

export default LearnMore;
