import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className=' bg-dark p-4 pt-5'>
          <div className="row footer-detail">
          <div className='col text-light'>
                <h3 className='fs-6 mb-4'>EMPLOYEE WELLNESS</h3>
                <h3 className='fs-6 mb-4'>PRIVACY POLICY</h3>
                <h3 className='fs-6 mb-4'>TERMS AND CONDITIONS</h3>
                <h3 className='fs-6 mb-4'>SITEMAP</h3>
                
            </div>
            <div className='col text-light'>
                <h3 className='fs-6 mb-4'>MEMBERS</h3>
                <h3 className='fs-6 mb-4'>COACH AND TRAINNERS</h3>
                <h3 className='fs-6 mb-4'>FAQS</h3>
                <h3 className='fs-6 mb-4'>CONTACT US</h3>
                
            </div>
            <div className='col text-light'>
                <a target='_blank' href='https://www.facebook.com/jibon.jibonraz.5' className='fs-2 mb-4'>
                <i class="fab fa-facebook"></i>
                </a>
                <br />
                <a target='_blank' href=''  className='fs-2 mb-4 text-danger'>
                <i class="far fa-envelope"></i>
                    </a>
                    <br />
                <a target='_blank' href='https://twitter.com/jibonarhasan'  className='fs-2 mb-4 text-info'>
                <i class="fab fa-twitter"></i>
                </a>
                <br />
                <a target='_blank' href='https://github.com/Jibonm37'  className='fs-2 mb-4 '>
                <i class="fab fa-github"></i>
                    </a>
                
            </div>
          </div>
                <div className='text-light mt-5 pt-5'>
                    <h1 className='fs-2 mt-5 pt-4 footer-name'>
                    <span className='fs-4 text-danger'>&copy; </span> 
                        GYM EXTREME <span className='fs-3 text-info'>2021</span>. All rights reserved.
                    
                    </h1>
                </div>

        </div>
    );
};

export default Footer;