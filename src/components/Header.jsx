import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['Destinations', 'Services', 'About', 'Insights', 'Contact'];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: 'easeOut', delay: 0.1 }}
      className="header-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        padding: '30px 6%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 20,
        pointerEvents: 'auto',
        background: 'transparent',
        border: 'none',
        boxShadow: 'none'
      }}
    >
      {/* Brand Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a 
          href="#" 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <img 
            src={logoImg} 
            alt="TRAVINNO Logo" 
            style={{ 
              height: '36px', 
              width: 'auto',
              display: 'block'
            }} 
          />
        </a>
      </div>

      {/* Spaced Menu Links */}
      <div className="desktop-nav-container">
        <nav style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                opacity: 0.8,
                position: 'relative',
                padding: '6px 0',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.color = 'var(--accent-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.8';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              {item}
              <motion.span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'var(--accent-red)',
                  scaleX: 0,
                  originX: 0,
                }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </a>
          ))}
        </nav>
      </div>

      {/* Right side CTA Button (Partner Portal) - Solid Red Rectangle (Black Tomato style) */}
      <div className="desktop-portal-container">
        <a
          href="#partner-portal"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            backgroundColor: 'var(--accent-blue)', // Solid luxury dark blue
            textDecoration: 'none',
            padding: '12px 26px',
            borderRadius: '0px', // Flat rectangular
            display: 'block',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#0B1220';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-blue)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          Partner Portal
        </a>
      </div>

      {/* Mobile Menu Toggle (Visible only on mobile screen widths) */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
        aria-label="Toggle Navigation Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="mobile-menu-overlay"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                {item}
              </a>
            ))}
            <a
              href="#partner-portal"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-portal-btn"
            >
              Partner Portal
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
