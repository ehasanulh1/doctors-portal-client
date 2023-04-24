import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride",
            img: fluoride
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: "A cavity filling is a form of dental filling wherein the dentist removes the decayed segment of the tooth",
            img: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "Procedure a rubber dam is put over your teeth to protect the gums, and a bleaching product is painted.",
            img: whitening
        }
    ]
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-secondary uppercase'>Our Services</h3>
                <h2 className='text-4xl text-accent mt-2'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;