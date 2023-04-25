import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { details, img, author, area } = testimonial;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{details}</p>
                <div className="card-actions items-center justify-start mt-4">
                    <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-1'>
                        <img className='w-16' src={img} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>{author}</h4>
                        <p>{area}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;