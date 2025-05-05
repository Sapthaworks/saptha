import React from 'react';
const Home = () => {
  return (
    <div className="components">
      <div className="matter">

        {/* Hero Section */}
        <section id='logosection'>
          <img src="./images/SAPTHA.ico" alt="saptha" /> 
        </section>
        <section>
          <h1>Crafting Spaces That Feel Like Home</h1>
          <p>
            Modular, classic, and elegant interior designs tailored to bring warmth,
            style, and soul into every corner of your home.
          </p>
        </section>

        {/* About Us */}
        <section>
          <h2>About Us</h2>
          <p>
            Saptha Interiors is a creative and customer-focused interior design studio,
            blending modular innovation with classic elegance. We transform houses into warm,
            inviting homes that reflect your personality and lifestyle.
          </p>
        </section>

        {/* Our Services */}
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Modular Kitchen & Wardrobes</li>
            <li>Living & Bedroom Interiors</li>
            <li>False Ceilings & Lighting</li>
            <li>TV Units & Storage Solutions</li>
            <li>End-to-End Custom Interior Solutions</li>
          </ul>
        </section>

        {/* How We Work */}
        <section>
          <h2>How We Work</h2>
          <ul>
            <li><span>📏</span> <strong>Site Measurement:</strong> Accurate measurements for a perfect fit.</li>
            <li><span>🪵</span> <strong>Material Selection:</strong> Best wood for each area, ensuring durability and appeal.</li>
            <li><span>🧠</span> <strong>Design & Schematics:</strong> AI + expertise = stunning functional layouts.</li>
            <li><span>🎯</span> <strong>Tailored for You:</strong> Unique designs that match your taste and lifestyle.</li>
            <li><span>💰</span> <strong>Transparent Quotation:</strong> Clear pricing with no hidden costs.</li>
            <li><span>👷‍♂️</span> <strong>Skilled Workforce:</strong> Experienced carpenters delivering premium finishes.</li>
            <li><span>🧰</span> <strong>Premium Materials:</strong> High-quality laminates, hardware, and adhesives.</li>
            <li><span>⏱</span> <strong>On-Time Delivery:</strong> Timely handover without compromising quality.</li>
            <li><span>🛠</span> <strong>End-to-End Service:</strong> Complete interior solutions from start to finish.</li>
            <li><span>🌟</span> <strong>Customer Satisfaction:</strong> Loved and trusted by happy homeowners.</li>
            <li><span>🎨</span> <strong>Style Versatility:</strong> Modular, classic, or elegant — we adapt to your vision.</li>
            <li><span>🔄</span> <strong>Seamless Coordination:</strong> Hassle-free communication and smooth progress.</li>
            <li><span>🧹</span> <strong>Post-Installation Support:</strong> Clean-up and aftercare for long-term perfection.</li>
          </ul>
        </section>

        {/* our projects */}
        <section>
            <h2>Our Projects</h2>
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
        </section>


        {/* Why Choose Us */}
        <section>
          <h2>Why Choose Us?</h2>
          <p>We craft interiors that reflect who you are.</p>
          <p>From elegant living rooms to cozy bedrooms,</p>
          <p>we blend style, comfort, and functionality.</p>
          <p>Every detail is thoughtfully designed.</p>
          <p>Modern, minimalist, or luxurious —</p>
          <p>your choice, our design.</p>
          <p>Let your home tell your story.</p>
          <p>Trusted by homeowners and businesses alike.</p>
          <p>Explore our portfolio and get inspired.</p>
          <p>Your perfect space is just a consultation away.</p>
        </section>
      </div>
    </div>
  );
};

export default Home;