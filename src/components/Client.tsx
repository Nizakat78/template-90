import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      icon: '👨‍🍳',
      label: 'Professional Chefs',
      value: 420,
    },
    {
      icon: '🍔',
      label: 'Items Of Food',
      value: 320,
    },
    {
      icon: '🍴',
      label: 'Years Of Experienced',
      value: '30+',
    },
    {
      icon: '🍕',
      label: 'Happy Customers',
      value: 220,
    },
  ];

  return (
    <section className="relative bg-cover bg-center text-white py-16"
      style={{
        backgroundImage: `url('/bgclient.svg')`,
      }}
    >
      {/* Overlay for background opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div> {/* Adjusted opacity to 80% */}

      <div className="relative container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="text-yellow-500 text-4xl">{stat.icon}</div>
            <p className="text-lg font-semibold">{stat.label}</p>
            <h2 className="text-3xl font-bold">{stat.value}</h2>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
