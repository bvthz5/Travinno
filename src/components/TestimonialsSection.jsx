import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ava Green',
    username: '@ava',
    body: 'Travinno made our regional tour logistics completely effortless and reliable.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
    country: '🇦🇺 Australia',
  },
  {
    name: 'Ana Miller',
    username: '@ana',
    body: 'The level of ground support and curation is unmatched in luxury destination management.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    country: '🇩🇪 Germany',
  },
  {
    name: 'Mateo Rossi',
    username: '@mat',
    body: 'Outstanding MICE execution! Every detail was handled with precision and care.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    country: '🇮🇹 Italy',
  },
  {
    name: 'Maya Patel',
    username: '@maya',
    body: 'Their deep local expertise across Asia made our corporate retreat a massive success.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
    country: '🇮🇳 India',
  },
  {
    name: 'Noah Smith',
    username: '@noah',
    body: 'Seamless ground transfers and luxury experiences. Highly recommend their DMC services!',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    country: '🇺🇸 USA',
  },
  {
    name: 'Lucas Stone',
    username: '@luc',
    body: 'Incredibly responsive team and tailored itineraries that our clients absolutely loved.',
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150&h=150',
    country: '🇫🇷 France',
  },
  {
    name: 'Haruto Sato',
    username: '@haru',
    body: 'Exceptional standards of service and operational execution across the Middle East.',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150',
    country: '🇯🇵 Japan',
  },
  {
    name: 'Emma Lee',
    username: '@emma',
    body: 'Our VIP clients had a wonderful, worry-free trip. Reliable ground support throughout.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150',
    country: '🇨🇦 Canada',
  },
  {
    name: 'Carlos Ray',
    username: '@carl',
    body: 'Flexible, proactive, and professional. The ideal partner for global travel professionals.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150',
    country: '🇪🇸 Spain',
  },
];

function TestimonialCard({ img, name, username, body, country }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-header">
        <img src={img} alt={name} className="testimonial-card-avatar" loading="lazy" />
        <div className="testimonial-card-info">
          <div className="testimonial-card-name">
            {name} <span className="testimonial-card-flag">{country}</span>
          </div>
          <div className="testimonial-card-username">{username}</div>
        </div>
      </div>
      <blockquote className="testimonial-card-body">"{body}"</blockquote>
    </div>
  );
}

function MarqueeColumn({ reverse = false }) {
  return (
    <div className="testimonials-marquee-column">
      <div className={`testimonials-marquee-track ${reverse ? 'reverse' : ''}`}>
        {testimonials.map((item, idx) => (
          <TestimonialCard key={`orig-${idx}`} {...item} />
        ))}
        {testimonials.map((item, idx) => (
          <TestimonialCard key={`dup-${idx}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.h2
          className="testimonials-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Testimonials
        </motion.h2>
        <motion.p
          className="testimonials-intro"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          Hear from our global travel partners, corporate clients and leisure professionals who trust Travinno to deliver exceptional journeys.
        </motion.p>

        {/* 3D Perspective Box */}
        <motion.div
          className="testimonials-perspective-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
        >
          {/* Fading Edge Overlays */}
          <div className="testimonials-overlay-top" />
          <div className="testimonials-overlay-bottom" />
          <div className="testimonials-overlay-left" />
          <div className="testimonials-overlay-right" />

          {/* 3D Angled Vertical Grid */}
          <div className="testimonials-3d-grid">
            <MarqueeColumn />
            <MarqueeColumn reverse />
            <MarqueeColumn />
            <MarqueeColumn reverse />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
