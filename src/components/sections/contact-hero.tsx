import React from 'react';

const ContactHero = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="px-7 mx-auto text-center">
        <h1 
          className="text-5xl font-bold text-gray-900 mb-6"
          style={{
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: 1,
            color: '#111827',
            marginBottom: '24px'
          }}
        >
          Get in Touch
        </h1>
        <p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          style={{
            fontSize: '20px',
            lineHeight: '1.5',
            color: '#4b5563',
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