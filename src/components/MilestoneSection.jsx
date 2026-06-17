import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const milestonesData = [
  { number: 150, suffix: 'K+', label: 'Happy Clients' },
  { number: 70, suffix: '+', label: 'Travel Professionals' },
  { number: 1000, suffix: '+', label: 'Global Travel Partners' },
  { number: 20, suffix: '+', label: 'Years of Expertise' }
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1], // Custom smooth easeOut
        onUpdate: (latest) => {
          if (ref.current) {
            // format with thousands separator for 1000+ if needed
            const val = Math.floor(latest);
            ref.current.textContent = val + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

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
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
            >
              <div className="milestone-number">
                <Counter value={item.number} suffix={item.suffix} />
              </div>
              <div className="milestone-label">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
