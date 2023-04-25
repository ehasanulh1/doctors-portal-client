import React from 'react';
import footerBg from '../../../assets/images/footer.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='' style={{
            background: `url(${footerBg})`,
            backgroundSize: 'cover'

        }}>
            <footer className=" p-10 text-base-content">
                <div className='footer p-10'>
                    <div>
                        <span className="footer-title">SERVICES</span>
                        <Link to='/' className="link link-hover">Emergency Checkup</Link>
                        <Link to='/' className="link link-hover">Monthly Checkup</Link>
                        <Link to='/' className="link link-hover">Weekly Checkup</Link>
                        <Link to='/' className="link link-hover">Deep Checkup</Link>
                    </div>
                    <div className='justify-center w-full'>
                        <div className='grid gap-2 grid-cols-1'>
                            <span className="footer-title">ORAL HEALTH</span>
                            <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                            <Link to='/' className="link link-hover">Cavity Filling</Link>
                            <Link to='/' className="link link-hover">Teath Whitening</Link>
                        </div>
                    </div>

                    <div className='justify-end w-full'>
                        <div className='grid gap-2 grid-cols-1'>
                            <span className="footer-title">OUR ADDRESS</span>
                            <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>
                        </div>
                    </div>
                </div>
                <div className='text-center pt-10'>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;