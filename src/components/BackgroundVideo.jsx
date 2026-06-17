import React from 'react';

export default function BackgroundVideo({ src }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0B1220',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1,
          zIndex: 1
        }}
      />

      {/* Subtle Uniform Dark Tint Overlays */}
      <div className="cinematic-overlay" />
      <div className="vignette-overlay" />
      <div className="glow-overlay" />
    </div>
  );
}
