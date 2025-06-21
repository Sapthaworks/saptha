import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const Designs = () => {
  return (
    <div className="components">
      <div className="matter">

        <motion.section {...fadeUp}>
          <h1>Interior Design Inspirations</h1>
          <p>
            Our designs begin with imagination and take form through creativity, technology, and craftsmanship.
            Explore how our team visualizes your dream interiors — from hand-drawn layouts to digital mockups.
          </p>
        </motion.section>

        <motion.section {...fadeUp} className="designs-section">
          <h2>Home Interiors</h2>
          <p>
            Your home should be more than just four walls — it should tell your story. At <strong>Saptha Interiors</strong>, we specialize in crafting personalized spaces that reflect your style, comfort, and aspirations.
          </p>
          <p>We offer:</p>
          <ul>
            <li><strong>Living Rooms:</strong> Modern seating, curated décor, and ambient lighting.</li>
            <li><strong>Bedrooms:</strong> Custom wardrobes, cozy textures, and restful layouts.</li>
            <li><strong>Modular Kitchens:</strong> Sleek, space-saving designs with premium finishes.</li>
            <li><strong>Wardrobes:</strong> Sliding, hinged, walk-ins, lofts — all tailored to your needs.</li>
            <li><strong>TV Units & Kids’ Rooms:</strong> Stylish, safe, and storage-savvy designs.</li>
            <li><strong>Pooja Rooms, Dining & Balcony Areas:</strong> Designed with elegance and purpose.</li>
          </ul>
          <p><em>A beautiful, intelligent, and functional home that's truly yours.</em></p>
        </motion.section>

        <motion.section {...fadeUp} className="designs-section">
          <h2>Office Interiors</h2>
          <p>
            A well-designed office isn’t just a workplace — it’s a reflection of your brand, your culture, and your vision. We design modern, ergonomic, and creative office interiors that elevate workspaces and energize teams.
          </p>
          <ul>
            <li><strong>Reception Areas:</strong> Bold first impressions, clean and welcoming.</li>
            <li><strong>Workstations & Cabins:</strong> Productive, spacious, and private layouts.</li>
            <li><strong>Conference Rooms:</strong> Tech-integrated, collaborative spaces.</li>
            <li><strong>Lounge & Pantry Areas:</strong> Designed to refresh and relax.</li>
            <li><strong>Wall Decor & Branding:</strong> Motivational themes with custom identity.</li>
            <li><strong>Lighting & Cable Management:</strong> Sleek, seamless, and smartly integrated.</li>
          </ul>
          <p>We align every element with your brand identity and business goals.</p>
        </motion.section>

        <motion.section {...fadeUp} className="designs-section">
          <h2>Concept Boards & Sketches</h2>
          <p>
            Every project begins with mood boards and rough sketches that capture the look and feel of your space — colors, textures, lighting, and layout ideas.
          </p>
          <div className="album">
            <img
              src="https://images.unsplash.com/photo-1588854337221-4aa1dc8b20b1?auto=format&fit=crop&w=800&q=80"
              alt="Mood board sketch"
              className="design-image"
            />
            <img
              src="/images/design_layout2.avif"
              alt="Design layout sketch"
              className="design-image"
            />
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="designs-section">
          <h2>Digital Room Layouts</h2>
          <p>
            We use tools like AutoCAD and 3D rendering software to show how the final space will look. Clients can see their interiors digitally before execution.
          </p>
          <div className="album">
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790f3c2c99?auto=format&fit=crop&w=800&q=80"
              alt="3D render of living space"
              className="design-image"
            />
            <img
              src="/images/digital_layout.avif"
              alt="Digital layout example"
              className="design-image"
            />
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="designs-section">
          <h2>Modular Kitchens & Wardrobes</h2>
          <p>Our modular solutions are tailored for functionality, space-saving, and modern aesthetics.</p>
          <div className="album">
            <img
              src="/images/modular_kitchen.png"
              alt="Modular kitchen"
              className="design-image"
            />

            <img
              src="https://images.unsplash.com/photo-1598300052804-17aa72a6284b?auto=format&fit=crop&w=800&q=80"
              alt="Wardrobe design"
              className="design-image"
            />
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="designs-section">
          <h2>Wall Art & Canvas Decor</h2>
          <p>
            Accent walls, hand-painted murals, and modern canvas pieces — we believe in making every wall expressive.
          </p>
          <div className="album">
            <img
              src="https://images.unsplash.com/photo-1616627981175-50e87041b2e2?auto=format&fit=crop&w=800&q=80"
              alt="Wall mural"
              className="design-image"
            />
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
              alt="Canvas artwork"
              className="design-image"
            />
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Designs;
