import React from 'react';
import { motion } from 'framer-motion';

const destinationsData = [
  {
    name: 'Dubai',
    subtitle: 'Luxury Experiences',
    image: 'images/dubai.png'
  },
  {
    name: 'Kenya',
    subtitle: 'Safari Adventures',
    image: 'images/kenya.png'
  },
  {
    name: 'Thailand',
    subtitle: 'Island Escapes',
    image: 'images/thailand.png'
  },
  {
    name: 'Vietnam',
    subtitle: 'Cultural Journeys',
    image: 'images/vietnam.png'
  },
  {
    name: 'Singapore',
    subtitle: 'Modern Wonders',
    image: 'images/singapore.png'
  },
  {
    name: 'Malaysia',
    subtitle: 'Tropical Retreats',
    image: 'images/malaysia.png'
  },
  {
    name: 'Bali',
    subtitle: 'Wellness & Discovery',
    image: 'images/bali.png'
  }
];

export default function DestinationShowcase() {
  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <motion.h2
          className="showcase-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Start Your Journey
        </motion.h2>
        <motion.p
          className="showcase-intro"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          Discover destinations where culture, adventure, luxury and unforgettable experiences come together through local expertise and seamless destination management.
        </motion.p>
      </div>

      <div className="marquee-container">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {destinationsData.map((dest, index) => (
              <div key={`track1-${index}`} className="destination-panel">
                <img
                  src={`${import.meta.env.BASE_URL}${dest.image}`}
                  alt={dest.name}
                  className="destination-image"
                  loading="lazy"
                />
                <div className="destination-overlay" />
                <div className="destination-content">
                  <div className="destination-name">{dest.name}</div>
                  <div className="destination-meta">
                    <span className="destination-subtitle">{dest.subtitle}</span>
                    <span className="destination-explore">
                      Explore Destination <span style={{ marginLeft: '4px' }}>→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="marquee-track" aria-hidden="true">
            {destinationsData.map((dest, index) => (
              <div key={`track2-${index}`} className="destination-panel">
                <img
                  src={`${import.meta.env.BASE_URL}${dest.image}`}
                  alt={dest.name}
                  className="destination-image"
                  loading="lazy"
                />
                <div className="destination-overlay" />
                <div className="destination-content">
                  <div className="destination-name">{dest.name}</div>
                  <div className="destination-meta">
                    <span className="destination-subtitle">{dest.subtitle}</span>
                    <span className="destination-explore">
                      Explore Destination <span style={{ marginLeft: '4px' }}>→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
