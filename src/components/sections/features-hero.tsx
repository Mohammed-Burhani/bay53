import React from 'react';

const FeaturesHero = () => {
  return (
    <section 
      className="relative py-20 px-4 bg-gradient-to-br from-[#fef3f2] via-[#f0fdf4] to-[#ecfeff]"
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        minHeight: '288px',
        margin: '0px',
        padding: '80px 16px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: '0px',
        boxShadow: 'none',
        zIndex: 'auto'
      }}
    >
      <div 
        className="px-7 mx-auto text-center"
        style={{
          display: 'block',
          position: 'static',
          margin: '0px auto',
          padding: '0px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fontSize: '16px',
          fontFamily: 'var(--font-sans)',
          borderRadius: '0px',
          boxShadow: 'none',
          zIndex: 'auto'
        }}
      >
        <h1 
          className="text-5xl font-bold text-[#0f172a] mb-6"
          style={{
            display: 'block',
            position: 'static',
            margin: '0px 0px 24px',
            padding: '0px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: '1.2',
            letterSpacing: '-0.025em',
            fontFamily: 'var(--font-sans)',
            borderRadius: '0px',
            boxShadow: 'none',
            zIndex: 'auto'
          }}
        >
          Powerful <span className="gradient-text">Features</span> for Modern Businesses
        </h1>
        <p 
          className="text-xl text-[#475569] max-w-3xl mx-auto"
          style={{
            display: 'block',
            position: 'static',
            maxWidth: '768px',
            margin: '0px auto',
            padding: '0px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fontSize: '20px',
            lineHeight: '1.625',
            fontFamily: 'var(--font-sans)',
            borderRadius: '0px',
            boxShadow: 'none',
            zIndex: 'auto'
          }}
        >
          Bay53 comes packed with features designed to streamline your operations, boost productivity, and drive business growth
        </p>
      </div>
    </section>
  );
};

export default FeaturesHero;