import React from 'react';
import icon from '../../../assets/icons/quote.svg';


const Testimonial = () => {

    const testimonialData = [
        {
            id: 1,
            name: "Object 1",
            area: "Area 1",
            img: "image1.jpg",
            details: "Details about Object 1"
        },
        {
            id: 2,
            name: "Object 2",
            area: "Area 2",
            img: "image2.jpg",
            details: "Details about Object 2"
        },
        {
            id: 3,
            name: "Object 3",
            area: "Area 3",
            img: "image3.jpg",
            details: "Details about Object 3"
        }
    ];

    return (
        <section className='mt-28 mx-12'>
            <div className='flex justify-between mb-20'>
                <div>
                    <h3 className='text-xl font-bold text-secondary'>Testimonial</h3>
                    <h2 className='text-4xl text-accent mt-2'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-48' src={icon} alt="" />
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonial;