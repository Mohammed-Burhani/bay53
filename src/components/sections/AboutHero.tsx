import React from 'react';

const AboutHero = () => {
  return (
    <section 
      className="relative py-20 px-4 bg-gradient-to-br from-[#fef3f2] via-[#f0fdf4] to-[#ecfeff]"
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        height: 'auto',
        minHeight: '260px',
        padding: '80px 16px',
        margin: '0px',
      }}
    >
      <div 
        className="px-7 mx-auto text-center"
        style={{
          display: 'block',
          position: 'static',
          margin: '0px auto',
          padding: '0px',
        }}
      >
        <h1 
          className="text-5xl font-bold text-[#0f172a] mb-6"
          style={{
            display: 'block',
            fontSize: '48px',
            fontWeight: 700,
            marginBottom: '24px',
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            letterSpacing: '-0.025em',
            lineHeight: '1.25',
          }}
        >
          About <span className="gradient-text">Burhani Technologies</span>
        </h1>
        <p 
          className="text-xl text-[#475569] max-w-3xl mx-auto"
          style={{
            display: 'block',
            fontSize: '20px',
            lineHeight: '1.6',
            maxWidth: '768px',
            margin: '0px auto',
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
          }}
        >
          Empowering businesses with cutting-edge ERP solutions since 2010
        </p>
      </div>
    </section>
  );
};

export default AboutHero;