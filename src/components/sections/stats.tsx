import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      value: "14+",
      label: "Years of Experience",
    },
    {
      value: "1000+",
      label: "Happy Clients",
    },
    {
      value: "500+",
      label: "Active Installations",
    },
    {
      value: "10,000+",
      label: "Support Tickets Resolved",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-xl border bg-white text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="p-6 pt-6">
            <div 
              className="text-4xl font-bold text-indigo-600 mb-2"
              style={{
                fontSize: '2.25rem',
                lineHeight: '2.5rem',
                color: '#4f46e5',
                fontWeight: '700',
              }}
            >
              {stat.value}
            </div>
            <div 
              className="text-sm text-gray-600"
              style={{
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                color: '#4b5563',
              }}
            >
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;