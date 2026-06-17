import React from 'react';
import { motion } from 'framer-motion';

export default function EditorialSection() {
  return (
    <section className="editorial-section">
      <motion.div
        className="editorial-container"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="editorial-label">Who We Are</span>
        <div className="editorial-text-wrapper">
          <p className="editorial-paragraph">
            For over two decades, Travinno has been creating seamless travel experiences across the Middle East and Asia, combining deep local expertise with global standards of service. As a trusted Destination Management Company, we partner with travel professionals, corporates and industry stakeholders to deliver thoughtfully curated journeys, reliable ground support and exceptional destination experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
