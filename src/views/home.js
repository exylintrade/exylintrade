import React, { Fragment } from "react";

import { Helmet } from "react-helmet";

import Navbar8 from "../components/navbar8";
import LearnMore from "../components/learnmore";
import Hero17 from "../components/hero17";
import Features24 from "../components/features24";
import CTA26 from "../components/cta26";
import Features25 from "../components/features25";
import Pricing14 from "../components/pricing14";
import Steps2 from "../components/steps2";
import Testimonial17 from "../components/testimonial17";
import Contact10 from "../components/contact10";
import Footer4 from "../components/footer4";
import "./home.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Exylin Trade</title>
        <meta property="og:title" content="Hungry Serious Butterfly" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Get in touch with us for your import and export needs
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Learn More</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">about</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to Exylin Trade - Your Import and Export Partner
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Learn more about Exylin Trade and our mission
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Services</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Explore the range of services we offer in electronics, machinery,
              textiles, and raw materials
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Contact Us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Link to="/contact">
            <span className="home-text114">Contact Us</span>
          </Link>
        }
        action1={
          <Link to="/services">
            <span className="home-text115">Explore Our Services</span>
          </Link>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Welcome to Exylin Trade</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Your trusted partner for import and export services in India
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Explore Our Services</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Discover our wide range of import and export services in
              electronics, machinery, textiles, and raw materials.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">View Services</span>
          </Fragment>
        }
      ></CTA26>
      <Features25></Features25>
      {/* <Pricing14
          plan3Price={
            <Fragment>
              <span className="home-text133">$49/mo</span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text134">Get started</span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text135">Basic plan</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text136">Contact us for more details</span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text137">Enterprise plan</span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="home-text138">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text139">Machinery</span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text140">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="home-text141">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="home-text142">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text143">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="home-text144">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text145">Feature text goes here</span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text146">or $299 yearly</span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="home-text147">Get started</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text148">Get started</span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text149">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text150">Feature text goes here</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text151">$200/yr</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text152">Business plan</span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="home-text153">Feature text goes here</span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text154">Get started</span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text155">Feature text goes here</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text156">
                Choose the perfect plan for you
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text157">Feature text goes here</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text158">Pricing plan</span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="home-text159">Feature text goes here</span>
            </Fragment>
          }
          plan1={
            <Fragment>
              <span className="home-text160">Basic Plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text161">Business plan</span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text162">Raw Materials</span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="home-text163">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature5={
            <Fragment>
              <span className="home-text164">Feature text goes here</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text165">or $29 monthly</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text166">$29/mo</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text167">or $49 monthly</span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="home-text168">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text169">Feature text goes here</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text170">or $20 monthly</span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text171">$299/yr</span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="home-text172">or $499 yearly</span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text173">Feature text goes here</span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text174">$499/yr</span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="home-text175">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text176">Textiles</span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text177">
                Save 10% with yearly subscription
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text178">Electronics</span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text179">Feature text goes here</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text180">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text181">Get started</span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text182">Starting at $100</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text183">Enterprise plan</span>
            </Fragment>
          }
        ></Pricing14> */}
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Browse through our wide range of electronics, machinery, textiles,
              and raw materials to find the products that meet your
              requirements.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Once you have selected the products you wish to import or export,
              place your order with us, and we will take care of the rest.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Contact Us for Inquiries</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Reach out to our team via phone or email to discuss your import
              and export needs. We are here to assist you.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Explore Our Products</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Place Your Order</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Experience smooth and hassle-free transactions with Exylin Trade.
              Your satisfaction is our priority.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Enjoy Seamless Transactions</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        heading1={
          <Fragment>
            <span className="home-text203">Why Businesses Choose Exylin</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              🌍 Global Trade, Simplified — Our platform connects you with
              reliable suppliers, manages compliance, and streamlines logistics
              so you can scale confidently.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              ⚡ Lightning Fast Support — We don’t make you wait. Real-time
              updates, proactive communication, and a dedicated support team
              from inquiry to delivery.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              🔒 100% Transparency — No hidden charges. No last-minute
              surprises. Just clear pricing, verified partners, and honest
              timelines.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              🚀 Ready for Growth — Whether you're scaling or just starting
              global trade, we adapt to your business needs and help you thrive.
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">Our Commitment</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Our Speed</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Our Integrity</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Your Success</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span>From Day One</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span>Every Step of the Way</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span>In Every Shipment</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span>Always the Goal</span>
          </Fragment>
        }
      />

      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Reach out to us for any inquiries related to import and export
              services. Our team at Exylin Trade is ready to assist you.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              T-329 , ABC-1 , Mota varacha , Surat
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Exylin Trade - Head Office</span>
          </Fragment>
        }
      />

      <Footer4
        link1={<Link to="/">Home</Link>}
        link2={<Link to="/services">Services</Link>}
        link3={<Link to="/about">About Us</Link>}
        link4={<Link to="/contact">Contact Us</Link>}
        link5={<Link to="/faqs">FAQs</Link>}
        termsLink={<Link to="/terms">Terms and Conditions</Link>}
        privacyLink={<Link to="/privacy">Privacy Policy</Link>}
        cookiesLink={<Link to="/cookies">Cookies Policy</Link>}
      ></Footer4>
    </div>
  );
};

export default Home;
