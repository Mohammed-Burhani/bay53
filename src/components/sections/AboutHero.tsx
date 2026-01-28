import React from 'react';

const AboutHero = () => {
  return (
    <section 
      className="relative py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
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
        className="max-w-7xl mx-auto text-center"
        style={{
          display: 'block',
          position: 'static',
          margin: '0px auto',
          padding: '0px',
        }}
      >
        <h1 
          className="text-5xl font-bold text-gray-900 mb-6"
          style={{
            display: 'block',
            fontSize: '48px',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '24px',
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            letterSpacing: '-0.025em',
            lineHeight: '1.25',
          }}
        >
          About Burhani Technologies
        </h1>
        <p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          style={{
            display: 'block',
            fontSize: '20px',
            lineHeight: '1.6',
            color: '#4b5563',
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