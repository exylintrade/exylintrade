import React from "react";
import "./privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-wrapper">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-date">Last updated: July 2025</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            At <strong>Exylin Trade</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Personal Info:</strong> Name, email address, phone number, business information.</li>
            <li><strong>Usage Data:</strong> Pages visited, time on site, IP address, browser type.</li>
            <li><strong>Contact Forms:</strong> Any info you voluntarily submit through forms.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Data</h2>
          <ul>
            <li>To respond to inquiries or requests.</li>
            <li>To improve our website experience.</li>
            <li>To communicate updates or promotions (only with consent).</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Sharing</h2>
          <p>
            We do not sell or rent your data. We may share data with trusted partners for logistics, analytics, or legal compliance — but only when absolutely necessary.
          </p>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>
            Our site uses cookies to enhance your browsing experience. You can disable cookies via your browser settings at any time.
          </p>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption, firewalls, and secure servers to keep your data protected.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <ul>
            <li>You have the right to request a copy of your personal data.</li>
            <li>You can request corrections or deletion of your data.</li>
            <li>You may opt out of marketing emails at any time.</li>
          </ul>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have questions about our privacy practices, feel free to reach out:
          </p>
          <p><strong>Email:</strong> support@exylintrade.com</p>
          <p><strong>Office:</strong> T-329, ABC-1, Mota Varacha, Surat, India</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
