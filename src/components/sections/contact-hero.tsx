import React from 'react';

const ContactHero = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-[#fef3f2] via-[#f0fdf4] to-[#ecfeff]">
      <div className="px-7 mx-auto text-center">
        <h1 
          className="text-5xl font-bold text-[#0f172a] mb-6"
          style={{
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: '24px'
          }}
        >
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p 
          className="text-xl text-[#475569] max-w-3xl mx-auto"
          style={{
            fontSize: '20px',
            lineHeight: '1.5',
            maxWidth: '768px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;