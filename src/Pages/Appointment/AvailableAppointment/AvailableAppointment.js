import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointment = ({ selectedDate }) => {    
    const [treatment, setTreatment] = useState(null);

// using React Query / TanStack Query

    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())
    })

// another way using react query

    // const {data: appointmentOptions = [] } = useQuery({
    //     queryKey: ['appointmentOptions'],
    //     queryFn: async()=>{
    //         const res = await fetch('http://localhost:5000/appointmentOptions');
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    

    console.log(treatment)
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-semibold'>
                Available Services on {format(selectedDate, 'PP')}
            </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOptions
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;