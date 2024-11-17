import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard';

export default function Services() {
  const [services, setServices] = useState([]);
    useEffect(()=>{
      fetch('data.json')
      .then(res=>res.json())
      .then(services=>setServices(services))
    },[])
    // console.log(services);
  return (
    <div>
        <h2 className='text-3xl font-bold'>Our Services {services.length}</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        {
            services.map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
        }
        </div>
    </div>
  )
}
