import React from 'react';
import { motion } from 'framer-motion';

const milestonesData = [
  { number: '150K+', label: 'Happy Clients' },
  { number: '70+', label: 'Travel Professionals' },
  { number: '1000+', label: 'Global Travel Partners' },
  { number: '20+', label: 'Years of Expertise' }
];

export default function MilestoneSection() {
  return (
    <section className="milestone-section">
      <div className="milestone-container">
        <motion.h2
          className="milestone-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Built on Experience
        </motion.h2>
        <div className="milestones-grid">
          {milestonesData.map((item, index) => (
            <motion.div
              key={index}
              className="milestone-item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.12 }}
            >
              <div className="milestone-number">{item.number}</div>
              <div className="milestone-label">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
