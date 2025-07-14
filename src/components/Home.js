import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const Home = () => {
  return (
    <div className="components">
      <div className="matter">

        <motion.section id='logosection' {...fadeInUp}>
          <img 
            src="/images/SAPTHA.ico"
            alt="saptha" 
            style={{ width: '250px' }} 
          /> 
        </motion.section>

        <motion.section className="hero-section" {...fadeInUp}>
          <h1>Beautifully Designed Interiors</h1>
          <p>Bringing elegance and functionality to every corner of your home.</p>
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1470&q=80" 
            alt="Interior Example" 
           style={
              { width: '100%',
                borderRadius: '10px',
                marginTop: '20px',
                border: '1px solid black',
              }} 
          />
        </motion.section>

        <motion.section className="about-section" {...fadeInUp}>
          <h2>Who We Are</h2>
          <p>
            Saptha Interiors is an interior design company that offers personalized and high-end
            interior solutions for your home and workspace. We prioritize client vision and
            quality execution.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80" 
            alt="Modern Interior" 
            style={
              { width: '100%',
                borderRadius: '10px',
                marginTop: '20px',
                border: '1px solid black',
              }} 
          />
        </motion.section>

        <motion.section className="vision-section" {...fadeInUp}>
          <h2>Our Mission & Future Goals</h2>
          <p>Our mission is to seamlessly blend style, comfort, and innovation to create spaces that inspire...</p>
          {/* Keep your long text here */}
        </motion.section>

        <motion.section className="services-section" {...fadeInUp}>
          <h2>Our Core Services</h2>
          <div className="service-grid">
            <div>Modular Kitchen</div>
            <div>Wardrobe Design</div>
            <div>Living Room Interiors</div>
            <div>False Ceilings</div>
            <div>Lighting Solutions</div>
            <div>Full Home Interiors</div>
          </div>
        </motion.section>

        {/* Extra Sections */}
        <motion.section className="kitchen-section" {...fadeInUp}>
          <h2>Modular Kitchens</h2>
          <p>Our modular kitchen designs combine elegance, space optimization, and functionality...</p>
          <img
            src="/images/modular_kitchen.png"
            alt="Modular kitchen"
            style={
              { width: '100%',
                borderRadius: '10px',
                marginTop: '20px',
                border: '1px solid black',
              }}  
          />
        </motion.section>

        <motion.section className="pantry-section" {...fadeInUp}>
          <h2>Modern Pantry Units</h2>
          <p>Designed for seamless storage and accessibility, our custom pantry units ensure...</p>
          <img 
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1470&q=80"
            alt="Pantry Unit" 
            style={
              { width: '100%',
                borderRadius: '10px',
                marginTop: '20px',
                border: '1px solid black',
              }}
          />
        </motion.section>

        <motion.section className="tvunit-section" {...fadeInUp}>
          <h2>Custom-Built TV Units</h2>
          <p>Elevate your entertainment space with our stylish and space-efficient custom TV units...</p>
          <img 
            src="/images/TV_unit.png" 
            alt="TV Unit" 
            style={
              { width: '100%',
                borderRadius: '10px',
                marginTop: '20px',
                border: '1px solid black',
              }} 
          />
        </motion.section>

        <motion.section className="workstation-section" {...fadeInUp}>
          <h2>Home Workstations</h2>
          <p>Work smarter with our ergonomic and inspiring home office designs...</p>
          <img 
            src="https://images.unsplash.com/photo-1616628182505-7d3c2a7fa3aa?auto=format&fit=crop&w=1470&q=80" 
            alt="Home Workstation" 
            style={
              { width: '100%',
                borderRadius: '10px',
                marginTop: '20px',
                border: '1px solid black',
              }}  
          />
        </motion.section>

        <motion.section className="process-section" {...fadeInUp}>
          <h2>Our Design Process</h2>
          <ol>
            <li>Initial Consultation & Site Visit</li>
            <li>Conceptual Design and Layout Planning</li>
            <li>Material Finalization</li>
            <li>Project Execution & Delivery</li>
          </ol>
        </motion.section>

        <motion.section className="projects-section" {...fadeInUp}>
          <h2>Recent Projects</h2>
          <div className="album">
            <div className="projects">
              <video src="/videos/project1.mp4" controls></video>
            </div>
          </div>
        </motion.section>

        <motion.section className="why-choose-section" {...fadeInUp}>
          <h2>Why Choose Saptha Interiors?</h2>
          <ul>
            <li>Client-Centered Custom Designs</li>
            <li>Timely Delivery and Transparent Pricing</li>
            <li>Premium Materials and Finish</li>
            <li>Experienced Team with Artistic Vision</li>
            <li>Comprehensive End-to-End Service</li>
            <li>Focus on Smart Home Integration</li>
            <li>Commitment to Sustainability and Innovation</li>
            <li>Tailored Automation Packages</li>
            <li>Post-Project Support and Maintenance</li>
            <li>Use of Advanced Design Tools & Software</li>
            <li>Future-Ready Spaces with Modern Technologies</li>
          </ul>
        </motion.section>

      </div>
    </div>
  );
};

export default Home;
