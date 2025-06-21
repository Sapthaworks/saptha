import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const Services = () => {
  return (
    <div className="components">
      <div className="matter">

        <motion.section {...fadeUp}>
          <h1>Transforming Spaces with Style</h1>
          <p>
            From cozy bedrooms to functional workspaces, Saptha Interiors delivers aesthetic, comfort, and utility in every design.
          </p>
        </motion.section>

        <motion.section {...fadeUp}>
          <h2>Complete Interior Services</h2>
          <ul>
            <li>✅ Modular Kitchens & Wardrobes</li>
            <li>✅ Living Room Interiors</li>
            <li>✅ Bedroom Interiors</li>
            <li>✅ Kids Room Interiors</li>
            <li>✅ Pooja Room & Prayer Areas</li>
            <li>✅ TV Units & Entertainment Walls</li>
            <li>✅ Crockery Units & Bar Units</li>
            <li>✅ Study Tables & Home Libraries</li>
            <li>✅ Work From Home Office Setups</li>
            <li>✅ Office Interior Design</li>
            <li>✅ False Ceilings & LED Lighting</li>
            <li>✅ Accent Walls & Wall Panelling</li>
            <li>✅ Storage & Loft Cabinets</li>
            <li>✅ Bathroom Vanity Units</li>
            <li>✅ Balcony Seating & Planters</li>
            <li>✅ Dining Areas & Side Units</li>
            <li>✅ Entry Foyers & Shoe Racks</li>
            <li>✅ Partition Walls & Jali Panels</li>
            <li>✅ Canvas & Wall Art Decoration</li>
            <li>✅ 3D Design Visualization & Turnkey Solutions</li>
          </ul>
        </motion.section>

        <motion.section {...fadeUp}>
          <h2>Our Process</h2>
          <ul>
            <li>📏 <strong>Site Visit & Measurement:</strong> Perfect planning starts with precision.</li>
            <li>🎨 <strong>Design Ideation & Moodboards:</strong> Bring your personality into every design.</li>
            <li>🛠 <strong>Material Finalization:</strong> Premium wood, laminates, and hardware.</li>
            <li>🧠 <strong>3D Visualization:</strong> Walk through your space before execution.</li>
            <li>👷‍♂️ <strong>On-Site Work:</strong> Professional, clean, and timely installations.</li>
            <li>🌟 <strong>Final Handover:</strong> Quality-checked and ready for your lifestyle.</li>
          </ul>
        </motion.section>

        <motion.section {...fadeUp}>
          <h2>Project Glimpses</h2>
          <div className="album">
            <div className="projects">
              <video src="./videos/project1.mp4" controls></video>
            </div>
            <div className="projects">
              <video src="./videos/project1.mp4" controls></video>
            </div>
            <div className="projects">
              <video src="./videos/project1.mp4" controls></video>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp}>
          <h2>Why Saptha Interiors?</h2>
          <p>✔ Personalized design for every lifestyle</p>
          <p>✔ Premium materials with lasting durability</p>
          <p>✔ Transparent pricing — no hidden charges</p>
          <p>✔ Timely delivery with detailed execution</p>
          <p>✔ After-service support and warranty</p>
          <p>✔ Trusted by hundreds of happy clients</p>
        </motion.section>

      </div>
    </div>
  );
};

export default Services;
