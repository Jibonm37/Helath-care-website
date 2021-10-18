import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = (props) => {
    const { name, fee, description, img ,_id,coach } = props.service;
    console.log(props.service)
    return (
      <div class="col p-3 ">
          <div class="card p-2 App border-white rounded ">
            <img src={img} alt="..."/>
            <div class="card-body App">
              <h5 class="card-title text-light">{name}</h5>
              <h6 className='text-light'>{fee}</h6>
              <p class="card-text text-light">{description}</p>
              <button className='btn-info rounded'>Book Now</button>
            </div>
          </div>
        </div>

  //       <div className="pb-3 service-div">
  //       <div className="card service ">
  // <img src={img} className="card-img-top service-img" alt="..."/>
  // <div className="card-body">
  //   <h4 className="card-title">{name}</h4>
  //   <h5>Trainer : {coach}</h5>

  //   <p>${fee}</p>
  //   <p className="card-text">{description}</p>
  //   <a className="btn btn-primary">Book Now</a>
  // </div>
  //   </div>
  //   </div>
    );
};

export default Service;