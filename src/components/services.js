import React from 'react';
import './services.css';
import Navbar8 from '../components/navbar8';
import Footer4 from '../components/footer4';
import { FaShippingFast, FaCogs, FaGlobe, FaIndustry, FaStore, FaBrain } from 'react-icons/fa';

const services = [
  {
    icon: <FaShippingFast />,
    title: 'Smart Logistics',
    description: 'AI-driven logistics planning to minimize cost and delivery time across borders.',
  },
  {
    icon: <FaGlobe />,
    title: 'Global Trade Advisory',
    description: 'Market intelligence & policy compliance strategies tailored for your growth.',
  },
  {
    icon: <FaCogs />,
    title: 'Custom Integration',
    description: 'From ERP to customs APIs, we unify all your trade tech stacks.',
  },
  {
    icon: <FaIndustry />,
    title: 'Manufacturing Ecosystem',
    description: 'Leverage our vetted network of high-quality manufacturers globally.',
  },
  {
    icon: <FaStore />,
    title: 'Omni-channel Export',
    description: 'Expand reach through B2B, B2C, and marketplace integrations seamlessly.',
  },
  {
    icon: <FaBrain />,
    title: 'Intelligent Forecasting',
    description: 'Predict demand, optimize inventory and reduce wastage with smart data.',
  },
];

const Services = () => {
  return (
    <div className="services-wrapper">
      <Navbar8 />

      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="hero-content">
          <h1>Services That Redefine Global Trade</h1>
          <p>Cutting-edge solutions designed for fast, efficient, and smart cross-border operations.</p>
        </div>
        <div className="wave-divider"></div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <h2 className="services-title">What We Offer</h2>
        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card-glass" key={index}>
              <div className="icon-container">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta-section">
        <div className="cta-glass">
          <h2>Let’s Ship Innovation</h2>
          <p>Join forces with Exylin Trade and experience next-level commerce without borders.</p>
          <a href="/contact" className="cta-button">Start Now</a>
        </div>
      </section>

      <Footer4 theme="light" />
    </div>
  );
};

export default Services;
