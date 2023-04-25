import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import bgImg from '../../../assets/images/appointment.png';

const ContactSection = () => {
    return (
        <section className='h-[600px] mt-36' style={{
            background: `url(${bgImg})`
        }}>
            <div className='flex items-center justify-center h-[600px]'>
                <div className='lg:w-1/3 p-5'>
                    <div className='text-center mb-10'>
                        <h3 className='text-xl font-bold text-secondary'>Contact Us</h3>
                        <h2 className='text-4xl text-white mt-2'>Stay connected with us</h2>
                    </div>
                    <form className='flex flex-col'>
                        <input type="text" placeholder="Email Address" className="input mb-5" />
                        <input type="text" placeholder="Subject" className="input mb-5" />
                        <textarea className="textarea mb-9 h-32" placeholder="Your message"></textarea>
                        <div className='flex justify-center'>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;