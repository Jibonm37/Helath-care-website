import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = (props) => {
    const { name, fee, description, img ,index,coach } = props.service;
    
    return (
      <div class="col p-3 ">
          <div class="card p-2 App border-white rounded ">
            <img src={img} alt="..."/>
            <div class="card-body App">
              <h5 class="card-title text-light">{name} </h5>
              <h6 className='text-light'>{fee}</h6>
              <p class="card-text text-light">{description}</p>
              <Link to={`/service/${index}`}>
              <button className='btn-info rounded'>Book Now</button>
              </Link>
            </div>
          </div>
        </div>


    );
};

export default Service;