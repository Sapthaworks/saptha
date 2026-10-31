import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const interiorServices = [
  { title: "Modular Kitchens & Wardrobes", desc: "Ergonomic, space-saving layouts with soft-close hardware and sleek finishes." },
  { title: "Living & Bedroom Interiors", desc: "Curated ambient lighting, custom furnishings, and tailored comfort." },
  { title: "Custom TV & Entertainment Walls", desc: "Modern acoustic panelling with integrated, concealed wire management." },
  { title: "Home Office & Study Spaces", desc: "Focus-driven setups equipped with ergonomic cable routing and book storage." },
  { title: "False Ceilings & Lighting", desc: "Cove lighting, architectural spotlights, and ambient drop-ceiling designs." },
  { title: "Pooja & Prayer Corners", desc: "Serene sacred spaces carved out with custom jali work and CNC patterns." },
  { title: "Vanity & Bathroom Cabinets", desc: "Moisture-resistant materials paired with elegant back-lit mirror consoles." },
  { title: "Balcony & Dining Spaces", desc: "Weather-durable outdoor decks, dining sideboards, and custom planters." }
];

const processSteps = [
  { step: "01", title: "Site Visit & Survey", desc: "Laser measurements, structure inspection, and preliminary lifestyle mapping." },
  { step: "02", title: "3D Design & Moodboards", desc: "Digital walkthroughs and realistic renders before any physical work starts." },
  { step: "03", title: "Material Selection", desc: "Direct hand-picking of premium laminates, hardware, finishes, and quartz." },
  { step: "04", title: "Precision Execution", desc: "Factory-finish carpentry, dust-controlled site work, and electrical installs." },
  { step: "05", title: "Handover & Support", desc: "Rigorous quality check, final cleaning, and warranty coverage documentation." }
];

const otherVerticals = [
  {
    icon: "🏠",
    title: "Smart Home Automation",
    desc: "Complete IoT switch integration, motorized curtains, scene controllers, and security systems."
  },
  {
    icon: "📣",
    title: "Digital Growth & Marketing",
    desc: "High-impact visual campaigns and lead pipelines built for modern interior & architecture brands."
  },
  {
    icon: "👨‍💻",
    title: "Tech & Systems Hiring",
    desc: "End-to-end technical recruiting and staffing for emerging startups and digital engineering teams."
  }
];

const Services = () => {
  return (
    <div className="components">
      <div className="matter services-container">

        {/* Intro Section */}
        <motion.section className="services-hero" {...fadeUp}>
          <h1>Transforming Spaces with Style & Intelligence</h1>
          <p>
            From bespoke residential interiors to intelligent automation, Saptha balances architectural aesthetics, material durability, and modern engineering.
          </p>
        </motion.section>

        {/* Complete Interior Services */}
        <motion.section className="services-section" {...fadeUp}>
          <h2>Complete Interior Solutions</h2>
          <div className="services-grid">
            {interiorServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Multi-Disciplinary Verticals */}
        <motion.section className="verticals-section" {...fadeUp}>
          <h2>Specialized Solutions</h2>
          <div className="verticals-grid">
            {otherVerticals.map((item, index) => (
              <motion.div 
                key={index} 
                className="vertical-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="vertical-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Step-by-Step Process */}
        <motion.section className="process-section" {...fadeUp}>
          <h2>Our Design & Build Process</h2>
          <div className="process-pipeline">
            {processSteps.map((item, index) => (
              <div key={index} className="process-node">
                <span className="step-number">{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section className="why-us-section" {...fadeUp}>
          <h2>Why Choose Saptha?</h2>
          <div className="benefits-list">
            <div className="benefit-item">✔ Client-first design tailored to your routine</div>
            <div className="benefit-item">✔ Factory-finished precision & branded hardware</div>
            <div className="benefit-item">✔ Fixed schedules with transparent pricing</div>
            <div className="benefit-item">✔ Seamless integration with modern smart automation</div>
            <div className="benefit-item">✔ Comprehensive warranty & ongoing after-sales support</div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Services;