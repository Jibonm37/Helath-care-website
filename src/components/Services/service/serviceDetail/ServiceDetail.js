import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const [singleService, setSingleService] = useState([]);


    const {index}= useParams();
    
  useEffect(() =>{
      
      fetch('/public/fakedata.json/')
      .then(res => res.json())
      .then(data => setSingleService(data[index]))
  },[index])
    console.log(singleService)
    
    return (
        <div>
            <h1>hello{singleService.name}</h1>
        </div>
    );
};

export default ServiceDetail;