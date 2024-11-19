import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(services => setServices(services));
  }, []);
  
  return (
    <div className="py-16 px-4 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center text-blue-700 mb-8">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
