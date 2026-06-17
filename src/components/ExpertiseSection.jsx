import React from 'react';
import { motion } from 'framer-motion';

const expertiseData = [
  {
    title: 'Leisure Travel',
    description: 'Curated travel experiences designed around comfort, discovery and unforgettable moments.'
  },
  {
    title: 'Group Tours',
    description: 'Seamless planning and execution for leisure groups, educational tours and special interest travel.'
  },
  {
    title: 'MICE & Events',
    description: 'Professional management of meetings, incentives, conferences and destination events.'
  },
  {
    title: 'Corporate Travel',
    description: 'Reliable travel solutions tailored for businesses and corporate travellers.'
  },
  {
    title: 'Ground Handling',
    description: 'End-to-end destination support, transfers, logistics and operational coordination.'
  },
  {
    title: 'Luxury Experiences',
    description: 'Exclusive experiences crafted for discerning travellers seeking something extraordinary.'
  }
];

export default function ExpertiseSection() {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <motion.h2
          className="expertise-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Our Expertise
        </motion.h2>
        <motion.p
          className="expertise-intro"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          Delivering seamless destination management solutions through local expertise, operational excellence and trusted partnerships.
        </motion.p>
        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              className="expertise-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: (index % 3) * 0.12 }}
            >
              <h3 className="expertise-card-title">{item.title}</h3>
              <p className="expertise-card-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
