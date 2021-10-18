import React, { useEffect, useState } from 'react';
import Service from './service/Service';
import './service/services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://mocki.io/v1/7b4f99df-9218-497c-9911-b3e55d9e11ed')
            .then(res => res.json())
            .then(data => setServices(data));
            
    }, [])
    return (
      <div>
          <h1 className='text-danger py-5 border-bottom services-heading'>Our Services</h1>
            <div id='' className='row row-cols-1 row-cols-md-3 g-4'>
           
          
               {
                   services.map((service ,i) => <Service
                   index={i}
                   key = {i}
                   service = {service}
                   ></Service>)
               }
           
       </div>
      </div>
    );
};

export default Services;