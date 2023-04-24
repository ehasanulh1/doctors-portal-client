import React from 'react';
import image from '../../../assets/images/doctor-small.png'
import image2 from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-48' style={{
            background: `url(${image2})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row pb-0">
                    <img src={image} className="hidden md:block lg:w-1/2 -mt-24" alt='' />
                    <div>
                        <h4 className='text-xl font-bold text-secondary mb-5'>Appointment</h4>
                        <h1 className="text-4xl text-white font-bold mb-5">Make an appointment Today</h1>
                        <p className="mb-10 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;