import React from 'react';
import './Home.css'
import img1 from '../../img/abs.jpg'
import img2 from '../../img/chest.jpg'
import img3 from '../../img/background.jpg'
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='home-div p-5'>
          <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>



            
            <div className="input-group mb-3 mt-3">
    <input type="text" className="form-control" placeholder="Find Service Which You Want" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
    <span className="input-group-text btn-primary" id="basic-addon2">Find</span>
    </div>




           <div className='py-5'>
           <h1 className='pt-5 text-light text-'>Let's <span className='text-success'> Do This,</span> <span className='text-primary'>Together​</span></h1>
           </div>


            <div className='pb-5 mb-4'>
            <h3 className='text-light mt-5 pt-5'>Join a welcoming gym that exists <span className='text-warning'>to help you get to a healthier place</span> - by giving the right support at the right times, in the ways you want.</h3>
            </div>
        </div>
    );
};

export default Home;