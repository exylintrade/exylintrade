import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar8 from "../components/navbar8";
import Footer4 from "../components/footer4";
import "./contactus.css";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form[0].value,
      email: form[1].value,
      subject: form[2].value,
      message: form[3].value,
    };

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Email sent!");
        form.reset();
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Server error.");
    }
  };

  return (
    <div className="contactus-wrapper">
      <Helmet>
        <title>Contact Us - Exylin Trade</title>
      </Helmet>

      <Navbar8 />

      <section className="contactus-hero">
        <div className="hero-overlay" />
        <h1>Let’s Connect 🚀</h1>
        <p>We're here to help you expand across borders, seamlessly.</p>
      </section>

      <section className="contactus-form-section" ref={formRef}>
        <div className="contactus-card">
          <h2>Send us a message</h2>
          <form className="contactus-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <Footer4 />
    </div>
  );
};

export default ContactUs;
